"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floatButtonPrefixCls = exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _configProvider = require("../config-provider");
var _style = _interopRequireDefault(require("./style"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _FloatButtonContent = _interopRequireDefault(require("./FloatButtonContent"));
var _context = _interopRequireDefault(require("./context"));
var _warning = _interopRequireDefault(require("../_util/warning"));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var floatButtonPrefixCls = 'float-btn';
exports.floatButtonPrefixCls = floatButtonPrefixCls;
var FloatButton = function FloatButton(props, ref) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'circle' : _props$shape,
    icon = props.icon,
    description = props.description,
    tooltip = props.tooltip,
    restProps = __rest(props, ["prefixCls", "className", "type", "shape", "icon", "description", "tooltip"]);
  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls,
    direction = _useContext.direction;
  var groupShape = (0, _react.useContext)(_context["default"]);
  var prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var mergeShape = groupShape || shape;
  var classString = (0, _classnames["default"])(hashId, prefixCls, className, prefixCls + "-" + type, prefixCls + "-" + mergeShape, (0, _defineProperty2["default"])({}, prefixCls + "-rtl", direction === 'rtl'));
  var contentProps = (0, _react.useMemo)(function () {
    return {
      prefixCls: prefixCls,
      description: description,
      icon: icon,
      type: type
    };
  }, [prefixCls, description, icon, type]);
  var buttonNode = tooltip ? /*#__PURE__*/_react["default"].createElement(_tooltip["default"], {
    title: tooltip,
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: prefixCls + "-body"
  }, /*#__PURE__*/_react["default"].createElement(_FloatButtonContent["default"], (0, _extends2["default"])({}, contentProps)))) : /*#__PURE__*/_react["default"].createElement("div", {
    className: prefixCls + "-body"
  }, /*#__PURE__*/_react["default"].createElement(_FloatButtonContent["default"], (0, _extends2["default"])({}, contentProps)));
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!(shape === 'circle' && description), 'FloatButton', 'supported only when `shape` is `square`. Due to narrow space for text, short sentence is recommended.') : void 0;
  }
  return wrapSSR(props.href ? /*#__PURE__*/_react["default"].createElement("a", (0, _extends2["default"])({
    ref: ref
  }, restProps, {
    className: classString
  }), buttonNode) : /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
    ref: ref
  }, restProps, {
    className: classString,
    type: "button"
  }), buttonNode));
};
if (process.env.NODE_ENV !== 'production') {
  FloatButton.displayName = 'FloatButton';
}
var ForwardFloatButton = /*#__PURE__*/_react["default"].forwardRef(FloatButton);
var _default = ForwardFloatButton;
exports["default"] = _default;