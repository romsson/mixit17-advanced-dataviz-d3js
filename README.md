# Dataviz using D3 and modern JS tools

We will go through the progressive building of [d3.js](https://d3js.org/) v4 charts. It requires some JavaScript basics and lots of web development tools. I provide boilerplate code and we will start from scracth.

## Important

* This is a script from a workshop organized at [MixIT 2017](https://mixitconf.org/en/2017/la-dataviz-avancee-sur-le-web-en-javascript-avec-d3-js)
* This is very much work in progress, feedback welcome
* I did my best to give credits and add links to original content; feel free to [let me know](https://github.com/romsson/mixit17-advanced-dataviz-d3js/issues) if I missed something

## Steps

* [STEP 00 -](00/) basic tools; npm; package.json; first D3 chart;
* [STEP 01 -](01/) use D3 modules; minimize;
* [STEP 02 -](02/) D3 chart module; getter/setters; load configuration;
* [STEP 03 -](03/) reusability; multiple charts; 
* [STEP 04 -](04/) tests; server-side rendering;

## A quick D3 Overview

>💡[**D3**](https://d3js.org/) (Data-Driven Documents or D3.js) is a JavaScript library for visualizing data using web standards. D3 helps you bring data to life using SVG, Canvas and HTML. D3 combines powerful visualization and interaction techniques with a data-driven approach to DOM manipulation, giving you the full capabilities of modern browsers and the freedom to design the right visual interface for your data. [Source](https://github.com/d3/d3/wiki)

* D3 is a *visualization kernel*
* Issued from a [reasearch paper](http://vis.stanford.edu/files/2011-D3-InfoVis.pdf) and a long geneaology of tools from Stanford/Berkeley and now UW
* One of the most popular [github repository](https://github.com/search?o=desc&q=stars%3A%3E1&ref=searchresults&s=stars&type=Repositories&utf8=%E2%9C%93)

Useful D3-related links:

* [D3 Gallery](https://github.com/d3/d3/wiki/Gallery)
* [Mike Bostock Examples](https://bl.ocks.org/mbostock) 
* [ES6 support](https://kangax.github.io/compat-table/es6/)
* [d3.js v3→v4 changes](https://github.com/d3/d3/blob/master/CHANGES.md)
* [For Example](https://bost.ocks.org/mike/example/)
* https://github.com/arnicas/d3-faq
* https://github.com/arnicas/interactive-vis-course
* D3.js official website https://d3js.org/ & documentation
* D3 Blocks http://bl.ocks.org/mbostock
* [By Example](https://bost.ocks.org/mike/example/)  
* [Big List of D3 examples](http://christopheviau.com/d3list/) 
* [Blockbuilders (live coding)](http://blockbuilder.org/) 
* [Awesome D3](https://github.com/romsson/awesome-d3)
* [ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/)
* [D3 Google Group](http://groups.google.com/group/d3-js)
* [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [D3.js Source Code Walkthrough Part 1](http://prajitr.github.io/d3-source-walkthrough-pt1/)
* [D3 Workshop slides](https://bost.ocks.org/mike/d3/workshop/#0)
[a fun, difficult introduction to d3]http://www.macwright.org/presentations/dcjq/
* [OpenVis conference videos](https://openvisconf.com/)
* d3.js little [code walkthrough](http://prajitr.github.io/d3-source-walkthrough-pt1/)
* [Distill chart](http://distill.pub/guide/)

> For dynamic diagrams we recommend D3.js. For complex diagrams where you only want to animate part of them, you can draw a static diagram, tag elements of your diagram with classes or ids, and then manipulate them with D3.

* [D3, D3.js, d3, d3.js, #d3js?](https://twitter.com/d3js_org/status/827181063508209664)

> **D3 or D3.js** = proper name
> 
> **d3** = package or symbol name
> 
> **d3.js** = file name
> 
> **&#35;d3js** = hashtag

## Next

Go to [STEP 00](00/) →
