import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { genFocusOutline } from '../../style';
var accessibilityFocus = function accessibilityFocus(token) {
  return _extends({}, genFocusOutline(token));
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
  return _defineProperty({}, componentCls + "-" + themeSuffix, (_ref13 = {
    color: colorItemText,
    background: colorItemBg
  }, _defineProperty(_ref13, "&" + componentCls + "-root:focus-visible", _extends({}, accessibilityFocus(token))), _defineProperty(_ref13, componentCls + "-item-group-title", {
    color: colorGroupTitle
  }), _defineProperty(_ref13, componentCls + "-submenu-selected", _defineProperty({}, "> " + componentCls + "-submenu-title", {
    color: colorItemTextSelected
  })), _defineProperty(_ref13, componentCls + "-item-disabled, " + componentCls + "-submenu-disabled", {
    color: colorItemTextDisabled + " !important"
  }), _defineProperty(_ref13, componentCls + "-item:hover, " + componentCls + "-submenu-title:hover", _defineProperty({}, "&:not(" + componentCls + "-item-selected):not(" + componentCls + "-submenu-selected)", {
    color: colorItemTextHover
  })), _defineProperty(_ref13, "&:not(" + componentCls + "-horizontal)", (_ref3 = {}, _defineProperty(_ref3, componentCls + "-item:not(" + componentCls + "-item-selected)", {
    '&:hover': {
      backgroundColor: colorItemBgHover
    },
    '&:active': {
      backgroundColor: colorItemBgSelected
    }
  }), _defineProperty(_ref3, componentCls + "-submenu-title", {
    '&:hover': {
      backgroundColor: colorItemBgHover
    },
    '&:active': {
      backgroundColor: colorItemBgSelected
    }
  }), _ref3)), _defineProperty(_ref13, componentCls + "-item-danger", (_ref5 = {
    color: colorDangerItemText
  }, _defineProperty(_ref5, "&" + componentCls + "-item:hover", _defineProperty({}, "&:not(" + componentCls + "-item-selected):not(" + componentCls + "-submenu-selected)", {
    color: colorDangerItemTextHover
  })), _defineProperty(_ref5, "&" + componentCls + "-item:active", {
    background: colorDangerItemBgActive
  }), _ref5)), _defineProperty(_ref13, componentCls + "-item a", {
    '&, &:hover': {
      color: 'inherit'
    }
  }), _defineProperty(_ref13, componentCls + "-item-selected", (_ref6 = {
    color: colorItemTextSelected
  }, _defineProperty(_ref6, "&" + componentCls + "-item-danger", {
    color: colorDangerItemTextSelected
  }), _defineProperty(_ref6, "a, a:hover", {
    color: 'inherit'
  }), _ref6)), _defineProperty(_ref13, "&:not(" + componentCls + "-horizontal) " + componentCls + "-item-selected", _defineProperty({
    backgroundColor: colorItemBgSelected
  }, "&" + componentCls + "-item-danger", {
    backgroundColor: colorDangerItemBgSelected
  })), _defineProperty(_ref13, componentCls + "-item, " + componentCls + "-submenu-title", _defineProperty({}, "&:not(" + componentCls + "-item-disabled):focus-visible", _extends({}, accessibilityFocus(token)))), _defineProperty(_ref13, "&" + componentCls + "-submenu > " + componentCls, {
    backgroundColor: menuSubMenuBg
  }), _defineProperty(_ref13, "&" + componentCls + "-popup > " + componentCls, {
    backgroundColor: colorItemBg
  }), _defineProperty(_ref13, "&" + componentCls + "-horizontal", _extends(_extends({}, themeSuffix === 'dark' ? {
    borderBottom: 0
  } : {}), _defineProperty({}, "> " + componentCls + "-item, > " + componentCls + "-submenu", (_ref9 = {
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
  }, _defineProperty(_ref9, "&:hover, &-active, &-open", {
    color: colorItemTextSelectedHorizontal,
    '&::after': {
      borderWidth: colorActiveBarHeight + "px",
      borderBottomColor: colorItemTextSelectedHorizontal
    }
  }), _defineProperty(_ref9, "&-selected", {
    color: colorItemTextSelectedHorizontal,
    backgroundColor: colorItemBgSelectedHorizontal,
    '&::after': {
      borderWidth: colorActiveBarHeight + "px",
      borderBottomColor: colorItemTextSelectedHorizontal
    }
  }), _ref9)))), _defineProperty(_ref13, "&" + componentCls + "-root", _defineProperty({}, "&" + componentCls + "-inline, &" + componentCls + "-vertical", {
    borderInlineEnd: colorActiveBarBorderSize + "px " + lineType + " " + colorSplit
  })), _defineProperty(_ref13, "&" + componentCls + "-inline", (_ref12 = {}, _defineProperty(_ref12, componentCls + "-sub" + componentCls + "-inline", {
    background: colorSubItemBg
  }), _defineProperty(_ref12, componentCls + "-item, " + componentCls + "-submenu-title", colorActiveBarBorderSize && colorActiveBarWidth ? {
    width: "calc(100% + " + colorActiveBarBorderSize + "px)"
  } : {}), _defineProperty(_ref12, componentCls + "-item", _defineProperty({
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
  })), _defineProperty(_ref12, componentCls + "-selected, " + componentCls + "-item-selected", {
    '&::after': {
      transform: 'scaleY(1)',
      opacity: 1,
      transition: ["transform " + motionDurationMid + " " + motionEaseInOut, "opacity " + motionDurationMid + " " + motionEaseInOut].join(',')
    }
  }), _ref12)), _ref13));
};
export default getThemeStyle;