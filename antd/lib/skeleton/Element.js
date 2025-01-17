"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var Element = function Element(props) {
  var _classNames, _classNames2;
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    size = props.size,
    shape = props.shape;
  var sizeCls = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls + "-lg", size === 'large'), (0, _defineProperty2["default"])(_classNames, prefixCls + "-sm", size === 'small'), _classNames));
  var shapeCls = (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, prefixCls + "-circle", shape === 'circle'), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-square", shape === 'square'), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-round", shape === 'round'), _classNames2));
  var sizeStyle = React.useMemo(function () {
    return typeof size === 'number' ? {
      width: size,
      height: size,
      lineHeight: size + "px"
    } : {};
  }, [size]);
  return /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames["default"])(prefixCls, sizeCls, shapeCls, className),
    style: (0, _extends2["default"])((0, _extends2["default"])({}, sizeStyle), style)
  });
};
var _default = Element;
exports["default"] = _default;