# STEP 02

Goals:

* Let's now turn the D3 chart into a module
* The module contains all the D3 chart functions
* Module should be updated with public getter/setter

Some notes:

* Modules are plugins in D3 land, will be used interchangeably
* Modules add / override functionalities

## Turn the bar chart into a reusable chart

>💡[**Reusable Charts**](https://bost.ocks.org/mike/chart/) is a convention for encapsulating reusable charts in D3.

Key parts are:

* Implement charts as [closures](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)
* Add getter-setter methods.

Here is the [suggested](https://bost.ocks.org/mike/chart/) re-usability template

```
function chart() {
  var width = 720, // default width
      height = 80; // default height

  function my() {
    // generate chart here, using `width` and `height`
  }

  my.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return my;
  };

  my.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return my;
  };

  return my;
}
```

To call the chart

```
var myChart = chart().width(720).height(80);
```


## Selection as input for reusable chart

Now the selection part is needed to update the chart

> 🌶 By taking a **selection** as input, charts have greater flexibility. For example, you can render a chart into multiple elements simultaneously, or easily move a chart between elements without explicitly unbinding and rebinding. You can control exactly when and how the chart gets updated when data or configuration changes (for example, using a transition rather than an instantaneous update). In effect, the chart becomes a rubber stamp for rendering data visually.

```js
function my(selection) {
  selection.each(function(d, i) {
    // generate chart here; `d` is the data and `this` is the element
  });
}
```

To call the chart

```js
  d3.select("body")
      .datum(data)
      .call(chart);
```

Which is equivalent to 

```js
chart(d3.select("body").datum(data))
```

## New data and chart update

Beside that, it's all d3-chart-building business as usually. The rest will indeed mainly making sure your chart is:

Let's make it robust to new data.

According to the previous reusable charts pattern:

```
// Select the svg element, if it exists.
var svg = d3.select(this).selectAll("svg").data([data]);

// Enter
svg.enter().append("svg").append("g");

// Update
svg.attr("width", width).attr("height", height);

...
```

Another approach [found here](http://square.github.io/crossfilter/)

```
  var div = d3.select(this),
      g = div.select("g");

  // Create the skeletal chart.
  if (g.empty()) {

    // Create svg here
```

You can quickly test how your chart behaves with random updates:

```
setInterval(function() {

    d3.select("body")
      .datum(d3.range(Math.floor(Math.random()*100))
                .map(function() { return Math.random(); })
            )
    .call(chart);

}, 1000)
```

## Turn the bar chart into a plugin

>ℹ️ Everything in D3 is a **plugin**, including core features like colors, scales, and selections.

Here is a [list of d3 plugins](https://github.com/d3/d3/wiki/Plugins) 

As a recall, here are example of modules:

* [`d3-transform`](https://github.com/trinary/d3-transform)
* https://runkit.com/npm/d3-random
* [`d3-selection-multi`](https://github.com/d3/d3-selection-multi)

We are going to create a D3 chart as a [D3 plugin](https://bost.ocks.org/mike/d3-plugin/)

Below is the suggested code organization which follows our:

```
d3-foo
├── .gitignore
├── .npmignore
├── LICENSE
├── README.md
├── index.js
├── package.json
├─┬ src
│ └── foo.js
└─┬ test
  └── foo-test.js
```

Let's compile our module

```
rollup -f umd -n d3 -o build/d3-barchart.js -- index.js
```

Update the `barchart-module.html` code as follows

```
  var chart = d3.barchart().width(720).height(80);
```

Not that it might be a good idea to serialize configuration as an object:

```
  .params({
    width: 500,
    height: 500
  })
```


### Notes

* You can now personalize the `package.json` such as by adding keyowrds such as [`d3-module`](https://www.npmjs.com/search?q=d3-module) to make it searchable on the npm server.
* [`d3-component`](https://github.com/curran/d3-component) 
* [A better way to structure D3 code](https://ejb.github.io/2016/05/23/a-better-way-to-structure-d3-code.html)
* [koto.js charting framework for reusable charts](http://kotojs.org/)
* [Update package.json scripts to process all modules](https://github.com/53seven/d3-line-chart/blob/master/package.json)
* [D4, a friendly charting DSL for D3](http://visible.io/)
* [Plottable: flexible, interactive charts for the web.](http://plottablejs.org/)

## Create more reusable chart!

* [A simple d3 line chart plugin](https://github.com/53seven/d3-line-chart)
* [Canvas Bar Chart](https://bl.ocks.org/mbostock/946ddf8a32b3b660ffd8)
* [Working with D3.js and Canvas: When and How](https://bocoup.com/blog/d3js-and-canvas)
* [Bubble Chart](https://bl.ocks.org/mbostock/4063269)
* [D3 examples](https://github.com/d3/d3/wiki/Gallery)
* [Mike Bostock' blocks](https://bl.ocks.org/mbostock)
* [D3 transitions](https://bost.ocks.org/mike/transition/)
* [D3 margin convention](https://bl.ocks.org/mbostock/3019563)
* [D3 and canvas](https://bocoup.com/blog/d3js-and-canvas)
* [D3 canvas circles](https://bl.ocks.org/mbostock/1276463)
* [`d3-canvas`](https://github.com/bspoon/d3-canvas)
* [Interactive svg + canvas](http://bl.ocks.org/sxv/4485778)


## Next

Go to [STEP 03](../03/) →
