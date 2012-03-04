require([
  "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/XRegExp.js",
  "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
],function(){
  require(["http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shCore.js"], function(){
    require(["http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushJScript.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushXml.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushPython.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushCoffeeScript.js"],function(){
      $(function(){
        SyntaxHighlighter.config.bloggerMode = false;
        SyntaxHighlighter.config.stripBrs = true;
        SyntaxHighlighter.defaults['wrap-lines'] = false;
        SyntaxHighlighter.highlight();
      });
    });
  });
});

