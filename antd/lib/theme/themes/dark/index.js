"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _colors = require("@ant-design/colors");
var _seed = require("../seed");
var _genColorMapToken = _interopRequireDefault(require("../shared/genColorMapToken"));
var _colors2 = require("./colors");
var _default2 = _interopRequireDefault(require("../default"));
var derivative = function derivative(token, mapToken) {
  var colorPalettes = Object.keys(_seed.defaultPresetColors).map(function (colorKey) {
    var colors = (0, _colors.generate)(token[colorKey], {
      theme: 'dark'
    });
    return new Array(10).fill(1).reduce(function (prev, _, i) {
      prev[colorKey + "-" + (i + 1)] = colors[i];
      return prev;
    }, {});
  }).reduce(function (prev, cur) {
    prev = (0, _extends2["default"])((0, _extends2["default"])({}, prev), cur);
    return prev;
  }, {});
  var mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : (0, _default2["default"])(token);
  return (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, mergedMapToken), colorPalettes), (0, _genColorMapToken["default"])(token, {
    generateColorPalettes: _colors2.generateColorPalettes,
    generateNeutralColorPalettes: _colors2.generateNeutralColorPalettes
  }));
};
var _default = derivative;
exports["default"] = _default;