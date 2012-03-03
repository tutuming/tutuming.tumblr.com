var path,
  __slice = Array.prototype.slice;

path = function() {
  var arg, args, _i, _len, _results;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  _results = [];
  for (_i = 0, _len = args.length; _i < _len; _i++) {
    arg = args[_i];
    _results.push(arg.replace('@', 'https://raw.github.com/tutuming/tutuming.tumblr.com/master/scripts/sh/'));
  }
  return _results;
};

SyntaxHighlighter.autoloader.apply(null, path('applescript            @shBrushAppleScript.js', 'actionscript3 as3      @shBrushAS3.js', 'bash shell             @shBrushBash.js', 'coldfusion cf          @shBrushColdFusion.js', 'cpp c                  @shBrushCpp.js', 'c# c-sharp csharp      @shBrushCSharp.js', 'css                    @shBrushCss.js', 'delphi pascal          @shBrushDelphi.js', 'diff patch pas         @shBrushDiff.js', 'erl erlang             @shBrushErlang.js', 'groovy                 @shBrushGroovy.js', 'java                   @shBrushJava.js', 'jfx javafx             @shBrushJavaFX.js', 'js jscript javascript  @shBrushJScript.js', 'perl pl                @shBrushPerl.js', 'php                    @shBrushPhp.js', 'text plain             @shBrushPlain.js', 'py python              @shBrushPython.js', 'ruby rails ror rb      @shBrushRuby.js', 'sass scss              @shBrushSass.js', 'scala                  @shBrushScala.js', 'sql                    @shBrushSql.js', 'vb vbnet               @shBrushVb.js', 'xml xhtml xslt html    @shBrushXml.js'));

$(function() {
  return SyntaxHighlighter.all();
});
