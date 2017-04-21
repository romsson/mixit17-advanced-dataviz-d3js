function barChart() {
  var margin = {top: 20, right: 20, bottom: 20, left: 20};
  var width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
      x = d3.scaleBand(),
      y = d3.scaleLinear();

  function chart(selection) {
    selection.each(function(data) {

      x.domain(data)
        .range([margin.left, width - margin.left - margin.right])
        .padding(0.1);

      y.domain([0, d3.max(data)])
        .range([height, margin.top]);

     // var svg = d3.select(this).select("svg");
//
     // // Create the skeletal chart
     // if (svg.empty()) {
     //   svg = d3.select(this).append("canvas");
     // }

    d3.select(this).append("canvas");

     var canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d");

    var yTickCount = 10,
        yTicks = y.ticks(yTickCount),
        yTickFormat = y.tickFormat(yTickCount, "%");

      context.beginPath();
      x.domain().forEach(function(d) {
        context.moveTo(x(d) + x.bandwidth() / 2, height);
        context.lineTo(x(d) + x.bandwidth() / 2, height + 6);
      });
      context.strokeStyle = "black";
      context.stroke();

      context.textAlign = "center";
      context.textBaseline = "top";
      x.domain().forEach(function(d) {
        context.fillText(d, x(d) + x.bandwidth() / 2, height + 6);
      });

      context.beginPath();
      yTicks.forEach(function(d) {
        context.moveTo(0, y(d) + 0.5);
        context.lineTo(-6, y(d) + 0.5);
      });
      context.strokeStyle = "black";
      context.stroke();

      context.textAlign = "right";
      context.textBaseline = "middle";
      yTicks.forEach(function(d) {
        context.fillText(yTickFormat(d), -9, y(d));
      });

      context.beginPath();
      context.moveTo(-6.5, 0 + 0.5);
      context.lineTo(0.5, 0 + 0.5);
      context.lineTo(0.5, height + 0.5);
      context.lineTo(-6.5, height + 0.5);
      context.strokeStyle = "black";
      context.stroke();

      context.save();
      context.rotate(-Math.PI / 2);
      context.textAlign = "right";
      context.textBaseline = "top";
      context.font = "bold 10px sans-serif";
      context.fillText("Frequency", -10, 10);
      context.restore();

      //context.fillStyle = "steelblue";
      data.forEach(function(d, i) {
        context.fillRect(x(d), y(d), x.bandwidth(), height - y(d));
      });
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
