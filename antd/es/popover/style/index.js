import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { initZoomMotion } from '../../style/motion';
import { genComponentStyleHook, mergeToken, PresetColors } from '../../theme/internal';
import { resetComponent } from '../../style';
import getArrowStyle from '../../style/placementArrow';
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
  return [_defineProperty({}, componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
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
  }, _defineProperty(_extends2, componentCls + "-content", {
    position: 'relative'
  }), _defineProperty(_extends2, componentCls + "-inner", {
    backgroundColor: popoverBg,
    backgroundClip: 'padding-box',
    borderRadius: borderRadius,
    boxShadow: boxShadowSecondary,
    padding: popoverPadding
  }), _defineProperty(_extends2, componentCls + "-title", {
    minWidth: width,
    marginBottom: marginXS,
    color: colorTextHeading,
    fontWeight: fontWeightStrong
  }), _defineProperty(_extends2, componentCls + "-inner-content", {
    color: popoverColor
  }), _extends2))),
  // Arrow Style
  getArrowStyle(token, {
    colorBg: token.colorBgElevated
  }), // Pure Render
  _defineProperty({}, componentCls + "-pure", _defineProperty({
    position: 'relative',
    maxWidth: 'none'
  }, componentCls + "-content", {
    display: 'inline-block'
  }))];
};
var genColorStyle = function genColorStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls, PresetColors.map(function (colorKey) {
    var _ref4;
    var lightColor = token[colorKey + "-6"];
    return _defineProperty({}, "&" + componentCls + "-" + colorKey, (_ref4 = {}, _defineProperty(_ref4, componentCls + "-inner", {
      backgroundColor: lightColor
    }), _defineProperty(_ref4, componentCls + "-arrow", {
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
  return _defineProperty({}, componentCls, (_componentCls = {}, _defineProperty(_componentCls, componentCls + "-inner", {
    padding: 0
  }), _defineProperty(_componentCls, componentCls + "-title", {
    margin: 0,
    padding: popoverTitlePaddingBlockTop + "px " + popoverPaddingHorizontal + "px " + popoverTitlePaddingBlockBottom + "px",
    borderBottom: lineWidth + "px " + lineType + " " + colorSplit
  }), _defineProperty(_componentCls, componentCls + "-inner-content", {
    padding: paddingSM + "px " + popoverPaddingHorizontal + "px"
  }), _componentCls));
};
export default genComponentStyleHook('Popover', function (token) {
  var colorBgElevated = token.colorBgElevated,
    colorText = token.colorText,
    wireframe = token.wireframe;
  var popoverToken = mergeToken(token, {
    popoverBg: colorBgElevated,
    popoverColor: colorText,
    popoverPadding: 12 // Fixed Value
  });

  return [genBaseStyle(popoverToken), genColorStyle(popoverToken), wireframe && genWireframeStyle(popoverToken), initZoomMotion(popoverToken, 'zoom-big')];
}, function (_ref8) {
  var zIndexPopupBase = _ref8.zIndexPopupBase;
  return {
    zIndexPopup: zIndexPopupBase + 30,
    width: 177
  };
});