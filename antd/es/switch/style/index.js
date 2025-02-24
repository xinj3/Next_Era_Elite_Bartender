import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { TinyColor } from '@ctrl/tinycolor';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { genFocusStyle, resetComponent } from '../../style';
var genSwitchSmallStyle = function genSwitchSmallStyle(token) {
  var _ref, _ref2, _ref3, _ref6, _ref7;
  var componentCls = token.componentCls;
  var switchInnerCls = componentCls + "-inner";
  return _defineProperty({}, componentCls, _defineProperty({}, "&" + componentCls + "-small", (_ref7 = {
    minWidth: token.switchMinWidthSM,
    height: token.switchHeightSM,
    lineHeight: token.switchHeightSM + "px"
  }, _defineProperty(_ref7, componentCls + "-inner", (_ref = {}, _defineProperty(_ref, switchInnerCls + "-checked", {
    marginInlineStart: "calc(" + token.switchInnerMarginMinSM + "px - 100% + " + (token.switchPinSizeSM + token.switchPadding * 2) + "px)",
    marginInlineEnd: "calc(" + token.switchInnerMarginMaxSM + "px + 100% - " + (token.switchPinSizeSM + token.switchPadding * 2) + "px)"
  }), _defineProperty(_ref, switchInnerCls + "-unchecked", {
    marginTop: -token.switchHeightSM,
    marginInlineStart: token.switchInnerMarginMaxSM,
    marginInlineEnd: token.switchInnerMarginMinSM
  }), _ref)), _defineProperty(_ref7, componentCls + "-handle", {
    width: token.switchPinSizeSM,
    height: token.switchPinSizeSM
  }), _defineProperty(_ref7, componentCls + "-loading-icon", {
    top: (token.switchPinSizeSM - token.switchLoadingIconSize) / 2,
    fontSize: token.switchLoadingIconSize
  }), _defineProperty(_ref7, "&" + componentCls + "-checked", (_ref3 = {}, _defineProperty(_ref3, componentCls + "-inner", (_ref2 = {}, _defineProperty(_ref2, switchInnerCls + "-checked", {
    marginInlineStart: token.switchInnerMarginMinSM,
    marginInlineEnd: token.switchInnerMarginMaxSM
  }), _defineProperty(_ref2, switchInnerCls + "-unchecked", {
    marginInlineStart: "calc(" + token.switchInnerMarginMaxSM + "px + 100% - " + (token.switchPinSizeSM + token.switchPadding * 2) + "px)",
    marginInlineEnd: "calc(" + token.switchInnerMarginMinSM + "px - 100% + " + (token.switchPinSizeSM + token.switchPadding * 2) + "px)"
  }), _ref2)), _defineProperty(_ref3, componentCls + "-handle", {
    insetInlineStart: "calc(100% - " + (token.switchPinSizeSM + token.switchPadding) + "px)"
  }), _ref3)), _defineProperty(_ref7, "&:not(" + componentCls + "-disabled):active", (_ref6 = {}, _defineProperty(_ref6, "&:not(" + componentCls + "-checked) " + switchInnerCls, _defineProperty({}, switchInnerCls + "-unchecked", {
    marginInlineStart: token.switchInnerMarginMaxSM + token.marginXXS / 2,
    marginInlineEnd: token.switchInnerMarginMinSM - token.marginXXS / 2
  })), _defineProperty(_ref6, "&" + componentCls + "-checked " + switchInnerCls, _defineProperty({}, switchInnerCls + "-checked", {
    marginInlineStart: token.switchInnerMarginMinSM - token.marginXXS / 2,
    marginInlineEnd: token.switchInnerMarginMaxSM + token.marginXXS / 2
  })), _ref6)), _ref7)));
};
var genSwitchLoadingStyle = function genSwitchLoadingStyle(token) {
  var _componentCls2;
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls, (_componentCls2 = {}, _defineProperty(_componentCls2, componentCls + "-loading-icon" + token.iconCls, {
    position: 'relative',
    top: (token.switchPinSize - token.fontSize) / 2,
    color: token.switchLoadingIconColor,
    verticalAlign: 'top'
  }), _defineProperty(_componentCls2, "&" + componentCls + "-checked " + componentCls + "-loading-icon", {
    color: token.switchColor
  }), _componentCls2));
};
var genSwitchHandleStyle = function genSwitchHandleStyle(token) {
  var _ref10, _componentCls3;
  var componentCls = token.componentCls;
  var switchHandleCls = componentCls + "-handle";
  return _defineProperty({}, componentCls, (_componentCls3 = {}, _defineProperty(_componentCls3, switchHandleCls, {
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
  }), _defineProperty(_componentCls3, "&" + componentCls + "-checked " + switchHandleCls, {
    insetInlineStart: "calc(100% - " + (token.switchPinSize + token.switchPadding) + "px)"
  }), _defineProperty(_componentCls3, "&:not(" + componentCls + "-disabled):active", (_ref10 = {}, _defineProperty(_ref10, switchHandleCls + "::before", {
    insetInlineEnd: token.switchHandleActiveInset,
    insetInlineStart: 0
  }), _defineProperty(_ref10, "&" + componentCls + "-checked " + switchHandleCls + "::before", {
    insetInlineEnd: 0,
    insetInlineStart: token.switchHandleActiveInset
  }), _ref10)), _componentCls3));
};
var genSwitchInnerStyle = function genSwitchInnerStyle(token) {
  var _switchInnerCls, _ref12, _ref15, _componentCls4;
  var componentCls = token.componentCls;
  var switchInnerCls = componentCls + "-inner";
  return _defineProperty({}, componentCls, (_componentCls4 = {}, _defineProperty(_componentCls4, switchInnerCls, (_switchInnerCls = {
    display: 'block',
    overflow: 'hidden',
    borderRadius: 100
  }, _defineProperty(_switchInnerCls, switchInnerCls + "-checked, " + switchInnerCls + "-unchecked", {
    display: 'block',
    color: token.colorTextLightSolid,
    fontSize: token.fontSizeSM,
    transition: "margin-inline-start " + token.switchDuration + " ease-in-out, margin-inline-end " + token.switchDuration + " ease-in-out",
    pointerEvents: 'none'
  }), _defineProperty(_switchInnerCls, switchInnerCls + "-checked", {
    marginInlineStart: "calc(" + token.switchInnerMarginMin + "px - 100% + " + (token.switchPinSize + token.switchPadding * 2) + "px)",
    marginInlineEnd: "calc(" + token.switchInnerMarginMax + "px + 100% - " + (token.switchPinSize + token.switchPadding * 2) + "px)"
  }), _defineProperty(_switchInnerCls, switchInnerCls + "-unchecked", {
    marginTop: -token.switchHeight,
    marginInlineStart: token.switchInnerMarginMax,
    marginInlineEnd: token.switchInnerMarginMin
  }), _switchInnerCls)), _defineProperty(_componentCls4, "&" + componentCls + "-checked " + switchInnerCls, (_ref12 = {}, _defineProperty(_ref12, switchInnerCls + "-checked", {
    marginInlineStart: token.switchInnerMarginMin,
    marginInlineEnd: token.switchInnerMarginMax
  }), _defineProperty(_ref12, switchInnerCls + "-unchecked", {
    marginInlineStart: "calc(" + token.switchInnerMarginMax + "px + 100% - " + (token.switchPinSize + token.switchPadding * 2) + "px)",
    marginInlineEnd: "calc(" + token.switchInnerMarginMin + "px - 100% + " + (token.switchPinSize + token.switchPadding * 2) + "px)"
  }), _ref12)), _defineProperty(_componentCls4, "&:not(" + componentCls + "-disabled):active", (_ref15 = {}, _defineProperty(_ref15, "&:not(" + componentCls + "-checked) " + switchInnerCls, _defineProperty({}, switchInnerCls + "-unchecked", {
    marginInlineStart: token.switchInnerMarginMax + token.switchPadding * 2,
    marginInlineEnd: token.switchInnerMarginMin - token.switchPadding * 2
  })), _defineProperty(_ref15, "&" + componentCls + "-checked " + switchInnerCls, _defineProperty({}, switchInnerCls + "-checked", {
    marginInlineStart: token.switchInnerMarginMin - token.switchPadding * 2,
    marginInlineEnd: token.switchInnerMarginMax + token.switchPadding * 2
  })), _ref15)), _componentCls4));
};
var genSwitchStyle = function genSwitchStyle(token) {
  var _extends3;
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls, _extends(_extends(_extends(_extends({}, resetComponent(token)), _defineProperty({
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
  })), genFocusStyle(token)), (_extends3 = {}, _defineProperty(_extends3, "&" + componentCls + "-checked", _defineProperty({
    background: token.switchColor
  }, "&:hover:not(" + componentCls + "-disabled)", {
    background: token.colorPrimaryHover
  })), _defineProperty(_extends3, "&" + componentCls + "-loading, &" + componentCls + "-disabled", {
    cursor: 'not-allowed',
    opacity: token.switchDisabledOpacity,
    '*': {
      boxShadow: 'none',
      cursor: 'not-allowed'
    }
  }), _defineProperty(_extends3, "&" + componentCls + "-rtl", {
    direction: 'rtl'
  }), _extends3)));
};
// ============================== Export ==============================
export default genComponentStyleHook('Switch', function (token) {
  var switchHeight = token.fontSize * token.lineHeight;
  var switchHeightSM = token.controlHeight / 2;
  var switchPadding = 2; // This is magic
  var switchPinSize = switchHeight - switchPadding * 2;
  var switchPinSizeSM = switchHeightSM - switchPadding * 2;
  var switchToken = mergeToken(token, {
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
    switchHandleShadow: "0 2px 4px 0 " + new TinyColor('#00230b').setAlpha(0.2).toRgbString(),
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