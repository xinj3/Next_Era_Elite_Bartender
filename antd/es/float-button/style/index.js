import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { Keyframes } from '@ant-design/cssinjs';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { initFadeMotion } from '../../style/motion/fade';
import { resetComponent } from '../../style';
// ============================== Group ==============================
var floatButtonGroupStyle = function floatButtonGroupStyle(token) {
  var _extends2, _ref5, _ref8;
  var componentCls = token.componentCls,
    floatButtonSize = token.floatButtonSize,
    margin = token.margin,
    borderRadius = token.borderRadius,
    motionDurationSlow = token.motionDurationSlow;
  var groupPrefixCls = componentCls + "-group";
  var moveDownIn = new Keyframes('antFloatButtonMoveDownIn', {
    '0%': {
      transform: "translate3d(0, " + floatButtonSize + "px, 0)",
      transformOrigin: '0 0',
      opacity: 0
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    }
  });
  var moveDownOut = new Keyframes('antFloatButtonMoveDownOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1
    },
    '100%': {
      transform: "translate3d(0, " + floatButtonSize + "px, 0)",
      transformOrigin: '0 0',
      opacity: 0
    }
  });
  return _ref8 = {}, _defineProperty(_ref8, groupPrefixCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    zIndex: 99,
    display: 'block',
    border: 'none',
    position: 'fixed',
    width: floatButtonSize,
    height: 'auto',
    boxShadow: 'none',
    minHeight: floatButtonSize,
    insetInlineEnd: token.floatButtonInsetInlineEnd,
    insetBlockEnd: token.floatButtonInsetBlockEnd,
    borderRadius: token.borderRadius
  }, _defineProperty(_extends2, groupPrefixCls + "-wrap", {
    zIndex: -1,
    display: 'block',
    position: 'relative',
    marginBottom: margin
  }), _defineProperty(_extends2, '&&-rtl', {
    direction: 'rtl'
  }), _defineProperty(_extends2, componentCls, {
    position: 'static'
  }), _extends2))), _defineProperty(_ref8, groupPrefixCls + "-circle", _defineProperty({}, componentCls + "-circle:not(:last-child)", _defineProperty({
    marginBottom: token.margin
  }, componentCls + "-body", {
    width: floatButtonSize,
    height: floatButtonSize
  }))), _defineProperty(_ref8, groupPrefixCls + "-square", (_ref5 = {}, _defineProperty(_ref5, componentCls + "-square", {
    borderRadius: 0,
    padding: 0,
    '&:first-child': {
      borderStartStartRadius: borderRadius,
      borderStartEndRadius: borderRadius
    },
    '&:last-child': {
      borderEndStartRadius: borderRadius,
      borderEndEndRadius: borderRadius
    },
    '&:not(:last-child)': {
      borderBottom: token.lineWidth + "px " + token.lineType + " " + token.colorSplit
    }
  }), _defineProperty(_ref5, groupPrefixCls + "-wrap", _defineProperty({
    display: 'block',
    borderRadius: borderRadius,
    boxShadow: token.boxShadowSecondary,
    overflow: 'hidden'
  }, componentCls + "-square", _defineProperty({
    boxShadow: 'none',
    marginTop: 0,
    borderRadius: 0,
    padding: token.paddingXXS,
    '&:first-child': {
      borderStartStartRadius: borderRadius,
      borderStartEndRadius: borderRadius
    },
    '&:last-child': {
      borderEndStartRadius: borderRadius,
      borderEndEndRadius: borderRadius
    },
    '&:not(:last-child)': {
      borderBottom: token.lineWidth + "px " + token.lineType + " " + token.colorSplit
    }
  }, componentCls + "-body", {
    width: floatButtonSize - token.paddingXXS * 2,
    height: floatButtonSize - token.paddingXXS * 2
  }))), _ref5)), _defineProperty(_ref8, groupPrefixCls + "-wrap-enter," + groupPrefixCls + "-wrap-enter-active", {
    animationName: moveDownIn,
    animationDuration: motionDurationSlow
  }), _defineProperty(_ref8, groupPrefixCls + "-wrap-leave", {
    animationName: moveDownOut,
    animationDuration: motionDurationSlow
  }), _defineProperty(_ref8, groupPrefixCls + "-circle-shadow", {
    boxShadow: 'none'
  }), _defineProperty(_ref8, groupPrefixCls + "-square-shadow", _defineProperty({
    boxShadow: token.boxShadowSecondary
  }, componentCls + "-square", _defineProperty({
    boxShadow: 'none',
    padding: token.paddingXXS
  }, componentCls + "-body", {
    width: floatButtonSize - token.paddingXXS * 2,
    height: floatButtonSize - token.paddingXXS * 2
  }))), _ref8;
};
// ============================== Shared ==============================
var sharedFloatButtonStyle = function sharedFloatButtonStyle(token) {
  var _ref13, _ref16, _ref19;
  var componentCls = token.componentCls,
    floatButtonIconSize = token.floatButtonIconSize,
    floatButtonSize = token.floatButtonSize;
  return _ref19 = {}, _defineProperty(_ref19, componentCls, _extends(_extends({}, resetComponent(token)), _defineProperty({
    border: 'none',
    position: 'fixed',
    cursor: 'pointer',
    overflow: 'hidden',
    zIndex: 99,
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    width: floatButtonSize,
    height: floatButtonSize,
    insetInlineEnd: token.floatButtonInsetInlineEnd,
    insetBlockEnd: token.floatButtonInsetBlockEnd,
    boxShadow: token.boxShadowSecondary,
    // Pure Panel
    '&-pure': {
      position: 'relative',
      inset: 'auto'
    },
    '&:empty': {
      display: 'none'
    }
  }, componentCls + "-body", _defineProperty({
    width: floatButtonSize,
    height: floatButtonSize,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: "all " + token.motionDurationMid
  }, componentCls + "-content", _defineProperty({
    overflow: 'hidden',
    textAlign: 'center',
    minHeight: floatButtonSize,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "2px 4px"
  }, componentCls + "-icon", {
    textAlign: 'center',
    margin: 'auto',
    width: floatButtonIconSize,
    fontSize: floatButtonIconSize,
    lineHeight: 1
  }))))), _defineProperty(_ref19, componentCls + "-circle", _defineProperty({
    height: floatButtonSize,
    borderRadius: '50%'
  }, componentCls + "-body", {
    borderRadius: '50%'
  })), _defineProperty(_ref19, componentCls + "-square", _defineProperty({
    height: 'auto',
    minHeight: floatButtonSize,
    borderRadius: token.borderRadius
  }, componentCls + "-body", {
    height: 'auto',
    borderRadius: token.borderRadiusSM
  })), _defineProperty(_ref19, componentCls + "-default", _defineProperty({
    backgroundColor: token.floatButtonBackgroundColor,
    transition: "background-color " + token.motionDurationMid
  }, componentCls + "-body", _defineProperty({
    backgroundColor: token.floatButtonBackgroundColor,
    transition: "background-color " + token.motionDurationMid,
    '&:hover': {
      backgroundColor: token.colorFillContent
    }
  }, componentCls + "-content", (_ref13 = {}, _defineProperty(_ref13, componentCls + "-icon", {
    color: token.colorText
  }), _defineProperty(_ref13, componentCls + "-description", {
    display: 'flex',
    alignItems: 'center',
    lineHeight: token.fontSizeLG + "px",
    color: token.colorText,
    fontSize: token.fontSizeSM
  }), _ref13)))), _defineProperty(_ref19, componentCls + "-primary", _defineProperty({
    backgroundColor: token.colorPrimary
  }, componentCls + "-body", _defineProperty({
    backgroundColor: token.colorPrimary,
    transition: "background-color " + token.motionDurationMid,
    '&:hover': {
      backgroundColor: token.colorPrimaryHover
    }
  }, componentCls + "-content", (_ref16 = {}, _defineProperty(_ref16, componentCls + "-icon", {
    color: token.colorTextLightSolid
  }), _defineProperty(_ref16, componentCls + "-description", {
    display: 'flex',
    alignItems: 'center',
    lineHeight: token.fontSizeLG + "px",
    color: token.colorTextLightSolid,
    fontSize: token.fontSizeSM
  }), _ref16)))), _ref19;
};
// ============================== Export ==============================
export default genComponentStyleHook('FloatButton', function (token) {
  var colorTextLightSolid = token.colorTextLightSolid,
    colorBgElevated = token.colorBgElevated,
    controlHeightLG = token.controlHeightLG,
    marginXXL = token.marginXXL,
    marginLG = token.marginLG,
    fontSize = token.fontSize,
    fontSizeIcon = token.fontSizeIcon,
    controlItemBgHover = token.controlItemBgHover;
  var floatButtonToken = mergeToken(token, {
    floatButtonBackgroundColor: colorBgElevated,
    floatButtonColor: colorTextLightSolid,
    floatButtonHoverBackgroundColor: controlItemBgHover,
    floatButtonFontSize: fontSize,
    floatButtonIconSize: fontSizeIcon * 1.5,
    floatButtonSize: controlHeightLG,
    floatButtonInsetBlockEnd: marginXXL,
    floatButtonInsetInlineEnd: marginLG
  });
  return [floatButtonGroupStyle(floatButtonToken), sharedFloatButtonStyle(floatButtonToken), initFadeMotion(token)];
});