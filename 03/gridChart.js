function gridChart() {
  var margin = {top: 20, right: 20, bottom: 20, left: 20};
  var width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
      x = d3.scaleBand(),
      y = d3.scaleBand();

  var color = d3.scaleOrdinal(d3.schemeCategory20c)

  function chart(selection) {
    selection.each(function(data) {

      var cols = Math.ceil(Math.sqrt(data.length));

      var rows = Math.ceil(data.length / cols);

      x.domain(d3.range(cols))
        .range([margin.left, width])
        .padding(0.1);

      y.domain(d3.range(rows))
        .range([height, margin.top])
        .padding(0.1);

      var svg = d3.select(this).select("svg");

      // Create the skeletal chart
      if (svg.empty()) {
        svg = d3.select(this).append("svg");
      }

      svg.attr("width", width)
        .attr("height", height);

      svg.selectAll("rect").data(data)
        .enter().append("rect");

      svg.selectAll("rect")
        .transition()
          .attr("x", function(d, i) {
            return x(i % cols);
          })
          .attr("y", function(d, i) {
            return y(Math.floor(i / cols));
          })
          .attr("width", x.bandwidth())
          .attr("height", y.bandwidth())
          .style("fill", color);

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
