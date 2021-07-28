"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getheight = void 0;

var getheight = function getheight(id) {
  var oldHeight = document.documentElement.clientHeight;
  var newHeight = document.getElementById(id);
  newHeight.style.height = Number(oldHeight) - 195 + 'px';
  return oldHeight;
};

exports.getheight = getheight;