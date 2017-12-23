/* eslint-disable */
module.exports = function(templateParams) {
  var htmlWebpackPlugin = templateParams.htmlWebpackPlugin;
  var options = htmlWebpackPlugin.options;

  var meta = '<meta charset="utf-8"><meta content="width=device-width; initial-scale=1.0;" name="viewport">';

  if (options.description) {
    meta += '<meta name="description" content="' + options.description + '">';
  }

  if (options.keywords) {
    meta += '<meta name="keywords" content="' + options.keywords + '">';
  }

  var css = htmlWebpackPlugin.files.css.concat(options.externalCSS || []).map(function(href) {
    return '<link href="' + href + '" rel="stylesheet">';
  }).join('');

  var title = '<title>' + options.title + '</title>';
  var head = '<head>' + meta + title + css + '</head>';

  var entry = '';
  if (options.appMountId) {
    entry = '<div id="' + options.appMountId + '">';
    if (options.isomorphic) {
      entry += '<%- ' + options.isomorphic + ' %>';
    }
    entry += '</div>';
  }

  // must load Intl Polyfill before our own files
  var js = (options.externalJS || []).concat(htmlWebpackPlugin.files.js).map(function(chunk) {
    return '<script src="' + chunk + '"></script>';
  }).join('');

  if (options.isomorphicState) {
    js = '<script>var ' +
      options.isomorphicState.var+' = <%- ' +
      options.isomorphicState.val +
      ' %>;</script>' +
      js;
  }

  var body = '<body>' + entry + js + '</body>';
  var html = '<html';
  if (options.isomorphicHtmlClassName) {
    html += ' class="<%= ' + options.isomorphicHtmlClassName + ' %>"';
  }
  html += '>' + head + body + '</html>';
  return '<!DOCTYPE html>' + html;
};
