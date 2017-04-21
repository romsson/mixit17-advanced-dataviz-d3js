var tape = require("tape");
var barchart = require("./src/barchart");

//    d3 = require("d3");
//    barchart = require("../02/build/d3-barchart.js");

console.log(d3.barchart)

//console.log(barchart.barchart())

tape("barchart() is a function", function(test) {
  test.equal(typeof barchart, 'function');
  test.end();
});
