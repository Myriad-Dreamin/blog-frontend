
import os, sys
from pathlib import Path
from collections import deque
import re
from collections.abc import Iterable

encoding = 'utf-8'

def find_files(ctx, path, omitting_dirs, callback):
    Q = deque()
    Q.append(path)

    while len(Q) > 0:
        gg = Q.pop()
        files = os.listdir(gg)
        
        for fn in files:
            f = os.path.join(gg, fn)
            if os.path.isdir(f):
                if f in omitting_dirs:
                    continue
                Q.append(f)
            if os.path.isfile(f) or os.path.islink(f):
                callback(ctx, f)


js_exts = {'.vue', '.js'}
def text_in_js_file(f):
    def wrap_f(ctx, file_name):
        if os.path.splitext(file_name)[1] in js_exts:
            f(ctx, open(file_name, encoding=encoding).read())
    return wrap_f


class MiddleSnake(object):

    @staticmethod
    def From(text):
        return text.replace('_', '-')

    @staticmethod
    def To(text):
        return text.replace('-', '_')

class BigCamel(object):

    @staticmethod
    def From(text):
        return ''.join(x.title() for x in text.split('_'))

    _underscorer1 = re.compile(r'(.)([A-Z][a-z]+)')
    _underscorer2 = re.compile('([a-z0-9])([A-Z])')

    @staticmethod
    def To(text):
        return _underscorer2.sub(r'\1_\2', _underscorer1.sub(r'\1_\2', s)).lower()

class ConvertStyle(object):

    def __init__(self, value_container=None):
        self.value_container = value_container
        self.fr = None
        self.to = None
    
    def Values(self, value_container):
        self.value_container = value_container
        return self

    def From(self, fr):
        self.fr = fr
        return self

    def To(self, to):
        self.to = to
        return self
    
    def Do(self):
        if isinstance(self.value_container, Iterable):
            return [self.to.From(self.fr.To(x)) for x in self.value_container]
        else:
            return self.to.From(self.fr.To(self.value_container))


def find_all_el_html_tags(path, omitting_dirs):

    el_regex = re.compile(r'<(el-[^\s>]*)')
    @text_in_js_file
    def find_el_html_tags_in_a_file(ctx, text):
        ctx.update(el_regex.findall(text))
    
    el_html_tags = set()
    find_files(el_html_tags, path, omitting_dirs, find_el_html_tags_in_a_file)

    return el_html_tags


def el_import_template(elements, el_html_tags, async_components):
    el_template = """/* generated file, DO NOT EDIT!! */
import {{{import_statements}}} from 'element-ui';
{{import_css_statements}}

function UseElElements(Vue) {
    {{use_statements}}
}

export default UseElElements;

"""
    if async_components is None:
        async_components = set()

    def import_component_statement(cmpnt):
        if cmpnt in async_components:
            return f"Vue.component('el-{async_components[cmpnt]}', () => import(/* webpackChunkName: 'el-{async_components[cmpnt]}' */ 'element-ui/lib/{async_components[cmpnt]}'));"
        else:
            return f'Vue.use({cmpnt});'

    elements = list(sorted(elements))
    el_html_tags = list(sorted(el_html_tags))
    return el_template.\
        replace('{{import_statements}}', ', '.join(filter(lambda s: s not in async_components, elements))).\
        replace('{{import_css_statements}}', '\n'.join(map(lambda s: f"import 'element-ui/lib/theme-chalk/{s[3:]}.css';", el_html_tags))).\
        replace('{{use_statements}}', '\n    '.join(map(import_component_statement, elements)))


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser()

    parser.add_argument('--src', type=str, default='.', help='src path')
    parser.add_argument('--out', type=str, default='src/plugin/element_ui_generated.js', help='path of generated file to output')
    
    args = parser.parse_args()

    omitting_dirs = set(map(lambda p: os.path.join('.', p), ['node_modules', 'dist', 'build', 'config']))

    el_html_tags = list(find_all_el_html_tags(args.src, omitting_dirs))

    async_components = {'DatePicker': 'date-picker', 'TimePicker': 'time-picker'}

    
    generated_file = el_import_template(ConvertStyle(map(lambda s: s[3:], el_html_tags)).From(MiddleSnake).To(BigCamel).Do(), el_html_tags, async_components)
    print(generated_file)
    open(args.out, 'w', encoding=encoding).write(generated_file)
