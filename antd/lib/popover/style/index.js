"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _motion = require("../../style/motion");
var _internal = require("../../theme/internal");
var _style = require("../../style");
var _placementArrow = _interopRequireDefault(require("../../style/placementArrow"));
var genBaseStyle = function genBaseStyle(token) {
  var _extends2;
  var componentCls = token.componentCls,
    popoverBg = token.popoverBg,
    popoverColor = token.popoverColor,
    width = token.width,
    fontWeightStrong = token.fontWeightStrong,
    popoverPadding = token.popoverPadding,
    boxShadowSecondary = token.boxShadowSecondary,
    colorTextHeading = token.colorTextHeading,
    borderRadius = token.borderRadiusLG,
    zIndexPopup = token.zIndexPopup,
    marginXS = token.marginXS;
  return [(0, _defineProperty2["default"])({}, componentCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    position: 'absolute',
    top: 0,
    insetInlineStart: 0,
    zIndex: zIndexPopup,
    fontWeight: 'normal',
    whiteSpace: 'normal',
    textAlign: 'start',
    cursor: 'auto',
    userSelect: 'text',
    '&-rtl': {
      direction: 'rtl'
    },
    '&-hidden': {
      display: 'none'
    }
  }, (0, _defineProperty2["default"])(_extends2, componentCls + "-content", {
    position: 'relative'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-inner", {
    backgroundColor: popoverBg,
    backgroundClip: 'padding-box',
    borderRadius: borderRadius,
    boxShadow: boxShadowSecondary,
    padding: popoverPadding
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-title", {
    minWidth: width,
    marginBottom: marginXS,
    color: colorTextHeading,
    fontWeight: fontWeightStrong
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-inner-content", {
    color: popoverColor
  }), _extends2))),
  // Arrow Style
  (0, _placementArrow["default"])(token, {
    colorBg: token.colorBgElevated
  }), // Pure Render
  (0, _defineProperty2["default"])({}, componentCls + "-pure", (0, _defineProperty2["default"])({
    position: 'relative',
    maxWidth: 'none'
  }, componentCls + "-content", {
    display: 'inline-block'
  }))];
};
var genColorStyle = function genColorStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls, _internal.PresetColors.map(function (colorKey) {
    var _ref4;
    var lightColor = token[colorKey + "-6"];
    return (0, _defineProperty2["default"])({}, "&" + componentCls + "-" + colorKey, (_ref4 = {}, (0, _defineProperty2["default"])(_ref4, componentCls + "-inner", {
      backgroundColor: lightColor
    }), (0, _defineProperty2["default"])(_ref4, componentCls + "-arrow", {
      background: 'transparent',
      '&:before': {
        backgroundColor: lightColor
      }
    }), _ref4));
  }));
};
var genWireframeStyle = function genWireframeStyle(token) {
  var _componentCls;
  var componentCls = token.componentCls,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    colorSplit = token.colorSplit,
    paddingSM = token.paddingSM,
    controlHeight = token.controlHeight,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    padding = token.padding;
  var titlePaddingBlockDist = controlHeight - Math.round(fontSize * lineHeight);
  var popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
  var popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
  var popoverPaddingHorizontal = padding;
  return (0, _defineProperty2["default"])({}, componentCls, (_componentCls = {}, (0, _defineProperty2["default"])(_componentCls, componentCls + "-inner", {
    padding: 0
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-title", {
    margin: 0,
    padding: popoverTitlePaddingBlockTop + "px " + popoverPaddingHorizontal + "px " + popoverTitlePaddingBlockBottom + "px",
    borderBottom: lineWidth + "px " + lineType + " " + colorSplit
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-inner-content", {
    padding: paddingSM + "px " + popoverPaddingHorizontal + "px"
  }), _componentCls));
};
var _default = (0, _internal.genComponentStyleHook)('Popover', function (token) {
  var colorBgElevated = token.colorBgElevated,
    colorText = token.colorText,
    wireframe = token.wireframe;
  var popoverToken = (0, _internal.mergeToken)(token, {
    popoverBg: colorBgElevated,
    popoverColor: colorText,
    popoverPadding: 12 // Fixed Value
  });

  return [genBaseStyle(popoverToken), genColorStyle(popoverToken), wireframe && genWireframeStyle(popoverToken), (0, _motion.initZoomMotion)(popoverToken, 'zoom-big')];
}, function (_ref8) {
  var zIndexPopupBase = _ref8.zIndexPopupBase;
  return {
    zIndexPopup: zIndexPopupBase + 30,
    width: 177
  };
});
exports["default"] = _default;