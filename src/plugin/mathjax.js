

function rerender() {
  window.MathJax.Hub.Config({
    showProcessingMessages: true,
    messageStyle: 'none',
    // elements: document.getElementsByClassName('markdown-body'),
    extensions: ['tex2jax.js'],
    jax: ['input/TeX', 'output/HTML-CSS'],
    tex2jax: {
      inlineMath:  [ ['$', '$'] ],
      displayMath: [ ['$$','$$'] ],
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre','code','a'],
      ignoreClass:'comment-content'
    },
    'HTML-CSS': {
      availableFonts: ['STIX','TeX'],
      showMathMenu: false
    }
  });
  setTimeout(()=>{
    window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
  }, 1);
}

let MathJaxRender = {
  rerender
};

export {
  MathJaxRender,
};


