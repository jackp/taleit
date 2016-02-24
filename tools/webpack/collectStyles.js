/**
 * Collect Styles to render on server side
 */
module.exports = function collectStyles(source) {
  this.cacheable();

  const processedSource = source.replace(/(\r\n|\n|\r)/gm, ' ');

  const cssResult = processedSource.match(/exports\.push\(\[module\.id, "(.*)", "(.*)"]\);/);

  const localsResult = processedSource.match(/exports\.locals.*(\{.*\};)/);

  if (!global.__STYLE_COLLECTOR__) global.__STYLE_COLLECTOR__ = '';

  global.__STYLE_COLLECTOR__ += cssResult[1].replace(/(\\n|\s)/g, '');

  return `module.exports = ${localsResult[1]}`;
};
