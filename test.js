var makerjs = require('makerjs');
var Nameplate = require('./index');
var opentype = require('opentype.js');

//download to local from http://microsoft.github.io/maker.js/fonts/allertastencil/AllertaStencil-Regular.ttf
var font = opentype.loadSync('AllertaStencil-Regular.ttf');

var nameplate = new Nameplate(font, 'hello world', 100, 20, 10, 3, true);

console.log(makerjs.exporter.toSVG(nameplate));
