function lineChart() {
  var margin = {top: 20, right: 20, bottom: 20, left: 20};
  var width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
  var x = d3.scaleLinear(),
      y = d3.scaleLinear();

  var line = d3.line();

  function chart(selection) {
    selection.each(function(data) {

      x.domain([0, data.length])
        .range([margin.left, width]);

      y.domain([0, d3.max(data)])
        .range([height, margin.top]);

      line.x(function(d, i) { return x(i); })
          .y(function(d) { return y(d); });

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

      svg.selectAll(".line").data([data])
        .enter().append("path")
          .attr('class', 'line');

      svg.selectAll(".line")
        .transition()
          .attr("x", x)
          .attr("y", y)
          .attr('d', line);

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
