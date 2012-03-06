require([
  "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/XRegExp.js",
  "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
],function(){
  require(["http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shCore.js"], function(){
    require(["http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushJScript.js",
             "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushXml.js",
             "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushPython.js",
             "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushCoffeeScript.js",
             "http://tutuming.github.com/tutuming.tumblr.com/scripts/writeCapture.js"],function(){
      $(function(){
        SyntaxHighlighter.config.bloggerMode = false;
        SyntaxHighlighter.config.stripBrs = true;
        SyntaxHighlighter.defaults['wrap-lines'] = false;
        SyntaxHighlighter.highlight();

        $('.gist').each(function(i) {
          writeCapture.html(this, '<script src="'+$(this).text()+'.js"></script>');
        });

        $('.tweet').each(function(i){
          var $tmp = $('<div />');
          $(this).append($tmp);
          writeCapture.replaceWith($tmp.get(0), '<script src="//platform.twitter.com/widgets.js" charset="utf-8"></script>');
        });
      });
    });
  });
});

(function(){
  var loadCss = function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
  };
  loadCss("http://tutuming.github.com/tutuming.tumblr.com/styles/main.css");
  loadCss("http://tutuming.github.com/tutuming.tumblr.com/styles/sh/shCore.css");
  loadCss("http://tutuming.github.com/tutuming.tumblr.com/styles/sh/shThemeFadeToGrey.css");
})();