import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { Keyframes } from '@ant-design/cssinjs';
import { genComponentStyleHook, mergeToken, PresetColors } from '../../theme/internal';
import { resetComponent } from '../../style';
var antStatusProcessing = new Keyframes('antStatusProcessing', {
  '0%': {
    transform: 'scale(0.8)',
    opacity: 0.5
  },
  '100%': {
    transform: 'scale(2.4)',
    opacity: 0
  }
});
var antZoomBadgeIn = new Keyframes('antZoomBadgeIn', {
  '0%': {
    transform: 'scale(0) translate(50%, -50%)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1) translate(50%, -50%)'
  }
});
var antZoomBadgeOut = new Keyframes('antZoomBadgeOut', {
  '0%': {
    transform: 'scale(1) translate(50%, -50%)'
  },
  '100%': {
    transform: 'scale(0) translate(50%, -50%)',
    opacity: 0
  }
});
var antNoWrapperZoomBadgeIn = new Keyframes('antNoWrapperZoomBadgeIn', {
  '0%': {
    transform: 'scale(0)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)'
  }
});
var antNoWrapperZoomBadgeOut = new Keyframes('antNoWrapperZoomBadgeOut', {
  '0%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0)',
    opacity: 0
  }
});
var antBadgeLoadingCircle = new Keyframes('antBadgeLoadingCircle', {
  '0%': {
    transformOrigin: '50%'
  },
  '100%': {
    transform: 'translate(50%, -50%) rotate(360deg)',
    transformOrigin: '50%'
  }
});
var genSharedBadgeStyle = function genSharedBadgeStyle(token) {
  var _extends4, _ref2, _ref4, _extends6, _extends7, _extends8, _ref7;
  var componentCls = token.componentCls,
    iconCls = token.iconCls,
    antCls = token.antCls,
    badgeFontHeight = token.badgeFontHeight,
    badgeShadowSize = token.badgeShadowSize,
    badgeHeightSm = token.badgeHeightSm,
    motionDurationSlow = token.motionDurationSlow,
    badgeStatusSize = token.badgeStatusSize,
    marginXS = token.marginXS,
    badgeRibbonOffset = token.badgeRibbonOffset;
  var numberPrefixCls = antCls + "-scroll-number";
  var ribbonPrefixCls = antCls + "-ribbon";
  var ribbonWrapperPrefixCls = antCls + "-ribbon-wrapper";
  var statusPreset = PresetColors.reduce(function (prev, colorKey) {
    var darkColor = token[colorKey + "-6"];
    return _extends(_extends({}, prev), _defineProperty({}, componentCls + "-status-" + colorKey, {
      background: darkColor
    }));
  }, {});
  var statusRibbonPreset = PresetColors.reduce(function (prev, colorKey) {
    var darkColor = token[colorKey + "-6"];
    return _extends(_extends({}, prev), _defineProperty({}, "&" + ribbonPrefixCls + "-color-" + colorKey, {
      background: darkColor,
      color: darkColor
    }));
  }, {});
  return _ref7 = {}, _defineProperty(_ref7, componentCls, _extends(_extends({}, resetComponent(token)), (_extends6 = {
    position: 'relative',
    display: 'inline-block',
    lineHeight: 1
  }, _defineProperty(_extends6, componentCls + "-count", {
    zIndex: token.badgeZIndex,
    minWidth: token.badgeHeight,
    height: token.badgeHeight,
    color: token.badgeTextColor,
    fontWeight: token.badgeFontWeight,
    fontSize: token.badgeFontSize,
    lineHeight: token.badgeHeight + "px",
    whiteSpace: 'nowrap',
    textAlign: 'center',
    background: token.badgeColor,
    borderRadius: token.badgeHeight / 2,
    boxShadow: "0 0 0 " + badgeShadowSize + "px " + token.badgeShadowColor,
    transition: "background " + token.motionDurationMid,
    a: {
      color: token.badgeTextColor
    },
    'a:hover': {
      color: token.badgeTextColor
    },
    'a:hover &': {
      background: token.badgeColorHover
    }
  }), _defineProperty(_extends6, componentCls + "-count-sm", {
    minWidth: badgeHeightSm,
    height: badgeHeightSm,
    fontSize: token.badgeFontSizeSm,
    lineHeight: badgeHeightSm + "px",
    borderRadius: badgeHeightSm / 2
  }), _defineProperty(_extends6, componentCls + "-multiple-words", {
    padding: "0 " + token.paddingXS + "px"
  }), _defineProperty(_extends6, componentCls + "-dot", {
    zIndex: token.badgeZIndex,
    width: token.badgeDotSize,
    minWidth: token.badgeDotSize,
    height: token.badgeDotSize,
    background: token.badgeColor,
    borderRadius: '100%',
    boxShadow: "0 0 0 " + badgeShadowSize + "px " + token.badgeShadowColor
  }), _defineProperty(_extends6, componentCls + "-dot" + numberPrefixCls, {
    transition: "background " + motionDurationSlow
  }), _defineProperty(_extends6, componentCls + "-count, " + componentCls + "-dot, " + numberPrefixCls + "-custom-component", _defineProperty({
    position: 'absolute',
    top: 0,
    insetInlineEnd: 0,
    transform: 'translate(50%, -50%)',
    transformOrigin: '100% 0%'
  }, iconCls + "-spin", {
    animationName: antBadgeLoadingCircle,
    animationDuration: token.motionDurationMid,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  })), _defineProperty(_extends6, "&" + componentCls + "-status", _extends(_extends((_extends4 = {
    lineHeight: 'inherit',
    verticalAlign: 'baseline'
  }, _defineProperty(_extends4, componentCls + "-status-dot", {
    position: 'relative',
    top: -1,
    display: 'inline-block',
    width: badgeStatusSize,
    height: badgeStatusSize,
    verticalAlign: 'middle',
    borderRadius: '50%'
  }), _defineProperty(_extends4, componentCls + "-status-success", {
    backgroundColor: token.colorSuccess
  }), _defineProperty(_extends4, componentCls + "-status-processing", {
    position: 'relative',
    backgroundColor: token.colorPrimary,
    '&::after': {
      position: 'absolute',
      top: 0,
      insetInlineStart: 0,
      width: '100%',
      height: '100%',
      border: badgeShadowSize + "px solid " + token.colorPrimary,
      borderRadius: '50%',
      animationName: antStatusProcessing,
      animationDuration: token.badgeProcessingDuration,
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
      content: '""'
    }
  }), _defineProperty(_extends4, componentCls + "-status-default", {
    backgroundColor: token.colorTextPlaceholder
  }), _defineProperty(_extends4, componentCls + "-status-error", {
    backgroundColor: token.colorError
  }), _defineProperty(_extends4, componentCls + "-status-warning", {
    backgroundColor: token.colorWarning
  }), _extends4), statusPreset), _defineProperty({}, componentCls + "-status-text", {
    marginInlineStart: marginXS,
    color: token.colorText,
    fontSize: token.fontSize
  }))), _defineProperty(_extends6, componentCls + "-zoom-appear, " + componentCls + "-zoom-enter", {
    animationName: antZoomBadgeIn,
    animationDuration: token.motionDurationSlow,
    animationTimingFunction: token.motionEaseOutBack,
    animationFillMode: 'both'
  }), _defineProperty(_extends6, componentCls + "-zoom-leave", {
    animationName: antZoomBadgeOut,
    animationDuration: token.motionDurationSlow,
    animationTimingFunction: token.motionEaseOutBack,
    animationFillMode: 'both'
  }), _defineProperty(_extends6, "&" + componentCls + "-not-a-wrapper", (_ref2 = {}, _defineProperty(_ref2, componentCls + "-zoom-appear, " + componentCls + "-zoom-enter", {
    animationName: antNoWrapperZoomBadgeIn,
    animationDuration: token.motionDurationSlow,
    animationTimingFunction: token.motionEaseOutBack
  }), _defineProperty(_ref2, componentCls + "-zoom-leave", {
    animationName: antNoWrapperZoomBadgeOut,
    animationDuration: token.motionDurationSlow,
    animationTimingFunction: token.motionEaseOutBack
  }), _defineProperty(_ref2, "&:not(" + componentCls + "-status)", {
    verticalAlign: 'middle'
  }), _defineProperty(_ref2, numberPrefixCls + "-custom-component, " + componentCls + "-count", {
    transform: 'none'
  }), _defineProperty(_ref2, numberPrefixCls + "-custom-component, " + numberPrefixCls, {
    position: 'relative',
    top: 'auto',
    display: 'block',
    transformOrigin: '50% 50%'
  }), _ref2)), _defineProperty(_extends6, "" + numberPrefixCls, (_ref4 = {
    overflow: 'hidden',
    direction: 'ltr'
  }, _defineProperty(_ref4, numberPrefixCls + "-only", _defineProperty({
    position: 'relative',
    display: 'inline-block',
    height: token.badgeHeight,
    transition: "all " + token.motionDurationSlow + " " + token.motionEaseOutBack,
    WebkitTransformStyle: 'preserve-3d',
    WebkitBackfaceVisibility: 'hidden'
  }, "> p" + numberPrefixCls + "-only-unit", {
    height: token.badgeHeight,
    margin: 0,
    WebkitTransformStyle: 'preserve-3d',
    WebkitBackfaceVisibility: 'hidden'
  })), _defineProperty(_ref4, numberPrefixCls + "-symbol", {
    verticalAlign: 'top'
  }), _ref4)), _defineProperty(_extends6, '&-rtl', _defineProperty({
    direction: 'rtl'
  }, componentCls + "-count, " + componentCls + "-dot, " + numberPrefixCls + "-custom-component", {
    insetInlineEnd: 'auto'
  })), _extends6))), _defineProperty(_ref7, "" + ribbonWrapperPrefixCls, {
    position: 'relative'
  }), _defineProperty(_ref7, "" + ribbonPrefixCls, _extends(_extends(_extends(_extends({}, resetComponent(token)), (_extends7 = {
    position: 'absolute',
    top: marginXS,
    height: badgeFontHeight,
    padding: "0 " + token.paddingXS + "px",
    color: token.colorPrimary,
    lineHeight: badgeFontHeight + "px",
    whiteSpace: 'nowrap',
    backgroundColor: token.colorPrimary,
    borderRadius: token.borderRadiusSM
  }, _defineProperty(_extends7, ribbonPrefixCls + "-text", {
    color: token.colorTextLightSolid
  }), _defineProperty(_extends7, ribbonPrefixCls + "-corner", {
    position: 'absolute',
    top: '100%',
    width: badgeRibbonOffset,
    height: badgeRibbonOffset,
    color: 'currentcolor',
    border: badgeRibbonOffset / 2 + "px solid",
    transform: token.badgeRibbonCornerTransform,
    transformOrigin: 'top',
    filter: token.badgeRibbonCornerFilter
  }), _extends7)), statusRibbonPreset), (_extends8 = {}, _defineProperty(_extends8, "&" + ribbonPrefixCls + "-placement-end", _defineProperty({
    insetInlineEnd: -badgeRibbonOffset,
    borderEndEndRadius: 0
  }, ribbonPrefixCls + "-corner", {
    insetInlineEnd: 0,
    borderInlineEndColor: 'transparent',
    borderBlockEndColor: 'transparent'
  })), _defineProperty(_extends8, "&" + ribbonPrefixCls + "-placement-start", _defineProperty({
    insetInlineStart: -badgeRibbonOffset,
    borderEndStartRadius: 0
  }, ribbonPrefixCls + "-corner", {
    insetInlineStart: 0,
    borderBlockEndColor: 'transparent',
    borderInlineStartColor: 'transparent'
  })), _defineProperty(_extends8, '&-rtl', {
    direction: 'rtl'
  }), _extends8))), _ref7;
};
// ============================== Export ==============================
export default genComponentStyleHook('Badge', function (token) {
  var fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    fontSizeSM = token.fontSizeSM,
    lineWidth = token.lineWidth,
    marginXS = token.marginXS,
    colorBorderBg = token.colorBorderBg;
  var badgeFontHeight = Math.round(fontSize * lineHeight);
  var badgeShadowSize = lineWidth;
  var badgeZIndex = 'auto';
  var badgeHeight = badgeFontHeight - 2 * badgeShadowSize;
  var badgeTextColor = token.colorBgContainer;
  var badgeFontWeight = 'normal';
  var badgeFontSize = fontSizeSM;
  var badgeColor = token.colorError;
  var badgeColorHover = token.colorErrorHover;
  var badgeHeightSm = fontSize;
  var badgeDotSize = fontSizeSM / 2;
  var badgeFontSizeSm = fontSizeSM;
  var badgeStatusSize = fontSizeSM / 2;
  var badgeToken = mergeToken(token, {
    badgeFontHeight: badgeFontHeight,
    badgeShadowSize: badgeShadowSize,
    badgeZIndex: badgeZIndex,
    badgeHeight: badgeHeight,
    badgeTextColor: badgeTextColor,
    badgeFontWeight: badgeFontWeight,
    badgeFontSize: badgeFontSize,
    badgeColor: badgeColor,
    badgeColorHover: badgeColorHover,
    badgeShadowColor: colorBorderBg,
    badgeHeightSm: badgeHeightSm,
    badgeDotSize: badgeDotSize,
    badgeFontSizeSm: badgeFontSizeSm,
    badgeStatusSize: badgeStatusSize,
    badgeProcessingDuration: '1.2s',
    badgeRibbonOffset: marginXS,
    // Follow token just by Design. Not related with token
    badgeRibbonCornerTransform: 'scaleY(0.75)',
    badgeRibbonCornerFilter: "brightness(75%)"
  });
  return [genSharedBadgeStyle(badgeToken)];
});