import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { Keyframes } from '@ant-design/cssinjs';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { genFocusOutline, resetComponent } from '../../style';
// ============================== Styles ==============================
var antRadioEffect = new Keyframes('antRadioEffect', {
  '0%': {
    transform: 'scale(1)',
    opacity: 0.5
  },
  '100%': {
    transform: 'scale(1.6)',
    opacity: 0
  }
});
// styles from RadioGroup only
var getGroupRadioStyle = function getGroupRadioStyle(token) {
  var _extends2;
  var componentCls = token.componentCls,
    antCls = token.antCls;
  var groupPrefixCls = componentCls + "-group";
  return _defineProperty({}, groupPrefixCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    display: 'inline-block',
    fontSize: 0,
    // RTL
    '&&-rtl': {
      direction: 'rtl'
    }
  }, _defineProperty(_extends2, antCls + "-badge " + antCls + "-badge-count", {
    zIndex: 1
  }), _defineProperty(_extends2, "> " + antCls + "-badge:not(:first-child) > " + antCls + "-button-wrapper", {
    borderInlineStart: 'none'
  }), _extends2)));
};
// Styles from radio-wrapper
var getRadioBasicStyle = function getRadioBasicStyle(token) {
  var _ref4, _extends3;
  var componentCls = token.componentCls,
    radioWrapperMarginRight = token.radioWrapperMarginRight,
    radioCheckedColor = token.radioCheckedColor,
    radioTop = token.radioTop,
    radioSize = token.radioSize,
    motionDurationSlow = token.motionDurationSlow,
    motionDurationMid = token.motionDurationMid,
    motionEaseInOut = token.motionEaseInOut,
    motionEaseInOutCirc = token.motionEaseInOutCirc,
    radioButtonBg = token.radioButtonBg,
    colorBorder = token.colorBorder,
    lineWidth = token.lineWidth,
    radioDotSize = token.radioDotSize,
    colorBgContainerDisabled = token.colorBgContainerDisabled,
    colorTextDisabled = token.colorTextDisabled,
    paddingXS = token.paddingXS,
    radioDotDisabledColor = token.radioDotDisabledColor,
    lineType = token.lineType,
    radioDotDisabledSize = token.radioDotDisabledSize,
    wireframe = token.wireframe,
    colorWhite = token.colorWhite;
  var radioInnerPrefixCls = componentCls + "-inner";
  return _defineProperty({}, componentCls + "-wrapper", _extends(_extends({}, resetComponent(token)), (_extends3 = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'baseline',
    marginInlineStart: 0,
    marginInlineEnd: radioWrapperMarginRight,
    cursor: 'pointer',
    // RTL
    '&&-rtl': {
      direction: 'rtl'
    },
    '&-disabled': {
      cursor: 'not-allowed'
    },
    '&::after': {
      display: 'inline-block',
      width: 0,
      overflow: 'hidden',
      content: '"\\a0"'
    }
  }, _defineProperty(_extends3, componentCls + "-checked::after", {
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineStart: 0,
    width: '100%',
    height: '100%',
    border: lineWidth + "px " + lineType + " " + radioCheckedColor,
    borderRadius: '50%',
    visibility: 'hidden',
    animationName: antRadioEffect,
    animationDuration: motionDurationSlow,
    animationTimingFunction: motionEaseInOut,
    animationFillMode: 'both',
    content: '""'
  }), _defineProperty(_extends3, componentCls, _extends(_extends({}, resetComponent(token)), {
    position: 'relative',
    insetBlockStart: radioTop,
    display: 'inline-block',
    outline: 'none',
    cursor: 'pointer'
  })), _defineProperty(_extends3, componentCls + "-wrapper:hover &,\n        &:hover " + radioInnerPrefixCls, {
    borderColor: radioCheckedColor
  }), _defineProperty(_extends3, componentCls + "-input:focus-visible + " + radioInnerPrefixCls, _extends({}, genFocusOutline(token))), _defineProperty(_extends3, componentCls + ":hover::after, " + componentCls + "-wrapper:hover &::after", {
    visibility: 'visible'
  }), _defineProperty(_extends3, componentCls + "-inner", {
    '&::after': {
      boxSizing: 'border-box',
      position: 'absolute',
      insetBlockStart: '50%',
      insetInlineStart: '50%',
      display: 'block',
      width: radioSize,
      height: radioSize,
      marginBlockStart: radioSize / -2,
      marginInlineStart: radioSize / -2,
      backgroundColor: wireframe ? radioCheckedColor : colorWhite,
      borderBlockStart: 0,
      borderInlineStart: 0,
      borderRadius: radioSize,
      transform: 'scale(0)',
      opacity: 0,
      transition: "all " + motionDurationSlow + " " + motionEaseInOutCirc,
      content: '""'
    },
    boxSizing: 'border-box',
    position: 'relative',
    insetBlockStart: 0,
    insetInlineStart: 0,
    display: 'block',
    width: radioSize,
    height: radioSize,
    backgroundColor: radioButtonBg,
    borderColor: colorBorder,
    borderStyle: 'solid',
    borderWidth: lineWidth,
    borderRadius: '50%',
    transition: "all " + motionDurationMid
  }), _defineProperty(_extends3, componentCls + "-input", {
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineEnd: 0,
    insetBlockEnd: 0,
    insetInlineStart: 0,
    zIndex: 1,
    cursor: 'pointer',
    opacity: 0
  }), _defineProperty(_extends3, componentCls + "-checked", _defineProperty({}, radioInnerPrefixCls, {
    borderColor: radioCheckedColor,
    backgroundColor: wireframe ? radioButtonBg : radioCheckedColor,
    '&::after': {
      transform: "scale(" + radioDotSize / radioSize + ")",
      opacity: 1,
      transition: "all " + motionDurationSlow + " " + motionEaseInOutCirc
    }
  })), _defineProperty(_extends3, componentCls + "-disabled", (_ref4 = {
    cursor: 'not-allowed'
  }, _defineProperty(_ref4, radioInnerPrefixCls, {
    backgroundColor: colorBgContainerDisabled,
    borderColor: colorBorder,
    cursor: 'not-allowed',
    '&::after': {
      backgroundColor: radioDotDisabledColor
    }
  }), _defineProperty(_ref4, '&-input', {
    cursor: 'not-allowed'
  }), _defineProperty(_ref4, componentCls + "-disabled + span", {
    color: colorTextDisabled,
    cursor: 'not-allowed'
  }), _defineProperty(_ref4, "&" + componentCls + "-checked", _defineProperty({}, radioInnerPrefixCls, {
    '&::after': {
      transform: "scale(" + radioDotDisabledSize / radioSize + ")"
    }
  })), _ref4)), _defineProperty(_extends3, "span" + componentCls + " + *", {
    paddingInlineStart: paddingXS,
    paddingInlineEnd: paddingXS
  }), _extends3)));
};
// Styles from radio-button
var getRadioButtonStyle = function getRadioButtonStyle(token) {
  var _ref6;
  var radioButtonColor = token.radioButtonColor,
    controlHeight = token.controlHeight,
    componentCls = token.componentCls,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    colorBorder = token.colorBorder,
    motionDurationSlow = token.motionDurationSlow,
    motionDurationMid = token.motionDurationMid,
    radioButtonPaddingHorizontal = token.radioButtonPaddingHorizontal,
    fontSize = token.fontSize,
    radioButtonBg = token.radioButtonBg,
    fontSizeLG = token.fontSizeLG,
    controlHeightLG = token.controlHeightLG,
    controlHeightSM = token.controlHeightSM,
    paddingXS = token.paddingXS,
    borderRadius = token.borderRadius,
    borderRadiusSM = token.borderRadiusSM,
    borderRadiusLG = token.borderRadiusLG,
    radioCheckedColor = token.radioCheckedColor,
    radioButtonCheckedBg = token.radioButtonCheckedBg,
    radioButtonHoverColor = token.radioButtonHoverColor,
    radioButtonActiveColor = token.radioButtonActiveColor,
    radioSolidCheckedColor = token.radioSolidCheckedColor,
    colorTextDisabled = token.colorTextDisabled,
    colorBgContainerDisabled = token.colorBgContainerDisabled,
    radioDisabledButtonCheckedColor = token.radioDisabledButtonCheckedColor,
    radioDisabledButtonCheckedBg = token.radioDisabledButtonCheckedBg;
  return _defineProperty({}, componentCls + "-button-wrapper", (_ref6 = {
    position: 'relative',
    display: 'inline-block',
    height: controlHeight,
    margin: 0,
    paddingInline: radioButtonPaddingHorizontal,
    paddingBlock: 0,
    color: radioButtonColor,
    fontSize: fontSize,
    lineHeight: controlHeight - lineWidth * 2 + "px",
    background: radioButtonBg,
    border: lineWidth + "px " + lineType + " " + colorBorder,
    // strange align fix for chrome but works
    // https://gw.alipayobjects.com/zos/rmsportal/VFTfKXJuogBAXcvfAUWJ.gif
    borderBlockStartWidth: lineWidth + 0.02,
    borderInlineStartWidth: 0,
    borderInlineEndWidth: lineWidth,
    cursor: 'pointer',
    transition: ["color " + motionDurationMid, "background " + motionDurationMid, "border-color " + motionDurationMid, "box-shadow " + motionDurationMid].join(','),
    a: {
      color: radioButtonColor
    }
  }, _defineProperty(_ref6, "> " + componentCls + "-button", {
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineStart: 0,
    zIndex: -1,
    width: '100%',
    height: '100%'
  }), _defineProperty(_ref6, '&:not(:first-child)', {
    '&::before': {
      position: 'absolute',
      insetBlockStart: -lineWidth,
      insetInlineStart: -lineWidth,
      display: 'block',
      boxSizing: 'content-box',
      width: 1,
      height: '100%',
      paddingBlock: lineWidth,
      paddingInline: 0,
      backgroundColor: colorBorder,
      transition: "background-color " + motionDurationSlow,
      content: '""'
    }
  }), _defineProperty(_ref6, '&:first-child', {
    borderInlineStart: lineWidth + "px " + lineType + " " + colorBorder,
    borderStartStartRadius: borderRadius,
    borderEndStartRadius: borderRadius
  }), _defineProperty(_ref6, '&:last-child', {
    borderStartEndRadius: borderRadius,
    borderEndEndRadius: borderRadius
  }), _defineProperty(_ref6, '&:first-child:last-child', {
    borderRadius: borderRadius
  }), _defineProperty(_ref6, componentCls + "-group-large &", {
    height: controlHeightLG,
    fontSize: fontSizeLG,
    lineHeight: controlHeightLG - lineWidth * 2 + "px",
    '&:first-child': {
      borderStartStartRadius: borderRadiusLG,
      borderEndStartRadius: borderRadiusLG
    },
    '&:last-child': {
      borderStartEndRadius: borderRadiusLG,
      borderEndEndRadius: borderRadiusLG
    }
  }), _defineProperty(_ref6, componentCls + "-group-small &", {
    height: controlHeightSM,
    paddingInline: paddingXS - lineWidth,
    paddingBlock: 0,
    lineHeight: controlHeightSM - lineWidth * 2 + "px",
    '&:first-child': {
      borderStartStartRadius: borderRadiusSM,
      borderEndStartRadius: borderRadiusSM
    },
    '&:last-child': {
      borderStartEndRadius: borderRadiusSM,
      borderEndEndRadius: borderRadiusSM
    }
  }), _defineProperty(_ref6, '&:hover', {
    position: 'relative',
    color: radioCheckedColor
  }), _defineProperty(_ref6, '&:has(:focus-visible)', _extends({}, genFocusOutline(token))), _defineProperty(_ref6, componentCls + "-inner, input[type='checkbox'], input[type='radio']", {
    width: 0,
    height: 0,
    opacity: 0,
    pointerEvents: 'none'
  }), _defineProperty(_ref6, '&-checked:not(&-disabled)', {
    zIndex: 1,
    color: radioCheckedColor,
    background: radioButtonCheckedBg,
    borderColor: radioCheckedColor,
    '&::before': {
      backgroundColor: radioCheckedColor
    },
    '&:first-child': {
      borderColor: radioCheckedColor
    },
    '&:hover': {
      color: radioButtonHoverColor,
      borderColor: radioButtonHoverColor,
      '&::before': {
        backgroundColor: radioButtonHoverColor
      }
    },
    '&:active': {
      color: radioButtonActiveColor,
      borderColor: radioButtonActiveColor,
      '&::before': {
        backgroundColor: radioButtonActiveColor
      }
    }
  }), _defineProperty(_ref6, componentCls + "-group-solid &-checked:not(&-disabled)", {
    color: radioSolidCheckedColor,
    background: radioCheckedColor,
    borderColor: radioCheckedColor,
    '&:hover': {
      color: radioSolidCheckedColor,
      background: radioButtonHoverColor,
      borderColor: radioButtonHoverColor
    },
    '&:active': {
      color: radioSolidCheckedColor,
      background: radioButtonActiveColor,
      borderColor: radioButtonActiveColor
    }
  }), _defineProperty(_ref6, '&-disabled', {
    color: colorTextDisabled,
    backgroundColor: colorBgContainerDisabled,
    borderColor: colorBorder,
    cursor: 'not-allowed',
    '&:first-child, &:hover': {
      color: colorTextDisabled,
      backgroundColor: colorBgContainerDisabled,
      borderColor: colorBorder
    }
  }), _defineProperty(_ref6, '&-disabled&-checked', {
    color: radioDisabledButtonCheckedColor,
    backgroundColor: radioDisabledButtonCheckedBg,
    borderColor: colorBorder,
    boxShadow: 'none'
  }), _ref6));
};
// ============================== Export ==============================
export default genComponentStyleHook('Radio', function (token) {
  var padding = token.padding,
    lineWidth = token.lineWidth,
    colorBgContainerDisabled = token.colorBgContainerDisabled,
    colorTextDisabled = token.colorTextDisabled,
    colorBgContainer = token.colorBgContainer,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    fontSizeLG = token.fontSizeLG,
    controlOutline = token.controlOutline,
    colorPrimaryHover = token.colorPrimaryHover,
    colorPrimaryActive = token.colorPrimaryActive,
    colorText = token.colorText,
    colorPrimary = token.colorPrimary,
    marginXS = token.marginXS,
    controlOutlineWidth = token.controlOutlineWidth,
    wireframe = token.wireframe;
  // Radio
  var radioFocusShadow = "0 0 0 " + controlOutlineWidth + "px " + controlOutline;
  var radioButtonFocusShadow = radioFocusShadow;
  var radioSize = fontSizeLG;
  var radioTop = (Math.round(fontSize * lineHeight) - radioSize) / 2;
  var dotPadding = 4; // Fixed value
  var radioDotDisabledSize = radioSize - dotPadding * 2;
  var radioDotSize = wireframe ? radioDotDisabledSize : radioSize - (dotPadding + lineWidth) * 2;
  var radioCheckedColor = colorPrimary;
  // Radio buttons
  var radioButtonColor = colorText;
  var radioButtonHoverColor = colorPrimaryHover;
  var radioButtonActiveColor = colorPrimaryActive;
  var radioButtonPaddingHorizontal = padding - lineWidth;
  var radioDisabledButtonCheckedColor = colorTextDisabled;
  var radioWrapperMarginRight = marginXS;
  var radioToken = mergeToken(token, {
    radioFocusShadow: radioFocusShadow,
    radioButtonFocusShadow: radioButtonFocusShadow,
    radioSize: radioSize,
    radioTop: radioTop,
    radioDotSize: radioDotSize,
    radioDotDisabledSize: radioDotDisabledSize,
    radioCheckedColor: radioCheckedColor,
    radioDotDisabledColor: colorTextDisabled,
    radioSolidCheckedColor: colorBgContainer,
    radioButtonBg: colorBgContainer,
    radioButtonCheckedBg: colorBgContainer,
    radioButtonColor: radioButtonColor,
    radioButtonHoverColor: radioButtonHoverColor,
    radioButtonActiveColor: radioButtonActiveColor,
    radioButtonPaddingHorizontal: radioButtonPaddingHorizontal,
    radioDisabledButtonCheckedBg: colorBgContainerDisabled,
    radioDisabledButtonCheckedColor: radioDisabledButtonCheckedColor,
    radioWrapperMarginRight: radioWrapperMarginRight
  });
  return [getGroupRadioStyle(radioToken), getRadioBasicStyle(radioToken), getRadioButtonStyle(radioToken)];
});