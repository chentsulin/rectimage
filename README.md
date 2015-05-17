# rectimage

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]


> Crop image to rectangle

## Install

```sh
$ npm install rectimage
```

## Usage

```js
var rectimage = require('rectimage')

var newImage = rectimage(image)

newImage.onload = function() { /* */ }
```

or return a canvas

```js
var rectimage = require('rectimage')

var canvas = rectimage(image, { canvas: true })

document.body.appendChild(canvas)
```

## License
MIT © [C. T. Lin](https://github.com/chentsulin)

[npm-image]: https://img.shields.io/npm/v/rectimage.svg?style=flat-square
[npm-url]: https://npmjs.org/package/rectimage
[travis-image]: https://travis-ci.org/chentsulin/rectimage.svg
[travis-url]: https://travis-ci.org/chentsulin/rectimage
[coveralls-image]: https://img.shields.io/coveralls/chentsulin/rectimage.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/chentsulin/rectimage
[david_img]: https://img.shields.io/david/chentsulin/rectimage.svg
[david_site]: https://david-dm.org/chentsulin/rectimage
