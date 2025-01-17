"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _style = require("../../style");
var accessibilityFocus = function accessibilityFocus(token) {
  return (0, _extends3["default"])({}, (0, _style.genFocusOutline)(token));
};
var getThemeStyle = function getThemeStyle(token, themeSuffix) {
  var _ref3, _ref5, _ref6, _ref9, _ref12, _ref13;
  var componentCls = token.componentCls,
    colorItemText = token.colorItemText,
    colorItemTextSelected = token.colorItemTextSelected,
    colorItemTextSelectedHorizontal = token.colorItemTextSelectedHorizontal,
    colorGroupTitle = token.colorGroupTitle,
    colorItemBg = token.colorItemBg,
    colorSubItemBg = token.colorSubItemBg,
    colorItemBgSelectedHorizontal = token.colorItemBgSelectedHorizontal,
    colorItemBgSelected = token.colorItemBgSelected,
    colorActiveBarHeight = token.colorActiveBarHeight,
    colorActiveBarWidth = token.colorActiveBarWidth,
    colorActiveBarBorderSize = token.colorActiveBarBorderSize,
    motionDurationSlow = token.motionDurationSlow,
    motionEaseInOut = token.motionEaseInOut,
    motionEaseOut = token.motionEaseOut,
    menuItemPaddingInline = token.menuItemPaddingInline,
    motionDurationMid = token.motionDurationMid,
    colorItemTextHover = token.colorItemTextHover,
    lineType = token.lineType,
    colorSplit = token.colorSplit,
    colorItemTextDisabled = token.colorItemTextDisabled,
    colorDangerItemText = token.colorDangerItemText,
    colorDangerItemTextHover = token.colorDangerItemTextHover,
    colorDangerItemTextSelected = token.colorDangerItemTextSelected,
    colorDangerItemBgActive = token.colorDangerItemBgActive,
    colorDangerItemBgSelected = token.colorDangerItemBgSelected,
    colorItemBgHover = token.colorItemBgHover,
    menuSubMenuBg = token.menuSubMenuBg;
  return (0, _defineProperty2["default"])({}, componentCls + "-" + themeSuffix, (_ref13 = {
    color: colorItemText,
    background: colorItemBg
  }, (0, _defineProperty2["default"])(_ref13, "&" + componentCls + "-root:focus-visible", (0, _extends3["default"])({}, accessibilityFocus(token))), (0, _defineProperty2["default"])(_ref13, componentCls + "-item-group-title", {
    color: colorGroupTitle
  }), (0, _defineProperty2["default"])(_ref13, componentCls + "-submenu-selected", (0, _defineProperty2["default"])({}, "> " + componentCls + "-submenu-title", {
    color: colorItemTextSelected
  })), (0, _defineProperty2["default"])(_ref13, componentCls + "-item-disabled, " + componentCls + "-submenu-disabled", {
    color: colorItemTextDisabled + " !important"
  }), (0, _defineProperty2["default"])(_ref13, componentCls + "-item:hover, " + componentCls + "-submenu-title:hover", (0, _defineProperty2["default"])({}, "&:not(" + componentCls + "-item-selected):not(" + componentCls + "-submenu-selected)", {
    color: colorItemTextHover
  })), (0, _defineProperty2["default"])(_ref13, "&:not(" + componentCls + "-horizontal)", (_ref3 = {}, (0, _defineProperty2["default"])(_ref3, componentCls + "-item:not(" + componentCls + "-item-selected)", {
    '&:hover': {
      backgroundColor: colorItemBgHover
    },
    '&:active': {
      backgroundColor: colorItemBgSelected
    }
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-submenu-title", {
    '&:hover': {
      backgroundColor: colorItemBgHover
    },
    '&:active': {
      backgroundColor: colorItemBgSelected
    }
  }), _ref3)), (0, _defineProperty2["default"])(_ref13, componentCls + "-item-danger", (_ref5 = {
    color: colorDangerItemText
  }, (0, _defineProperty2["default"])(_ref5, "&" + componentCls + "-item:hover", (0, _defineProperty2["default"])({}, "&:not(" + componentCls + "-item-selected):not(" + componentCls + "-submenu-selected)", {
    color: colorDangerItemTextHover
  })), (0, _defineProperty2["default"])(_ref5, "&" + componentCls + "-item:active", {
    background: colorDangerItemBgActive
  }), _ref5)), (0, _defineProperty2["default"])(_ref13, componentCls + "-item a", {
    '&, &:hover': {
      color: 'inherit'
    }
  }), (0, _defineProperty2["default"])(_ref13, componentCls + "-item-selected", (_ref6 = {
    color: colorItemTextSelected
  }, (0, _defineProperty2["default"])(_ref6, "&" + componentCls + "-item-danger", {
    color: colorDangerItemTextSelected
  }), (0, _defineProperty2["default"])(_ref6, "a, a:hover", {
    color: 'inherit'
  }), _ref6)), (0, _defineProperty2["default"])(_ref13, "&:not(" + componentCls + "-horizontal) " + componentCls + "-item-selected", (0, _defineProperty2["default"])({
    backgroundColor: colorItemBgSelected
  }, "&" + componentCls + "-item-danger", {
    backgroundColor: colorDangerItemBgSelected
  })), (0, _defineProperty2["default"])(_ref13, componentCls + "-item, " + componentCls + "-submenu-title", (0, _defineProperty2["default"])({}, "&:not(" + componentCls + "-item-disabled):focus-visible", (0, _extends3["default"])({}, accessibilityFocus(token)))), (0, _defineProperty2["default"])(_ref13, "&" + componentCls + "-submenu > " + componentCls, {
    backgroundColor: menuSubMenuBg
  }), (0, _defineProperty2["default"])(_ref13, "&" + componentCls + "-popup > " + componentCls, {
    backgroundColor: colorItemBg
  }), (0, _defineProperty2["default"])(_ref13, "&" + componentCls + "-horizontal", (0, _extends3["default"])((0, _extends3["default"])({}, themeSuffix === 'dark' ? {
    borderBottom: 0
  } : {}), (0, _defineProperty2["default"])({}, "> " + componentCls + "-item, > " + componentCls + "-submenu", (_ref9 = {
    top: colorActiveBarBorderSize,
    marginTop: -colorActiveBarBorderSize,
    marginBottom: 0,
    borderRadius: token.radiusItem,
    '&::after': {
      position: 'absolute',
      insetInline: menuItemPaddingInline,
      bottom: 0,
      borderBottom: colorActiveBarHeight + "px solid transparent",
      transition: "border-color " + motionDurationSlow + " " + motionEaseInOut,
      content: '""'
    }
  }, (0, _defineProperty2["default"])(_ref9, "&:hover, &-active, &-open", {
    color: colorItemTextSelectedHorizontal,
    '&::after': {
      borderWidth: colorActiveBarHeight + "px",
      borderBottomColor: colorItemTextSelectedHorizontal
    }
  }), (0, _defineProperty2["default"])(_ref9, "&-selected", {
    color: colorItemTextSelectedHorizontal,
    backgroundColor: colorItemBgSelectedHorizontal,
    '&::after': {
      borderWidth: colorActiveBarHeight + "px",
      borderBottomColor: colorItemTextSelectedHorizontal
    }
  }), _ref9)))), (0, _defineProperty2["default"])(_ref13, "&" + componentCls + "-root", (0, _defineProperty2["default"])({}, "&" + componentCls + "-inline, &" + componentCls + "-vertical", {
    borderInlineEnd: colorActiveBarBorderSize + "px " + lineType + " " + colorSplit
  })), (0, _defineProperty2["default"])(_ref13, "&" + componentCls + "-inline", (_ref12 = {}, (0, _defineProperty2["default"])(_ref12, componentCls + "-sub" + componentCls + "-inline", {
    background: colorSubItemBg
  }), (0, _defineProperty2["default"])(_ref12, componentCls + "-item, " + componentCls + "-submenu-title", colorActiveBarBorderSize && colorActiveBarWidth ? {
    width: "calc(100% + " + colorActiveBarBorderSize + "px)"
  } : {}), (0, _defineProperty2["default"])(_ref12, componentCls + "-item", (0, _defineProperty2["default"])({
    position: 'relative',
    '&::after': {
      position: 'absolute',
      insetBlock: 0,
      insetInlineEnd: 0,
      borderInlineEnd: colorActiveBarWidth + "px solid " + colorItemTextSelected,
      transform: 'scaleY(0.0001)',
      opacity: 0,
      transition: ["transform " + motionDurationMid + " " + motionEaseOut, "opacity " + motionDurationMid + " " + motionEaseOut].join(','),
      content: '""'
    }
  }, "&" + componentCls + "-item-danger", {
    '&::after': {
      borderInlineEndColor: colorDangerItemTextSelected
    }
  })), (0, _defineProperty2["default"])(_ref12, componentCls + "-selected, " + componentCls + "-item-selected", {
    '&::after': {
      transform: 'scaleY(1)',
      opacity: 1,
      transition: ["transform " + motionDurationMid + " " + motionEaseInOut, "opacity " + motionDurationMid + " " + motionEaseInOut].join(',')
    }
  }), _ref12)), _ref13));
};
var _default = getThemeStyle;
exports["default"] = _default;