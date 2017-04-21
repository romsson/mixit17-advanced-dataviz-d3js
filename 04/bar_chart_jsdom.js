var d3 = require("d3");
var fs = require("fs");
var vm = require('vm');
require("../02/build/d3-barchart.js")
//var includeInThisContext = function(path) {
// var code = fs.readFileSync(path);
// vm.runInThisContext(code, path);
//}.bind(this);
//
//includeInThisContext("../02/build/d3-barchart.js");

//SVG dimensions
var width = 960,
 height = 500;

var chart = d3.barchart();

console.log(chart.width())

