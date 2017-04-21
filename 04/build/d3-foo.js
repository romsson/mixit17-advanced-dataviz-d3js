(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3'], factory) :
  (factory((global.d3 = global.d3 || {}),global.d3));
}(this, function (exports,d3) { 'use strict';

  function barchart() {
    var margin = {top: 20, right: 20, bottom: 20, left: 20},
        width = 760,
        height = 120,
        x = d3.scaleBand(),
        y = d3.scaleLinear();

    function chart(selection) {
      selection.each(function(data) {

        var margin = {top: 20, right: 10, bottom: 20, left: 50};

        var width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        x.domain(data)
          .range([margin.left, width])
          .padding(0.1);

        y.domain([0, d3.max(data)])
          .range([height, margin.top]);

        var svg = d3.select(this).select("svg");

        // Create the skeletal chart
        if (svg.empty()) {
          svg = d3.select(this).append("svg");

          svg.append("g")
              .attr("transform", "translate(" + 0 + "," + (height - 100) + ")")
              .call(d3.axisBottom(x));

          svg.append("g")
              .attr("transform", "translate(" + margin.left + "," + 0 + ")")
              .call(d3.axisLeft(y));
        }

        svg.attr("width", width)
          .attr("height", height);

        svg.selectAll("rect").data(data)
          .enter().append("rect");

        svg.selectAll("rect")
          .transition()
            .attr("x", x)
            .attr("y", y)
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return height - y(d); });

        svg.selectAll("rect").data(data)
          .exit()
            .remove();
      });
    }

    chart.margin = function(_) {
      if (!arguments.length) return margin;
      margin = _;
      return chart;
    };

    chart.width = function(_) {
      if (!arguments.length) return width;
      width = _;
      return chart;
    };

    chart.height = function(_) {
      if (!arguments.length) return height;
      height = _;
      return chart;
    };

    return chart;
  }

  exports.barchart = barchart;

  Object.defineProperty(exports, '__esModule', { value: true });

}));