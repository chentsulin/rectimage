'use strict';

var Canvas = require('canvas');
var Image = Canvas.Image;


exports = module.exports = function rectimage(image, opts) {
  opts = opts || {};

  if (opts.newLength && typeof opts.newLength !== 'number') {
    throw new TypeError('newLength expect a number');
  }

  var width = image.width;
  var height = image.height;

  var minLength;
  var minSide;

  var diff;
  var xOffset, yOffset;

  if (width < height) {
    minSide = 'width';
    minLength = width;
  } else {
    minSide = 'height';
    minLength = height;
  }

  if (minSide === 'width') {
    diff = height - width;
    xOffset = 0;
    yOffset = diff / 2;
  } else if (minSide === 'height') {
    diff = width - height;
    xOffset = diff / 2;
    yOffset = 0;
  }

  var canvasWidth = opts.newLength || minLength;
  var canvasHeight = opts.newLength || minLength;

  var canvas = = new Canvas(canvasWidth, canvasHeight);
  var context = canvas.getContext('2d');

  context.drawImage(image,
    xOffset, yOffset, minLength, minLength,
    0, 0, canvasWidth, canvasHeight
  );

  if (opts.canvas) {
    return canvas;
  } else {
    return (new Image).src = canvas.toBuffer();
  }
};

exports.Image = Canvas.Image;



