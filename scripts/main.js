var onload;

onload = function() {};

yepnope({
  load: ["http://tutuming.github.com/tutuming.tumblr.com/styles/main.css", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js", "http://alexgorbatchev.com/pub/sh/current/styles/shCore.css", "http://alexgorbatchev.com/pub/sh/current/styles/shCore.css", "http://alexgorbatchev.com/pub/sh/current/styles/shThemeRDark.css", "http://alexgorbatchev.com/pub/sh/current/scripts/shCore.js", "http://alexgorbatchev.com/pub/sh/current/scripts/shBrushJScript.js", "http://alexgorbatchev.com/pub/sh/current/scripts/shBrushXml.js", "http://alexgorbatchev.com/pub/sh/current/scripts/shBrushPython.js", "http://tutuming.github.com/tutuming.tumblr.com/scripts/shBrushCoffeeScript.js"],
  complete: function() {
    SyntaxHighlighter.config.bloggerMode = false;
    SyntaxHighlighter.config.stripBrs = true;
    SyntaxHighlighter.defaults['wrap-lines'] = false;
    SyntaxHighlighter.config.clipboardSwf = 'http://alexgorbatchev.com/pub/sh/current/scripts/clipboard.swf';
    SyntaxHighlighter.all();
    return $.document.ready(onload);
  }
});
