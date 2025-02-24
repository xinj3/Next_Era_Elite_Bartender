import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { textEllipsis } from '../../style';
var getVerticalInlineStyle = function getVerticalInlineStyle(token) {
  var _ref;
  var componentCls = token.componentCls,
    menuItemHeight = token.menuItemHeight,
    itemMarginInline = token.itemMarginInline,
    padding = token.padding,
    menuArrowSize = token.menuArrowSize,
    fontSize = token.fontSize,
    marginXXS = token.marginXXS;
  var paddingWithArrow = menuArrowSize + fontSize;
  return _ref = {}, _defineProperty(_ref, componentCls + "-item", {
    position: 'relative'
  }), _defineProperty(_ref, componentCls + "-item, " + componentCls + "-submenu-title", {
    height: menuItemHeight,
    lineHeight: menuItemHeight + "px",
    paddingInline: padding,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginInline: itemMarginInline,
    marginBlock: marginXXS,
    width: "calc(100% - " + itemMarginInline * 2 + "px)"
  }), _defineProperty(_ref, componentCls + "-submenu", {
    paddingBottom: 0.02
  }), _defineProperty(_ref, "> " + componentCls + "-item,\n            > " + componentCls + "-submenu > " + componentCls + "-submenu-title", {
    height: menuItemHeight,
    lineHeight: menuItemHeight + "px"
  }), _defineProperty(_ref, componentCls + "-item-group-list " + componentCls + "-submenu-title,\n            " + componentCls + "-submenu-title", {
    paddingInlineEnd: paddingWithArrow
  }), _ref;
};
var getVerticalStyle = function getVerticalStyle(token) {
  var _ref3, _ref5, _ref7, _ref8, _ref12, _tooltip, _ref13;
  var componentCls = token.componentCls,
    iconCls = token.iconCls,
    menuItemHeight = token.menuItemHeight,
    colorTextLightSolid = token.colorTextLightSolid,
    dropdownWidth = token.dropdownWidth,
    controlHeightLG = token.controlHeightLG,
    motionDurationMid = token.motionDurationMid,
    motionEaseOut = token.motionEaseOut,
    paddingXL = token.paddingXL,
    fontSizeSM = token.fontSizeSM,
    fontSizeLG = token.fontSizeLG,
    motionDurationSlow = token.motionDurationSlow,
    paddingXS = token.paddingXS,
    boxShadowSecondary = token.boxShadowSecondary;
  var inlineItemStyle = {
    height: menuItemHeight,
    lineHeight: menuItemHeight + "px",
    listStylePosition: 'inside',
    listStyleType: 'disc'
  };
  return [(_ref3 = {}, _defineProperty(_ref3, componentCls, _defineProperty({}, "&-inline, &-vertical", _extends(_defineProperty({}, "&" + componentCls + "-root", {
    boxShadow: 'none'
  }), getVerticalInlineStyle(token)))), _defineProperty(_ref3, componentCls + "-submenu-popup", _defineProperty({}, componentCls + "-vertical", _extends(_extends({}, getVerticalInlineStyle(token)), {
    boxShadow: boxShadowSecondary
  }))), _ref3), // Vertical only
  _defineProperty({}, componentCls + "-submenu-popup " + componentCls + "-vertical" + componentCls + "-sub", {
    minWidth: dropdownWidth,
    maxHeight: "calc(100vh - " + controlHeightLG * 2.5 + "px)",
    padding: '0',
    overflow: 'hidden',
    borderInlineEnd: 0,
    // https://github.com/ant-design/ant-design/issues/22244
    // https://github.com/ant-design/ant-design/issues/26812
    "&:not([class*='-active'])": {
      overflowX: 'hidden',
      overflowY: 'auto'
    }
  }), // Inline Only
  _defineProperty({}, componentCls + "-inline", (_ref8 = {
    width: '100%'
  }, _defineProperty(_ref8, "&" + componentCls + "-root", _defineProperty({}, componentCls + "-item, " + componentCls + "-submenu-title", (_ref5 = {
    display: 'flex',
    alignItems: 'center',
    transition: ["border-color " + motionDurationSlow, "background " + motionDurationSlow, "padding " + motionDurationMid + " " + motionEaseOut]
  }, _defineProperty(_ref5, "> " + componentCls + "-title-content", {
    flex: 'auto',
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }), _defineProperty(_ref5, '> *', {
    flex: 'none'
  }), _ref5))), _defineProperty(_ref8, componentCls + "-sub" + componentCls + "-inline", (_ref7 = {
    padding: 0,
    border: 0,
    borderRadius: 0,
    boxShadow: 'none'
  }, _defineProperty(_ref7, "& > " + componentCls + "-submenu > " + componentCls + "-submenu-title", inlineItemStyle), _defineProperty(_ref7, "& " + componentCls + "-item-group-title", {
    paddingInlineStart: paddingXL
  }), _ref7)), _defineProperty(_ref8, componentCls + "-item", inlineItemStyle), _ref8)), // Inline Collapse Only
  _defineProperty({}, componentCls + "-inline-collapsed", (_ref13 = {
    width: menuItemHeight * 2
  }, _defineProperty(_ref13, "&" + componentCls + "-root", _defineProperty({}, componentCls + "-item, " + componentCls + "-submenu " + componentCls + "-submenu-title", _defineProperty({}, "> " + componentCls + "-inline-collapsed-noicon", {
    fontSize: fontSizeLG,
    textAlign: 'center'
  }))), _defineProperty(_ref13, "> " + componentCls + "-item,\n          > " + componentCls + "-item-group > " + componentCls + "-item-group-list > " + componentCls + "-item,\n          > " + componentCls + "-item-group > " + componentCls + "-item-group-list > " + componentCls + "-submenu > " + componentCls + "-submenu-title,\n          > " + componentCls + "-submenu > " + componentCls + "-submenu-title", (_ref12 = {
    insetInlineStart: 0,
    paddingInline: "calc(50% - " + fontSizeSM + "px)",
    textOverflow: 'clip'
  }, _defineProperty(_ref12, componentCls + "-submenu-arrow", {
    opacity: 0
  }), _defineProperty(_ref12, componentCls + "-item-icon, " + iconCls, {
    margin: 0,
    fontSize: fontSizeLG,
    lineHeight: menuItemHeight + "px",
    '+ span': {
      display: 'inline-block',
      opacity: 0
    }
  }), _ref12)), _defineProperty(_ref13, componentCls + "-item-icon, " + iconCls, {
    display: 'inline-block'
  }), _defineProperty(_ref13, '&-tooltip', (_tooltip = {
    pointerEvents: 'none'
  }, _defineProperty(_tooltip, componentCls + "-item-icon, " + iconCls, {
    display: 'none'
  }), _defineProperty(_tooltip, 'a, a:hover', {
    color: colorTextLightSolid
  }), _tooltip)), _defineProperty(_ref13, componentCls + "-item-group-title", _extends(_extends({}, textEllipsis), {
    paddingInline: paddingXS
  })), _ref13))];
};
export default getVerticalStyle;