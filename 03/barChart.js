function barChart() {
  var margin = {top: 20, right: 20, bottom: 20, left: 20};

  var width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var x = d3.scaleBand(),
      y = d3.scaleLinear();

  var key = null;
  var filter = function(d) { return d; };

  var accessor_x = function(d) { return d; };
  var accessor_y = function(d) { return d; };

  var click = function(d) { return d; };

  var color = d3.scaleOrdinal(d3.schemeCategory20c)

  function chart(selection) {
    selection.each(function(data) {

      if(key) {
        data = d3.nest().key(key)
            .rollup(function(leaves) { return leaves.length; })
            .entries(data);

        data.sort(function(a, b){
           return d3.descending(a.value, b.value);
        })

        accessor_x = function(d) { return d.key; };
        accessor_y = function(d) { return d.value; };
      }

      x.domain(data.map(function(d) { return accessor_x(d); }))
        .range([margin.left, width - margin.left])
        .padding(0.1);

      y.domain([0, d3.max(data, accessor_y)])
        .range([height - margin.top, margin.top]);

      var svg = d3.select(this).select("svg");

      // Create the skeletal chart
      if (svg.empty()) {
        svg = d3.select(this).append("svg");

        svg.append("g")
            .attr("transform", "translate(" + 0 + "," + (height - margin.top) + ")")
            .call(d3.axisBottom(x));

        svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + 0 + ")")
            .call(d3.axisLeft(y));
      }

      svg.attr("width", width)
        .attr("height", height);

      svg.selectAll("rect").data(data)//.filter(filter))
        .enter().append("rect")
        .on("click", click)

      svg.selectAll("rect")
        .transition()
          .attr("x", function(d) { return x(accessor_x(d)); })
          .attr("y", function(d) { return y(accessor_y(d)); })
          .attr("width", x.bandwidth())
          .attr("height", function(d) { return height - margin.top - y(accessor_y(d)); })
          .style("fill", function(d) { return color(d.key); });

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

  chart.key = function(_) {
    if (!arguments.length) return key;
    key = _;
    return chart;
  };

  chart.click = function(_) {
    if (!arguments.length) return click;
    click = _;
    return chart;
  };

  return chart;
}
