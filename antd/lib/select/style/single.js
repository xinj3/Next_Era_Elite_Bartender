"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = genSingleStyle;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _style = require("../../style");
var _internal = require("../../theme/internal");
function genSizeStyle(token, suffix) {
  var _extends2, _ref, _ref3, _ref5;
  var componentCls = token.componentCls,
    inputPaddingHorizontalBase = token.inputPaddingHorizontalBase,
    borderRadius = token.borderRadius;
  var selectHeightWithoutBorder = token.controlHeight - token.lineWidth * 2;
  var selectionItemPadding = Math.ceil(token.fontSize * 1.25);
  var suffixCls = suffix ? componentCls + "-" + suffix : '';
  return (0, _defineProperty2["default"])({}, componentCls + "-single" + suffixCls, (_ref5 = {
    fontSize: token.fontSize
  }, (0, _defineProperty2["default"])(_ref5, componentCls + "-selector", (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    display: 'flex',
    borderRadius: borderRadius
  }, (0, _defineProperty2["default"])(_extends2, componentCls + "-selection-search", {
    position: 'absolute',
    top: 0,
    insetInlineStart: inputPaddingHorizontalBase,
    insetInlineEnd: inputPaddingHorizontalBase,
    bottom: 0,
    '&-input': {
      width: '100%'
    }
  }), (0, _defineProperty2["default"])(_extends2, "\n          " + componentCls + "-selection-item,\n          " + componentCls + "-selection-placeholder\n        ", {
    padding: 0,
    lineHeight: selectHeightWithoutBorder + "px",
    transition: "all " + token.motionDurationSlow,
    // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
    '@supports (-moz-appearance: meterbar)': {
      lineHeight: selectHeightWithoutBorder + "px"
    }
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-selection-item", {
    position: 'relative',
    userSelect: 'none'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-selection-placeholder", {
    transition: 'none',
    pointerEvents: 'none'
  }), (0, _defineProperty2["default"])(_extends2, ['&:after', /* For '' value baseline align */componentCls + "-selection-item:after", /* For undefined value baseline align */componentCls + "-selection-placeholder:after"].join(','), {
    display: 'inline-block',
    width: 0,
    visibility: 'hidden',
    content: '"\\a0"'
  }), _extends2))), (0, _defineProperty2["default"])(_ref5, "\n        &" + componentCls + "-show-arrow " + componentCls + "-selection-item,\n        &" + componentCls + "-show-arrow " + componentCls + "-selection-placeholder\n      ", {
    paddingInlineEnd: selectionItemPadding
  }), (0, _defineProperty2["default"])(_ref5, "&" + componentCls + "-open " + componentCls + "-selection-item", {
    color: token.colorTextPlaceholder
  }), (0, _defineProperty2["default"])(_ref5, "&:not(" + componentCls + "-customize-input)", (0, _defineProperty2["default"])({}, componentCls + "-selector", (_ref = {
    width: '100%',
    height: token.controlHeight,
    padding: "0 " + inputPaddingHorizontalBase + "px"
  }, (0, _defineProperty2["default"])(_ref, componentCls + "-selection-search-input", {
    height: selectHeightWithoutBorder
  }), (0, _defineProperty2["default"])(_ref, '&:after', {
    lineHeight: selectHeightWithoutBorder + "px"
  }), _ref))), (0, _defineProperty2["default"])(_ref5, "&" + componentCls + "-customize-input", (0, _defineProperty2["default"])({}, componentCls + "-selector", (_ref3 = {
    '&:after': {
      display: 'none'
    }
  }, (0, _defineProperty2["default"])(_ref3, componentCls + "-selection-search", {
    position: 'static',
    width: '100%'
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-selection-placeholder", {
    position: 'absolute',
    insetInlineStart: 0,
    insetInlineEnd: 0,
    padding: "0 " + inputPaddingHorizontalBase + "px",
    '&:after': {
      display: 'none'
    }
  }), _ref3))), _ref5));
}
function genSingleStyle(token) {
  var _ref7;
  var componentCls = token.componentCls;
  var inputPaddingHorizontalSM = token.controlPaddingHorizontalSM - token.lineWidth;
  return [genSizeStyle(token),
  // ======================== Small ========================
  // Shared
  genSizeStyle((0, _internal.mergeToken)(token, {
    controlHeight: token.controlHeightSM,
    borderRadius: token.borderRadiusSM
  }), 'sm'), // padding
  (0, _defineProperty2["default"])({}, componentCls + "-single" + componentCls + "-sm", (0, _defineProperty2["default"])({}, "&:not(" + componentCls + "-customize-input)", (_ref7 = {}, (0, _defineProperty2["default"])(_ref7, componentCls + "-selection-search", {
    insetInlineStart: inputPaddingHorizontalSM,
    insetInlineEnd: inputPaddingHorizontalSM
  }), (0, _defineProperty2["default"])(_ref7, componentCls + "-selector", {
    padding: "0 " + inputPaddingHorizontalSM + "px"
  }), (0, _defineProperty2["default"])(_ref7, "&" + componentCls + "-show-arrow " + componentCls + "-selection-search", {
    insetInlineStart: 'auto',
    insetInlineEnd: inputPaddingHorizontalSM + token.fontSize * 1.5
  }), (0, _defineProperty2["default"])(_ref7, "\n            &" + componentCls + "-show-arrow " + componentCls + "-selection-item,\n            &" + componentCls + "-show-arrow " + componentCls + "-selection-placeholder\n          ", {
    paddingInlineEnd: token.fontSize * 1.5
  }), _ref7))),
  // ======================== Large ========================
  // Shared
  genSizeStyle((0, _internal.mergeToken)(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  }), 'lg')];
}