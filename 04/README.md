# STEP 04

* Run static visualization using command line
* Unit tests
* Publish and deploy package, continuous integration

## Run static visualization using command line

You don't always need a browser to run the visualization. Would be need to run it and include CSS styling and render as image. This will be the first step for automated visualization creation and testing.

Let's install (again) D3, but globally.

```
npm install d3 -g
```

[Insall node.js](https://nodejs.org/en/download/) and run it 

`node` 

```
var d3 = require("d3-array");

var data = [10, 15, 20, 12];

console.log(d3.max(data))
```

Note that imports are not available in nodejs (up to version 6) or needs a transpiler (e.g. `rollup`).

>💡**[JSDOM](https://github.com/tmpvar/jsdom)** is an API that allows you to throw a bunch of stuff at it, and it will generally do the right thing.

```
var d3 = require("d3"),
    jsdom = require("jsdom");

var document = jsdom.jsdom(),
    svg = d3.select(document.body).append("svg");
```


* [Pre-render and save html](https://gist.github.com/mef/7044786) using jsdom
* [Server side SVG via D3 & jsdom](https://bl.ocks.org/tomgp/c99a699587b5c5465228)
* [How to use D3 in Node.js properly?](http://stackoverflow.com/questions/9948350/how-to-use-d3-in-node-js-properly)

>💡**[PhantomJS](http://phantomjs.org/)** is a headless WebKit scriptable with a JavaScript API. It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.

Create the file `capture.js`

```js
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
```

Run using

```sh
phantomjs capture.js
```

Then visually inspect the result!

* Create [maps of examples](https://romsson.github.io/d3-gridding/example/capture/display.html)
* Automate chart variations!

<table>
<tr>
<td><img src="img/barchart-module-1.png"></td>
<td><img src="img/barchart-module-2.png"></td>
<td><img src="img/barchart-module-3.png"></td>
<td><img src="img/barchart-module-4.png"></td>
</tr>
</table>

## Unit tests


>💡**[Tape](https://github.com/substack/tape)** tap-producing test harness for node and browsers

```sh
npm install tape --save-dev
```

Now add our script to the `package.json` file

```json
"scripts": {
  "test": "tape 'test/**/*-test.js'",
}
```

A simple test is [as follows](https://bost.ocks.org/mike/d3-plugin/):

```js
var tape = require("tape"),
    foo = require("../");

tape("foo() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(foo.foo(), 42);
  test.end();
});
```

To execute the test

```sh
npm test
```

Let's now test the code formatting as well:

>💡**[eslint](eslint)** is ...

```sh
npm install eslint --save-dev
```

Configuration file `.eslintrc`

```
parserOptions:
    sourceType: module

env:
    node: true

extends:
    "eslint:recommended"

rules:
    no-cond-assign: 0
    no-floating-decimal: 2
    no-sparse-arrays: 0
```

### Notes

* [Tesing with mocha](https://github.com/biovisualize/d3.todo/blob/master/test/index.htm)
* [Testing with Jasmine](http://busypeoples.github.io/post/testing-d3-with-jasmine/)

See tests in other toolkits

* [d3-gridding](https://github.com/romsson/d3-gridding) and its capture
* [C3.js D3-based reusable chart library](http://c3js.org/)
* [d3fc](https://github.com/d3fc/d3fc)
* [dc.js](https://github.com/dc-js/dc.js) using Jasmine specs
* [rickshaw](https://github.com/shutterstock/rickshaw)

## Deploy

* [Continuous integration with CircleCI](https://circleci.com/dashboard)
* [Github badges](https://github.com/boennemann/badges) 
* Deploy test version using [Heroku](https://www.heroku.com/)

### Notes
* [Creating static data visualizations with D3.js and Node.js](http://www.pyktech.com/blog/150/)
* [SVG Crowbar](http://nytimes.github.io/svg-crowbar/)

## Pipeline, composition

See https://github.com/biovisualize/piper.js/tree/rollup/src

## Publish

Tage with version number

```sh
git tag -a v0.0.1
```

Or use NPM version

```
https://docs.npmjs.com/cli/version
```

Also, upload the latest release on github.

Write API Reference which is the documentation of public functions.

Make it production ready (reducing size, concatenate files, fingerprint with random ID)

Consider adding to a CDN like [`cdnjs`](https://github.com/cdnjs/cdnjs/blob/master/CONTRIBUTING.md#a-issue)

> For the new library request issue, please make sure it's not a personal project, we have a basic requirement for the popularity, like 100 stars on GitHub or 500 downloads/month on npm registry.


## Advanced D3 stuffs using d3 core lib

* [D3 on Angular](http://www.ng-newsletter.com/posts/d3-on-angular.html)
* [D3 and React js](http://www.macwright.org/2016/10/11/d3-and-react.html)
* [Angular NVD3](https://krispo.github.io/angular-nvd3/#/)
* [React D3](http://www.reactd3.org/)
* [Backbone D3](https://github.com/AdRoll/backbone.d3)
* Ember js using [components](https://github.com/cid-harvard/atlas-subnational-frontend/blob/master/app/components/vistk-scatterplot.js)
* [D3 charts pipeline](https://medium.com/planet-os/christophe-viau-why-i-built-cirrus-js-2af916279658)
* [Using web workers](https://bl.ocks.org/mbostock/01ab2e85e8727d6529d20391c0fd9a16)
* [Web workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

🎉Back to [Introduction](../) →
