var onload;

onload = function() {
  return SyntaxHighlighter.highlight();
};

yepnope({
  load: ["http://tutuming.github.com/tutuming.tumblr.com/styles/main.css", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js", "http://tutuming.github.com/tutuming.tumblr.com/styles/sh/shCore.css", "http://tutuming.github.com/tutuming.tumblr.com/styles/sh/shThemeFadeToGrey.css"],
  complete: function() {
    return yepnope({
      load: ["http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shCore.js"],
      complete: function() {
        return yepnope({
          load: ["http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushJScript.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushXml.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushPython.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushCoffeeScript.js"],
          complete: function() {
            return $(onload);
          }
        });
      }
    });
  }
});
