
import kra from 'kramed';
import kraUtils from 'kramed/lib/utils';

class InlineLexer extends kra.InlineLexer {
  constructor(links, options, renderer) {
    console.log(links, options, renderer);
    super(links, options, renderer);
    this.rules.em = /QAQQQQQQQQQQQQQQQQQQQQQQQ/;
  }

  output(src, links, options) {
    // console.log(src, links, options);
    return super.output(src);
  };
}

class Parser extends kra.Parser {
  constructor(options, renderer) {
    super(options, renderer);
  }

  parse(src) {
    this.inline = new InlineLexer(src.links, this.options, this.renderer);
    this.tokens = src.reverse();

    let out = '';
    while (this.next()) {
      out += this.tok();
    }

    return out;
  };
}

function parse(src, options, renderer) {
  let parser = new Parser(options, renderer);
  return parser.parse(src);
}




function mdParser(src, opt) {
  try {
    if (opt) opt = kraUtils.merge({}, kra.defaults, opt);
    let tokens = kra.Lexer.lex(src, opt);
    console.log(tokens);
    return parse(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/GitbookIO/kramed.';
    if ((opt || kra.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + kraUtils.escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

mdParser = kraUtils.merge(mdParser, kra);


export { mdParser };

