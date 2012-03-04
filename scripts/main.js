var onload;

onload = function() {};

yepnope([
  {
    load: ["http://tutuming.github.com/tutuming.tumblr.com/styles/main.css", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js", "http://tutuming.github.com/tutuming.tumblr.com/styles/sh/shCore.css", "http://tutuming.github.com/tutuming.tumblr.com/styles/sh/shThemeRDark.css", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shCore.js"]
  }, {
    load: ["http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushJScript.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushXml.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushPython.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushCoffeeScript.js"]
  }, {
    complete: function() {
      SyntaxHighlighter.config.bloggerMode = false;
      SyntaxHighlighter.config.stripBrs = true;
      SyntaxHighlighter.defaults['wrap-lines'] = false;
      SyntaxHighlighter.all();
      return $.document.ready(onload);
    }
  }
]);
