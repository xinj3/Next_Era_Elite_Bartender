import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { TinyColor } from '@ctrl/tinycolor';
import { genCollapseMotion, initSlideMotion, initZoomMotion } from '../../style/motion';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import getHorizontalStyle from './horizontal';
import getRTLStyle from './rtl';
import getThemeStyle from './theme';
import getVerticalStyle from './vertical';
import { clearFix, resetComponent, resetIcon } from '../../style';
// =============================== Base ===============================
var getBaseStyle = function getBaseStyle(token) {
  var _ref4, _ref8, _ref9, _extends3;
  var antCls = token.antCls,
    componentCls = token.componentCls,
    fontSize = token.fontSize,
    motionDurationSlow = token.motionDurationSlow,
    motionDurationMid = token.motionDurationMid,
    motionEaseInOut = token.motionEaseInOut,
    motionEaseOut = token.motionEaseOut,
    lineHeight = token.lineHeight,
    paddingXS = token.paddingXS,
    padding = token.padding,
    colorSplit = token.colorSplit,
    lineWidth = token.lineWidth,
    iconCls = token.iconCls,
    zIndexPopup = token.zIndexPopup,
    borderRadius = token.borderRadius,
    borderRadiusLG = token.borderRadiusLG,
    radiusSubMenuItem = token.radiusSubMenuItem,
    menuArrowSize = token.menuArrowSize,
    controlHeightSM = token.controlHeightSM,
    menuArrowOffset = token.menuArrowOffset,
    lineType = token.lineType,
    menuPanelMaskInset = token.menuPanelMaskInset;
  return [// Misc
  _defineProperty({
    '': _defineProperty({}, "" + componentCls, _extends(_extends({}, clearFix()), _defineProperty({}, "&-hidden", {
      display: 'none'
    })))
  }, componentCls + "-submenu-hidden", {
    display: 'none'
  }), _defineProperty({}, componentCls, _extends(_extends(_extends({}, resetComponent(token)), clearFix()), (_extends3 = {
    marginBottom: 0,
    paddingInlineStart: 0,
    // Override default ul/ol
    fontSize: fontSize,
    lineHeight: 0,
    listStyle: 'none',
    outline: 'none',
    transition: ["background " + motionDurationSlow, // Magic cubic here but smooth transition
    "width " + motionDurationSlow + " cubic-bezier(0.2, 0, 0, 1) 0s"].join(',')
  }, _defineProperty(_extends3, "ul, ol", {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }), _defineProperty(_extends3, "&-overflow", _defineProperty({
    display: 'flex'
  }, componentCls + "-item", {
    flex: 'none'
  })), _defineProperty(_extends3, componentCls + "-item, " + componentCls + "-submenu, " + componentCls + "-submenu-title", {
    borderRadius: token.radiusItem
  }), _defineProperty(_extends3, componentCls + "-item-group-title", {
    padding: paddingXS + "px " + padding + "px",
    fontSize: fontSize,
    lineHeight: lineHeight,
    transition: "all " + motionDurationSlow
  }), _defineProperty(_extends3, "&-horizontal " + componentCls + "-submenu", {
    transition: ["border-color " + motionDurationSlow + " " + motionEaseInOut, "background " + motionDurationSlow + " " + motionEaseInOut].join(',')
  }), _defineProperty(_extends3, componentCls + "-submenu, " + componentCls + "-submenu-inline", {
    transition: ["border-color " + motionDurationSlow + " " + motionEaseInOut, "background " + motionDurationSlow + " " + motionEaseInOut, "padding " + motionDurationMid + " " + motionEaseInOut].join(',')
  }), _defineProperty(_extends3, componentCls + "-submenu " + componentCls + "-sub", {
    cursor: 'initial',
    transition: ["background " + motionDurationSlow + " " + motionEaseInOut, "padding " + motionDurationSlow + " " + motionEaseInOut]
  }), _defineProperty(_extends3, componentCls + "-title-content", {
    transition: "color " + motionDurationSlow
  }), _defineProperty(_extends3, componentCls + "-item a", {
    '&::before': {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'transparent',
      content: '""'
    }
  }), _defineProperty(_extends3, componentCls + "-item-divider", {
    overflow: 'hidden',
    lineHeight: 0,
    borderColor: colorSplit,
    borderStyle: lineType,
    borderTopWidth: lineWidth,
    marginBlock: lineWidth,
    padding: 0,
    '&-dashed': {
      borderStyle: 'dashed'
    }
  }), _defineProperty(_extends3, componentCls + "-item, " + componentCls + "-submenu-title", (_ref4 = {
    position: 'relative',
    display: 'block',
    margin: 0,
    // paddingInline: menuItemPaddingInline,
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    transition: ["border-color " + motionDurationSlow, "background " + motionDurationSlow, "padding " + motionDurationSlow + " " + motionEaseInOut].join(',')
  }, _defineProperty(_ref4, componentCls + "-item-icon, " + iconCls, {
    minWidth: fontSize,
    fontSize: fontSize,
    transition: ["font-size " + motionDurationMid + " " + motionEaseOut, "margin " + motionDurationSlow + " " + motionEaseInOut, "color " + motionDurationSlow].join(','),
    '+ span': {
      marginInlineStart: controlHeightSM - fontSize,
      opacity: 1,
      transition: ["opacity " + motionDurationSlow + " " + motionEaseInOut, "margin " + motionDurationSlow, "color " + motionDurationSlow].join(',')
    }
  }), _defineProperty(_ref4, componentCls + "-item-icon", _extends({}, resetIcon())), _defineProperty(_ref4, "&" + componentCls + "-item-only-child", _defineProperty({}, "> " + iconCls + ", > " + componentCls + "-item-icon", {
    marginInlineEnd: 0
  })), _ref4)), _defineProperty(_extends3, componentCls + "-item-disabled, " + componentCls + "-submenu-disabled", _defineProperty({
    background: 'none !important',
    cursor: 'not-allowed',
    '&::after': {
      borderColor: 'transparent !important'
    },
    a: {
      color: 'inherit !important'
    }
  }, "> " + componentCls + "-submenu-title", {
    color: 'inherit !important',
    cursor: 'not-allowed'
  })), _defineProperty(_extends3, componentCls + "-item-group", _defineProperty({}, componentCls + "-item-group-list", _defineProperty({
    margin: 0,
    padding: 0
  }, componentCls + "-item, " + componentCls + "-submenu-title", {
    paddingInline: fontSize * 2 + "px " + padding + "px"
  }))), _defineProperty(_extends3, '&-submenu', _defineProperty({
    '&-popup': {
      position: 'absolute',
      zIndex: zIndexPopup,
      background: 'transparent',
      borderRadius: borderRadiusLG,
      boxShadow: 'none',
      transformOrigin: '0 0',
      // https://github.com/ant-design/ant-design/issues/13955
      '&::before': {
        position: 'absolute',
        inset: menuPanelMaskInset + "px 0 0",
        zIndex: -1,
        width: '100%',
        height: '100%',
        opacity: 0,
        content: '""'
      }
    },
    // https://github.com/ant-design/ant-design/issues/13955
    '&-placement-rightTop::before': {
      top: 0,
      insetInlineStart: menuPanelMaskInset
    }
  }, "> " + componentCls, (_ref8 = {
    borderRadius: borderRadiusLG
  }, _defineProperty(_ref8, "> " + componentCls + "-item", {
    borderRadius: radiusSubMenuItem
  }), _defineProperty(_ref8, componentCls + "-submenu-title::after", {
    transition: "transform " + motionDurationSlow + " " + motionEaseInOut
  }), _ref8))), _defineProperty(_extends3, componentCls + "-submenu", (_ref9 = {}, _defineProperty(_ref9, "&-expand-icon, &-arrow", {
    position: 'absolute',
    top: '50%',
    insetInlineEnd: token.margin,
    width: menuArrowSize,
    color: 'currentcolor',
    transform: 'translateY(-50%)',
    transition: "transform " + motionDurationSlow + " " + motionEaseInOut
  }), _defineProperty(_ref9, '&-arrow', {
    // →
    '&::before, &::after': {
      position: 'absolute',
      width: menuArrowSize * 0.6,
      height: menuArrowSize * 0.15,
      backgroundColor: 'currentcolor',
      borderRadius: borderRadius,
      transition: ["background " + motionDurationSlow + " " + motionEaseInOut, "transform " + motionDurationSlow + " " + motionEaseInOut, "top " + motionDurationSlow + " " + motionEaseInOut, "color " + motionDurationSlow + " " + motionEaseInOut].join(','),
      content: '""'
    },
    '&::before': {
      transform: "rotate(45deg) translateY(-" + menuArrowOffset + ")"
    },
    '&::after': {
      transform: "rotate(-45deg) translateY(" + menuArrowOffset + ")"
    }
  }), _ref9)), _defineProperty(_extends3, "&-inline-collapsed " + componentCls + "-submenu-arrow,\n        &-inline " + componentCls + "-submenu-arrow", {
    // ↓
    '&::before': {
      transform: "rotate(-45deg) translateX(" + menuArrowOffset + ")"
    },
    '&::after': {
      transform: "rotate(45deg) translateX(-" + menuArrowOffset + ")"
    }
  }), _defineProperty(_extends3, componentCls + "-submenu-open" + componentCls + "-submenu-inline > " + componentCls + "-submenu-title > " + componentCls + "-submenu-arrow", {
    // ↑
    transform: "translateY(-" + menuArrowSize * 0.2 + "px)",
    '&::after': {
      transform: "rotate(-45deg) translateX(-" + menuArrowOffset + ")"
    },
    '&::before': {
      transform: "rotate(45deg) translateX(" + menuArrowOffset + ")"
    }
  }), _extends3))), // Integration with header element so menu items have the same height
  _defineProperty({}, antCls + "-layout-header", _defineProperty({}, componentCls, {
    lineHeight: 'inherit'
  }))];
};
// ============================== Export ==============================
export default (function (prefixCls, injectStyle) {
  var useOriginHook = genComponentStyleHook('Menu', function (token, _ref13) {
    var overrideComponentToken = _ref13.overrideComponentToken;
    // Dropdown will handle menu style self. We do not need to handle this.
    if (injectStyle === false) {
      return [];
    }
    var colorBgElevated = token.colorBgElevated,
      colorPrimary = token.colorPrimary,
      colorError = token.colorError,
      colorErrorHover = token.colorErrorHover,
      colorTextLightSolid = token.colorTextLightSolid,
      colorTextSecondary = token.colorTextSecondary;
    var controlHeightLG = token.controlHeightLG,
      fontSize = token.fontSize;
    var menuArrowSize = fontSize / 7 * 5;
    // Menu Token
    var menuToken = mergeToken(token, {
      menuItemHeight: controlHeightLG,
      menuItemPaddingInline: token.margin,
      menuArrowSize: menuArrowSize,
      menuHorizontalHeight: controlHeightLG * 1.15,
      menuArrowOffset: menuArrowSize * 0.25 + "px",
      menuPanelMaskInset: -7,
      menuSubMenuBg: colorBgElevated
    });
    var menuDarkToken = mergeToken(menuToken, {
      colorItemText: new TinyColor(colorTextLightSolid).setAlpha(0.65).toRgbString(),
      colorItemTextHover: colorTextLightSolid,
      colorGroupTitle: colorTextSecondary,
      colorItemTextSelected: colorTextLightSolid,
      colorItemBg: '#001529',
      colorSubItemBg: '#000c17',
      colorItemBgActive: 'transparent',
      colorItemBgSelected: colorPrimary,
      colorActiveBarWidth: 0,
      colorActiveBarHeight: 0,
      colorActiveBarBorderSize: 0,
      // Disabled
      colorItemTextDisabled: new TinyColor(colorTextLightSolid).setAlpha(0.25).toRgbString(),
      // Danger
      colorDangerItemText: colorError,
      colorDangerItemTextHover: colorErrorHover,
      colorDangerItemTextSelected: colorTextLightSolid,
      colorDangerItemBgActive: colorError,
      colorDangerItemBgSelected: colorError,
      menuSubMenuBg: '#001529'
    }, _extends({}, overrideComponentToken));
    return [
    // Basic
    getBaseStyle(menuToken),
    // Horizontal
    getHorizontalStyle(menuToken),
    // Vertical
    getVerticalStyle(menuToken),
    // Theme
    getThemeStyle(menuToken, 'light'), getThemeStyle(menuDarkToken, 'dark'),
    // RTL
    getRTLStyle(menuToken),
    // Motion
    genCollapseMotion(menuToken), initSlideMotion(menuToken, 'slide-up'), initSlideMotion(menuToken, 'slide-down'), initZoomMotion(menuToken, 'zoom-big')];
  }, function (token) {
    var colorPrimary = token.colorPrimary,
      colorError = token.colorError,
      colorTextDisabled = token.colorTextDisabled,
      colorErrorBg = token.colorErrorBg,
      colorText = token.colorText,
      colorTextDescription = token.colorTextDescription,
      colorBgContainer = token.colorBgContainer,
      colorFillAlter = token.colorFillAlter,
      colorFillContent = token.colorFillContent,
      lineWidth = token.lineWidth,
      lineWidthBold = token.lineWidthBold,
      controlItemBgActiveHover = token.controlItemBgActiveHover,
      colorBgTextHover = token.colorBgTextHover;
    return {
      dropdownWidth: 160,
      zIndexPopup: token.zIndexPopupBase + 50,
      radiusItem: token.borderRadiusLG,
      radiusSubMenuItem: token.borderRadiusSM,
      colorItemText: colorText,
      colorItemTextHover: colorText,
      colorItemTextHoverHorizontal: colorPrimary,
      colorGroupTitle: colorTextDescription,
      colorItemTextSelected: colorText,
      colorItemTextSelectedHorizontal: colorPrimary,
      colorItemBg: colorBgContainer,
      colorItemBgHover: colorBgTextHover,
      colorItemBgActive: colorFillContent,
      colorSubItemBg: colorFillAlter,
      colorItemBgSelected: controlItemBgActiveHover,
      colorItemBgSelectedHorizontal: 'transparent',
      colorActiveBarWidth: 0,
      colorActiveBarHeight: lineWidthBold,
      colorActiveBarBorderSize: lineWidth,
      // Disabled
      colorItemTextDisabled: colorTextDisabled,
      // Danger
      colorDangerItemText: colorError,
      colorDangerItemTextHover: colorError,
      colorDangerItemTextSelected: colorError,
      colorDangerItemBgActive: colorErrorBg,
      colorDangerItemBgSelected: colorErrorBg,
      itemMarginInline: token.marginXXS
    };
  });
  return useOriginHook(prefixCls);
});