"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _tinycolor = require("@ctrl/tinycolor");
var _internal = require("../../theme/internal");
var _style = require("../../style");
var genSwitchSmallStyle = function genSwitchSmallStyle(token) {
  var _ref, _ref2, _ref3, _ref6, _ref7;
  var componentCls = token.componentCls;
  var switchInnerCls = componentCls + "-inner";
  return (0, _defineProperty2["default"])({}, componentCls, (0, _defineProperty2["default"])({}, "&" + componentCls + "-small", (_ref7 = {
    minWidth: token.switchMinWidthSM,
    height: token.switchHeightSM,
    lineHeight: token.switchHeightSM + "px"
  }, (0, _defineProperty2["default"])(_ref7, componentCls + "-inner", (_ref = {}, (0, _defineProperty2["default"])(_ref, switchInnerCls + "-checked", {
    marginInlineStart: "calc(" + token.switchInnerMarginMinSM + "px - 100% + " + (token.switchPinSizeSM + token.switchPadding * 2) + "px)",
    marginInlineEnd: "calc(" + token.switchInnerMarginMaxSM + "px + 100% - " + (token.switchPinSizeSM + token.switchPadding * 2) + "px)"
  }), (0, _defineProperty2["default"])(_ref, switchInnerCls + "-unchecked", {
    marginTop: -token.switchHeightSM,
    marginInlineStart: token.switchInnerMarginMaxSM,
    marginInlineEnd: token.switchInnerMarginMinSM
  }), _ref)), (0, _defineProperty2["default"])(_ref7, componentCls + "-handle", {
    width: token.switchPinSizeSM,
    height: token.switchPinSizeSM
  }), (0, _defineProperty2["default"])(_ref7, componentCls + "-loading-icon", {
    top: (token.switchPinSizeSM - token.switchLoadingIconSize) / 2,
    fontSize: token.switchLoadingIconSize
  }), (0, _defineProperty2["default"])(_ref7, "&" + componentCls + "-checked", (_ref3 = {}, (0, _defineProperty2["default"])(_ref3, componentCls + "-inner", (_ref2 = {}, (0, _defineProperty2["default"])(_ref2, switchInnerCls + "-checked", {
    marginInlineStart: token.switchInnerMarginMinSM,
    marginInlineEnd: token.switchInnerMarginMaxSM
  }), (0, _defineProperty2["default"])(_ref2, switchInnerCls + "-unchecked", {
    marginInlineStart: "calc(" + token.switchInnerMarginMaxSM + "px + 100% - " + (token.switchPinSizeSM + token.switchPadding * 2) + "px)",
    marginInlineEnd: "calc(" + token.switchInnerMarginMinSM + "px - 100% + " + (token.switchPinSizeSM + token.switchPadding * 2) + "px)"
  }), _ref2)), (0, _defineProperty2["default"])(_ref3, componentCls + "-handle", {
    insetInlineStart: "calc(100% - " + (token.switchPinSizeSM + token.switchPadding) + "px)"
  }), _ref3)), (0, _defineProperty2["default"])(_ref7, "&:not(" + componentCls + "-disabled):active", (_ref6 = {}, (0, _defineProperty2["default"])(_ref6, "&:not(" + componentCls + "-checked) " + switchInnerCls, (0, _defineProperty2["default"])({}, switchInnerCls + "-unchecked", {
    marginInlineStart: token.switchInnerMarginMaxSM + token.marginXXS / 2,
    marginInlineEnd: token.switchInnerMarginMinSM - token.marginXXS / 2
  })), (0, _defineProperty2["default"])(_ref6, "&" + componentCls + "-checked " + switchInnerCls, (0, _defineProperty2["default"])({}, switchInnerCls + "-checked", {
    marginInlineStart: token.switchInnerMarginMinSM - token.marginXXS / 2,
    marginInlineEnd: token.switchInnerMarginMaxSM + token.marginXXS / 2
  })), _ref6)), _ref7)));
};
var genSwitchLoadingStyle = function genSwitchLoadingStyle(token) {
  var _componentCls2;
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls, (_componentCls2 = {}, (0, _defineProperty2["default"])(_componentCls2, componentCls + "-loading-icon" + token.iconCls, {
    position: 'relative',
    top: (token.switchPinSize - token.fontSize) / 2,
    color: token.switchLoadingIconColor,
    verticalAlign: 'top'
  }), (0, _defineProperty2["default"])(_componentCls2, "&" + componentCls + "-checked " + componentCls + "-loading-icon", {
    color: token.switchColor
  }), _componentCls2));
};
var genSwitchHandleStyle = function genSwitchHandleStyle(token) {
  var _ref10, _componentCls3;
  var componentCls = token.componentCls;
  var switchHandleCls = componentCls + "-handle";
  return (0, _defineProperty2["default"])({}, componentCls, (_componentCls3 = {}, (0, _defineProperty2["default"])(_componentCls3, switchHandleCls, {
    position: 'absolute',
    top: token.switchPadding,
    insetInlineStart: token.switchPadding,
    width: token.switchPinSize,
    height: token.switchPinSize,
    transition: "all " + token.switchDuration + " ease-in-out",
    '&::before': {
      position: 'absolute',
      top: 0,
      insetInlineEnd: 0,
      bottom: 0,
      insetInlineStart: 0,
      backgroundColor: token.colorWhite,
      borderRadius: token.switchPinSize / 2,
      boxShadow: token.switchHandleShadow,
      transition: "all " + token.switchDuration + " ease-in-out",
      content: '""'
    }
  }), (0, _defineProperty2["default"])(_componentCls3, "&" + componentCls + "-checked " + switchHandleCls, {
    insetInlineStart: "calc(100% - " + (token.switchPinSize + token.switchPadding) + "px)"
  }), (0, _defineProperty2["default"])(_componentCls3, "&:not(" + componentCls + "-disabled):active", (_ref10 = {}, (0, _defineProperty2["default"])(_ref10, switchHandleCls + "::before", {
    insetInlineEnd: token.switchHandleActiveInset,
    insetInlineStart: 0
  }), (0, _defineProperty2["default"])(_ref10, "&" + componentCls + "-checked " + switchHandleCls + "::before", {
    insetInlineEnd: 0,
    insetInlineStart: token.switchHandleActiveInset
  }), _ref10)), _componentCls3));
};
var genSwitchInnerStyle = function genSwitchInnerStyle(token) {
  var _switchInnerCls, _ref12, _ref15, _componentCls4;
  var componentCls = token.componentCls;
  var switchInnerCls = componentCls + "-inner";
  return (0, _defineProperty2["default"])({}, componentCls, (_componentCls4 = {}, (0, _defineProperty2["default"])(_componentCls4, switchInnerCls, (_switchInnerCls = {
    display: 'block',
    overflow: 'hidden',
    borderRadius: 100
  }, (0, _defineProperty2["default"])(_switchInnerCls, switchInnerCls + "-checked, " + switchInnerCls + "-unchecked", {
    display: 'block',
    color: token.colorTextLightSolid,
    fontSize: token.fontSizeSM,
    transition: "margin-inline-start " + token.switchDuration + " ease-in-out, margin-inline-end " + token.switchDuration + " ease-in-out",
    pointerEvents: 'none'
  }), (0, _defineProperty2["default"])(_switchInnerCls, switchInnerCls + "-checked", {
    marginInlineStart: "calc(" + token.switchInnerMarginMin + "px - 100% + " + (token.switchPinSize + token.switchPadding * 2) + "px)",
    marginInlineEnd: "calc(" + token.switchInnerMarginMax + "px + 100% - " + (token.switchPinSize + token.switchPadding * 2) + "px)"
  }), (0, _defineProperty2["default"])(_switchInnerCls, switchInnerCls + "-unchecked", {
    marginTop: -token.switchHeight,
    marginInlineStart: token.switchInnerMarginMax,
    marginInlineEnd: token.switchInnerMarginMin
  }), _switchInnerCls)), (0, _defineProperty2["default"])(_componentCls4, "&" + componentCls + "-checked " + switchInnerCls, (_ref12 = {}, (0, _defineProperty2["default"])(_ref12, switchInnerCls + "-checked", {
    marginInlineStart: token.switchInnerMarginMin,
    marginInlineEnd: token.switchInnerMarginMax
  }), (0, _defineProperty2["default"])(_ref12, switchInnerCls + "-unchecked", {
    marginInlineStart: "calc(" + token.switchInnerMarginMax + "px + 100% - " + (token.switchPinSize + token.switchPadding * 2) + "px)",
    marginInlineEnd: "calc(" + token.switchInnerMarginMin + "px - 100% + " + (token.switchPinSize + token.switchPadding * 2) + "px)"
  }), _ref12)), (0, _defineProperty2["default"])(_componentCls4, "&:not(" + componentCls + "-disabled):active", (_ref15 = {}, (0, _defineProperty2["default"])(_ref15, "&:not(" + componentCls + "-checked) " + switchInnerCls, (0, _defineProperty2["default"])({}, switchInnerCls + "-unchecked", {
    marginInlineStart: token.switchInnerMarginMax + token.switchPadding * 2,
    marginInlineEnd: token.switchInnerMarginMin - token.switchPadding * 2
  })), (0, _defineProperty2["default"])(_ref15, "&" + componentCls + "-checked " + switchInnerCls, (0, _defineProperty2["default"])({}, switchInnerCls + "-checked", {
    marginInlineStart: token.switchInnerMarginMin - token.switchPadding * 2,
    marginInlineEnd: token.switchInnerMarginMax + token.switchPadding * 2
  })), _ref15)), _componentCls4));
};
var genSwitchStyle = function genSwitchStyle(token) {
  var _extends3;
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends4["default"])((0, _extends4["default"])((0, _extends4["default"])((0, _extends4["default"])({}, (0, _style.resetComponent)(token)), (0, _defineProperty2["default"])({
    position: 'relative',
    display: 'inline-block',
    boxSizing: 'border-box',
    minWidth: token.switchMinWidth,
    height: token.switchHeight,
    lineHeight: token.switchHeight + "px",
    verticalAlign: 'middle',
    background: token.colorTextQuaternary,
    border: '0',
    borderRadius: 100,
    cursor: 'pointer',
    transition: "all " + token.motionDurationMid,
    userSelect: 'none'
  }, "&:hover:not(" + componentCls + "-disabled)", {
    background: token.colorTextTertiary
  })), (0, _style.genFocusStyle)(token)), (_extends3 = {}, (0, _defineProperty2["default"])(_extends3, "&" + componentCls + "-checked", (0, _defineProperty2["default"])({
    background: token.switchColor
  }, "&:hover:not(" + componentCls + "-disabled)", {
    background: token.colorPrimaryHover
  })), (0, _defineProperty2["default"])(_extends3, "&" + componentCls + "-loading, &" + componentCls + "-disabled", {
    cursor: 'not-allowed',
    opacity: token.switchDisabledOpacity,
    '*': {
      boxShadow: 'none',
      cursor: 'not-allowed'
    }
  }), (0, _defineProperty2["default"])(_extends3, "&" + componentCls + "-rtl", {
    direction: 'rtl'
  }), _extends3)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Switch', function (token) {
  var switchHeight = token.fontSize * token.lineHeight;
  var switchHeightSM = token.controlHeight / 2;
  var switchPadding = 2; // This is magic
  var switchPinSize = switchHeight - switchPadding * 2;
  var switchPinSizeSM = switchHeightSM - switchPadding * 2;
  var switchToken = (0, _internal.mergeToken)(token, {
    switchMinWidth: switchPinSize * 2 + switchPadding * 4,
    switchHeight: switchHeight,
    switchDuration: token.motionDurationMid,
    switchColor: token.colorPrimary,
    switchDisabledOpacity: token.opacityLoading,
    switchInnerMarginMin: switchPinSize / 2,
    switchInnerMarginMax: switchPinSize + switchPadding + switchPadding * 2,
    switchPadding: switchPadding,
    switchPinSize: switchPinSize,
    switchBg: token.colorBgContainer,
    switchMinWidthSM: switchPinSizeSM * 2 + switchPadding * 2,
    switchHeightSM: switchHeightSM,
    switchInnerMarginMinSM: switchPinSizeSM / 2,
    switchInnerMarginMaxSM: switchPinSizeSM + switchPadding + switchPadding * 2,
    switchPinSizeSM: switchPinSizeSM,
    switchHandleShadow: "0 2px 4px 0 " + new _tinycolor.TinyColor('#00230b').setAlpha(0.2).toRgbString(),
    switchLoadingIconSize: token.fontSizeIcon * 0.75,
    switchLoadingIconColor: "rgba(0, 0, 0, " + token.opacityLoading + ")",
    switchHandleActiveInset: '-30%'
  });
  return [genSwitchStyle(switchToken),
  // inner style
  genSwitchInnerStyle(switchToken),
  // handle style
  genSwitchHandleStyle(switchToken),
  // loading style
  genSwitchLoadingStyle(switchToken),
  // small style
  genSwitchSmallStyle(switchToken)];
});
exports["default"] = _default;