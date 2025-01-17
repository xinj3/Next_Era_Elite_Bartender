"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _tinycolor = require("@ctrl/tinycolor");
var _internal = require("../../theme/internal");
var _style = require("../../style");
// =============================== Base ===============================
var genBaseStyle = function genBaseStyle(token) {
  var _hover, _ref, _disabled, _extends2;
  var componentCls = token.componentCls,
    controlSize = token.controlSize,
    dotSize = token.dotSize,
    marginFull = token.marginFull,
    marginPart = token.marginPart,
    colorFillContentHover = token.colorFillContentHover;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends4["default"])((0, _extends4["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    position: 'relative',
    height: controlSize,
    margin: marginPart + "px " + marginFull + "px",
    padding: 0,
    cursor: 'pointer',
    touchAction: 'none'
  }, (0, _defineProperty2["default"])(_extends2, "&-vertical", {
    margin: marginFull + "px " + marginPart + "px"
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-rail", {
    position: 'absolute',
    backgroundColor: token.colorFillTertiary,
    borderRadius: token.borderRadiusXS,
    transition: "background-color " + token.motionDurationMid
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-track", {
    position: 'absolute',
    backgroundColor: token.colorPrimaryBorder,
    borderRadius: token.borderRadiusXS,
    transition: "background-color " + token.motionDurationMid
  }), (0, _defineProperty2["default"])(_extends2, '&:hover', (_hover = {}, (0, _defineProperty2["default"])(_hover, componentCls + "-rail", {
    backgroundColor: token.colorFillSecondary
  }), (0, _defineProperty2["default"])(_hover, componentCls + "-track", {
    backgroundColor: token.colorPrimaryBorderHover
  }), (0, _defineProperty2["default"])(_hover, componentCls + "-dot", {
    borderColor: colorFillContentHover
  }), (0, _defineProperty2["default"])(_hover, componentCls + "-handle::after", {
    boxShadow: "0 0 0 " + token.handleLineWidth + "px " + token.colorPrimaryBorderHover
  }), (0, _defineProperty2["default"])(_hover, componentCls + "-dot-active", {
    borderColor: token.colorPrimary
  }), _hover)), (0, _defineProperty2["default"])(_extends2, componentCls + "-handle", (_ref = {
    position: 'absolute',
    width: token.handleSize,
    height: token.handleSize,
    outline: 'none'
  }, (0, _defineProperty2["default"])(_ref, componentCls + "-dragging", {
    zIndex: 1
  }), (0, _defineProperty2["default"])(_ref, '&::before', {
    content: '""',
    position: 'absolute',
    insetInlineStart: -token.handleLineWidth,
    insetBlockStart: -token.handleLineWidth,
    width: token.handleSize + token.handleLineWidth * 2,
    height: token.handleSize + token.handleLineWidth * 2,
    backgroundColor: 'transparent'
  }), (0, _defineProperty2["default"])(_ref, '&::after', {
    content: '""',
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineStart: 0,
    width: token.handleSize,
    height: token.handleSize,
    backgroundColor: token.colorBgContainer,
    boxShadow: "0 0 0 " + token.handleLineWidth + "px " + token.colorPrimaryBorder,
    borderRadius: '50%',
    cursor: 'pointer',
    transition: "\n            inset-inline-start " + token.motionDurationMid + ",\n            inset-block-start " + token.motionDurationMid + ",\n            width " + token.motionDurationMid + ",\n            height " + token.motionDurationMid + ",\n            box-shadow " + token.motionDurationMid + "\n          "
  }), (0, _defineProperty2["default"])(_ref, '&:hover, &:active, &:focus', {
    '&::before': {
      insetInlineStart: -((token.handleSizeHover - token.handleSize) / 2 + token.handleLineWidthHover),
      insetBlockStart: -((token.handleSizeHover - token.handleSize) / 2 + token.handleLineWidthHover),
      width: token.handleSizeHover + token.handleLineWidthHover * 2,
      height: token.handleSizeHover + token.handleLineWidthHover * 2
    },
    '&::after': {
      boxShadow: "0 0 0 " + token.handleLineWidthHover + "px " + token.colorPrimary,
      width: token.handleSizeHover,
      height: token.handleSizeHover,
      insetInlineStart: (token.handleSize - token.handleSizeHover) / 2,
      insetBlockStart: (token.handleSize - token.handleSizeHover) / 2
    }
  }), _ref)), (0, _defineProperty2["default"])(_extends2, componentCls + "-mark", {
    position: 'absolute',
    fontSize: token.fontSize
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-mark-text", {
    position: 'absolute',
    display: 'inline-block',
    color: token.colorTextDescription,
    textAlign: 'center',
    wordBreak: 'keep-all',
    cursor: 'pointer',
    userSelect: 'none',
    '&-active': {
      color: token.colorText
    }
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-step", {
    position: 'absolute',
    background: 'transparent',
    pointerEvents: 'none'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-dot", {
    position: 'absolute',
    width: dotSize,
    height: dotSize,
    backgroundColor: token.colorBgContainer,
    border: token.handleLineWidth + "px solid " + token.colorSplit,
    borderRadius: '50%',
    cursor: 'pointer',
    transition: "border-color " + token.motionDurationSlow,
    '&-active': {
      borderColor: token.colorPrimaryBorder
    }
  }), (0, _defineProperty2["default"])(_extends2, '&&-disabled', (_disabled = {
    cursor: 'not-allowed'
  }, (0, _defineProperty2["default"])(_disabled, componentCls + "-rail", {
    backgroundColor: token.colorFillSecondary + " !important"
  }), (0, _defineProperty2["default"])(_disabled, componentCls + "-track", {
    backgroundColor: token.colorTextDisabled + " !important"
  }), (0, _defineProperty2["default"])(_disabled, "\n          " + componentCls + "-dot\n        ", {
    backgroundColor: token.colorBgContainer,
    borderColor: token.colorTextDisabled,
    boxShadow: 'none',
    cursor: 'not-allowed'
  }), (0, _defineProperty2["default"])(_disabled, componentCls + "-handle::after", {
    backgroundColor: token.colorBgContainer,
    cursor: 'not-allowed',
    width: token.handleSize,
    height: token.handleSize,
    boxShadow: "0 0 0 " + token.handleLineWidth + "px " + new _tinycolor.TinyColor(token.colorTextDisabled).onBackground(token.colorBgContainer).toHexString(),
    insetInlineStart: 0,
    insetBlockStart: 0
  }), (0, _defineProperty2["default"])(_disabled, "\n          " + componentCls + "-mark-text,\n          " + componentCls + "-dot\n        ", {
    cursor: "not-allowed !important"
  }), _disabled)), _extends2)));
};
// ============================ Horizontal ============================
var genDirectionStyle = function genDirectionStyle(token, horizontal) {
  var _ref3, _ref6, _ref7, _ref9;
  var componentCls = token.componentCls,
    railSize = token.railSize,
    handleSize = token.handleSize,
    dotSize = token.dotSize;
  var railPadding = horizontal ? 'paddingBlock' : 'paddingInline';
  var full = horizontal ? 'width' : 'height';
  var part = horizontal ? 'height' : 'width';
  var handlePos = horizontal ? 'insetBlockStart' : 'insetInlineStart';
  var markInset = horizontal ? 'top' : 'insetInlineStart';
  return _ref9 = {}, (0, _defineProperty2["default"])(_ref9, railPadding, railSize), (0, _defineProperty2["default"])(_ref9, part, railSize * 3), (0, _defineProperty2["default"])(_ref9, componentCls + "-rail", (_ref3 = {}, (0, _defineProperty2["default"])(_ref3, full, '100%'), (0, _defineProperty2["default"])(_ref3, part, railSize), _ref3)), (0, _defineProperty2["default"])(_ref9, componentCls + "-track", (0, _defineProperty2["default"])({}, part, railSize)), (0, _defineProperty2["default"])(_ref9, componentCls + "-handle", (0, _defineProperty2["default"])({}, handlePos, (railSize * 3 - handleSize) / 2)), (0, _defineProperty2["default"])(_ref9, componentCls + "-mark", (_ref6 = {
    // Reset all
    insetInlineStart: 0,
    top: 0
  }, (0, _defineProperty2["default"])(_ref6, markInset, handleSize), (0, _defineProperty2["default"])(_ref6, full, '100%'), _ref6)), (0, _defineProperty2["default"])(_ref9, componentCls + "-step", (_ref7 = {
    // Reset all
    insetInlineStart: 0,
    top: 0
  }, (0, _defineProperty2["default"])(_ref7, markInset, railSize), (0, _defineProperty2["default"])(_ref7, full, '100%'), (0, _defineProperty2["default"])(_ref7, part, railSize), _ref7)), (0, _defineProperty2["default"])(_ref9, componentCls + "-dot", (0, _defineProperty2["default"])({
    position: 'absolute'
  }, handlePos, (railSize - dotSize) / 2)), _ref9;
};
// ============================ Horizontal ============================
var genHorizontalStyle = function genHorizontalStyle(token) {
  var componentCls = token.componentCls,
    marginPartWithMark = token.marginPartWithMark;
  return (0, _defineProperty2["default"])({}, componentCls + "-horizontal", (0, _extends4["default"])((0, _extends4["default"])({}, genDirectionStyle(token, true)), (0, _defineProperty2["default"])({}, "&" + componentCls + "-with-marks", {
    marginBottom: marginPartWithMark
  })));
};
// ============================= Vertical =============================
var genVerticalStyle = function genVerticalStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls + "-vertical", (0, _extends4["default"])((0, _extends4["default"])({}, genDirectionStyle(token, false)), {
    height: '100%'
  }));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Slider', function (token) {
  var sliderToken = (0, _internal.mergeToken)(token, {
    marginPart: (token.controlHeight - token.controlSize) / 2,
    marginFull: token.controlSize / 2,
    marginPartWithMark: token.controlHeightLG - token.controlSize
  });
  return [genBaseStyle(sliderToken), genHorizontalStyle(sliderToken), genVerticalStyle(sliderToken)];
}, function (token) {
  // Handle line width is always width-er 1px
  var increaseHandleWidth = 1;
  var controlSize = token.controlHeightLG / 4;
  var controlSizeHover = token.controlHeightSM / 2;
  var handleLineWidth = token.lineWidth + increaseHandleWidth;
  var handleLineWidthHover = token.lineWidth + increaseHandleWidth * 3;
  return {
    controlSize: controlSize,
    railSize: 4,
    handleSize: controlSize,
    handleSizeHover: controlSizeHover,
    dotSize: controlSize / 3 * 2,
    handleLineWidth: handleLineWidth,
    handleLineWidthHover: handleLineWidthHover
  };
});
exports["default"] = _default;