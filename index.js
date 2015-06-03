'use strict';

module.exports = function rectimage(image, opts) {
  opts = opts || {};

  if (!image.complete) {
    return image.onload = rectimage.bind(null, image, opts);
  }

  var canvas = document.createElement('canvas');
  canvas.id = 'crop-canvas';
  var context = canvas.getContext('2d');

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

  canvas.width = opts.newLength || minLength;
  canvas.height = opts.newLength || minLength;

  context.drawImage(image,
    xOffset, yOffset, minLength, minLength,
    0, 0, canvas.width, canvas.height
  );

  if (opts.canvas) {
    return canvas;
  } else {
    return (new Image).src = canvas.toDataURL();
  }
};


