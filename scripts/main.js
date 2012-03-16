(function() {

  require(["http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/XRegExp.js", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"], function() {
    return require(["http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shCore.js"], function() {
      return require(["http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushJScript.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushXml.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushPython.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/sh/shBrushCoffeeScript.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/writeCapture.js"], function() {
        return $(function() {
          SyntaxHighlighter.config.bloggerMode = false;
          SyntaxHighlighter.config.stripBrs = true;
          SyntaxHighlighter.defaults["wrap-lines"] = false;
          SyntaxHighlighter.highlight();
          $(".gist").each(function(i) {
            var file, gist, jsUrl, url, _ref;
            url = $(this).text();
            _ref = url.split('?'), gist = _ref[0], file = _ref[1];
            jsUrl = file ? "" + gist + ".js?" + file : "" + gist + ".js";
            return writeCapture.html(this, "<script src=\"" + jsUrl + "\"></script>");
          });
          return $(".tweet").each(function(i) {
            var $tmp;
            $tmp = $("<div />");
            $(this).append($tmp);
            return writeCapture.replaceWith($tmp.get(0), "<script src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>");
          });
        });
      });
    });
  });

  (function() {
    var loadCss;
    loadCss = loadCss = function(url) {
      var link;
      link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = url;
      return document.getElementsByTagName("head")[0].appendChild(link);
    };
    loadCss("http://tutuming.github.com/tutuming.tumblr.com/styles/main.css");
    loadCss("http://tutuming.github.com/tutuming.tumblr.com/styles/sh/shCore.css");
    return loadCss("http://tutuming.github.com/tutuming.tumblr.com/styles/sh/shThemeFadeToGrey.css");
  })();

}).call(this);
