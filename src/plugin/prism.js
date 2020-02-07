
const languages = ["html", "css", "javascript", "haskell", "python", "cpp", "c", "php", "go", "shell", "bash", "nginx", "sql"];

const languageParsedTag = 'language-parsed';


import Prism from 'prismjs';

const PrismRender = {
    /**
     * @param block {Element}
     */
    render(block) {
        if (block.getAttributeNode(languageParsedTag)) {
            return;
        }
        block.setAttributeNode(document.createAttribute(languageParsedTag));

        let language = '';
        if (block.className.startsWith('lang-')) {
            language = block.className.substr(5);
        } else if (block.className.startsWith('language-')) {
            language = block.className.substr(9);
        } else {
            language = 'plain';
            block.className = 'language-plain' + (block.className ? ' ': '') + block.className;
        }

        block.parentElement.className = 'language-' + language + (block.parentElement.className ? ' ': '') + block.parentElement.className;

        if (language === 'c++') {
            language = 'cpp';
        }

        if (languages.includes(language)) {
            block.innerHTML = Prism.highlight(block.innerHTML, Prism.languages[language], language);
        }
    },
    init() {

    },
};


export {
    PrismRender,
}
