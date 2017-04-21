var webPage = require('webpage');
var fs = require('fs');
var page = webPage.create();

var f = {
  url: "../02/barchart-module.html",
  size: [800, 600],
  format: "png",
  filename: "barchart-module.png"
}

page.open(f.url, function start(status) {
  if (status !== 'success') {
    console.log('Unable to load the address: ', f.url);
    phantom.exit(1);
  } else {
    page.viewportSize = {width: f.size[0], height: f.size[1]};
    page.render(f.filename, {format: f.format, quality: '50'});
    phantom.exit();
  }
});
