"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends6 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _placementArrow = require("../../style/placementArrow");
var _motion = require("../../style/motion");
var _internal = require("../../theme/internal");
var _button = _interopRequireDefault(require("./button"));
var _status = _interopRequireDefault(require("./status"));
var _style = require("../../style");
// =============================== Base ===============================
var genBaseStyle = function genBaseStyle(token) {
  var _ref, _extends2, _extends5, _ref7;
  var componentCls = token.componentCls,
    menuCls = token.menuCls,
    zIndexPopup = token.zIndexPopup,
    dropdownArrowDistance = token.dropdownArrowDistance,
    dropdownArrowOffset = token.dropdownArrowOffset,
    sizePopupArrow = token.sizePopupArrow,
    antCls = token.antCls,
    iconCls = token.iconCls,
    motionDurationMid = token.motionDurationMid,
    dropdownPaddingVertical = token.dropdownPaddingVertical,
    fontSize = token.fontSize,
    dropdownEdgeChildPadding = token.dropdownEdgeChildPadding,
    borderRadius = token.borderRadius,
    colorTextDisabled = token.colorTextDisabled,
    fontSizeIcon = token.fontSizeIcon,
    controlPaddingHorizontal = token.controlPaddingHorizontal,
    colorBgElevated = token.colorBgElevated,
    boxShadowPopoverArrow = token.boxShadowPopoverArrow;
  return [(0, _defineProperty2["default"])({}, componentCls, (0, _extends6["default"])((0, _extends6["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    position: 'absolute',
    top: -9999,
    left: {
      _skip_check_: true,
      value: -9999
    },
    zIndex: zIndexPopup,
    display: 'block',
    // A placeholder out of dropdown visible range to avoid close when user moving
    '&::before': {
      position: 'absolute',
      insetBlock: -dropdownArrowDistance + sizePopupArrow / 2,
      // insetInlineStart: -7, // FIXME: Seems not work for hidden element
      zIndex: -9999,
      opacity: 0.0001,
      content: '""'
    }
  }, (0, _defineProperty2["default"])(_extends2, componentCls + "-wrap", (_ref = {
    position: 'relative'
  }, (0, _defineProperty2["default"])(_ref, antCls + "-btn > " + iconCls + "-down", {
    fontSize: fontSizeIcon
  }), (0, _defineProperty2["default"])(_ref, iconCls + "-down::before", {
    transition: "transform " + motionDurationMid
  }), _ref)), (0, _defineProperty2["default"])(_extends2, componentCls + "-wrap-open", (0, _defineProperty2["default"])({}, iconCls + "-down::before", {
    transform: "rotate(180deg)"
  })), (0, _defineProperty2["default"])(_extends2, "\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ", {
    display: 'none'
  }), (0, _defineProperty2["default"])(_extends2, "\n        &-show-arrow&-placement-topLeft,\n        &-show-arrow&-placement-top,\n        &-show-arrow&-placement-topRight\n      ", {
    paddingBottom: dropdownArrowDistance
  }), (0, _defineProperty2["default"])(_extends2, "\n        &-show-arrow&-placement-bottomLeft,\n        &-show-arrow&-placement-bottom,\n        &-show-arrow&-placement-bottomRight\n      ", {
    paddingTop: dropdownArrowDistance
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-arrow", (0, _extends6["default"])({
    position: 'absolute',
    zIndex: 1,
    display: 'block'
  }, (0, _style.roundedArrow)(sizePopupArrow, token.borderRadiusXS, token.borderRadiusOuter, colorBgElevated, boxShadowPopoverArrow))), (0, _defineProperty2["default"])(_extends2, "\n        &-placement-top > " + componentCls + "-arrow,\n        &-placement-topLeft > " + componentCls + "-arrow,\n        &-placement-topRight > " + componentCls + "-arrow\n      ", {
    bottom: dropdownArrowDistance,
    transform: 'translateY(100%) rotate(180deg)'
  }), (0, _defineProperty2["default"])(_extends2, "&-placement-top > " + componentCls + "-arrow", {
    left: {
      _skip_check_: true,
      value: '50%'
    },
    transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
  }), (0, _defineProperty2["default"])(_extends2, "&-placement-topLeft > " + componentCls + "-arrow", {
    left: {
      _skip_check_: true,
      value: dropdownArrowOffset
    }
  }), (0, _defineProperty2["default"])(_extends2, "&-placement-topRight > " + componentCls + "-arrow", {
    right: {
      _skip_check_: true,
      value: dropdownArrowOffset
    }
  }), (0, _defineProperty2["default"])(_extends2, "\n          &-placement-bottom > " + componentCls + "-arrow,\n          &-placement-bottomLeft > " + componentCls + "-arrow,\n          &-placement-bottomRight > " + componentCls + "-arrow\n        ", {
    top: dropdownArrowDistance,
    transform: "translateY(-100%)"
  }), (0, _defineProperty2["default"])(_extends2, "&-placement-bottom > " + componentCls + "-arrow", {
    left: {
      _skip_check_: true,
      value: '50%'
    },
    transform: "translateY(-100%) translateX(-50%)"
  }), (0, _defineProperty2["default"])(_extends2, "&-placement-bottomLeft > " + componentCls + "-arrow", {
    left: {
      _skip_check_: true,
      value: dropdownArrowOffset
    }
  }), (0, _defineProperty2["default"])(_extends2, "&-placement-bottomRight > " + componentCls + "-arrow", {
    right: {
      _skip_check_: true,
      value: dropdownArrowOffset
    }
  }), (0, _defineProperty2["default"])(_extends2, "&" + antCls + "-slide-down-enter" + antCls + "-slide-down-enter-active&-placement-bottomLeft,\n          &" + antCls + "-slide-down-appear" + antCls + "-slide-down-appear-active&-placement-bottomLeft\n          &" + antCls + "-slide-down-enter" + antCls + "-slide-down-enter-active&-placement-bottom,\n          &" + antCls + "-slide-down-appear" + antCls + "-slide-down-appear-active&-placement-bottom,\n          &" + antCls + "-slide-down-enter" + antCls + "-slide-down-enter-active&-placement-bottomRight,\n          &" + antCls + "-slide-down-appear" + antCls + "-slide-down-appear-active&-placement-bottomRight", {
    animationName: _motion.slideUpIn
  }), (0, _defineProperty2["default"])(_extends2, "&" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-topLeft,\n          &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-topLeft,\n          &" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-top,\n          &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-top,\n          &" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-topRight,\n          &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-topRight", {
    animationName: _motion.slideDownIn
  }), (0, _defineProperty2["default"])(_extends2, "&" + antCls + "-slide-down-leave" + antCls + "-slide-down-leave-active&-placement-bottomLeft,\n          &" + antCls + "-slide-down-leave" + antCls + "-slide-down-leave-active&-placement-bottom,\n          &" + antCls + "-slide-down-leave" + antCls + "-slide-down-leave-active&-placement-bottomRight", {
    animationName: _motion.slideUpOut
  }), (0, _defineProperty2["default"])(_extends2, "&" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-topLeft,\n          &" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-top,\n          &" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-topRight", {
    animationName: _motion.slideDownOut
  }), _extends2))), (_ref7 = {}, (0, _defineProperty2["default"])(_ref7, componentCls + " " + menuCls, {
    position: 'relative',
    margin: 0
  }), (0, _defineProperty2["default"])(_ref7, menuCls + "-submenu-popup", {
    position: 'absolute',
    zIndex: zIndexPopup,
    background: 'transparent',
    boxShadow: 'none',
    transformOrigin: '0 0',
    'ul,li': {
      listStyle: 'none'
    },
    ul: {
      marginInline: '0.3em'
    }
  }), (0, _defineProperty2["default"])(_ref7, componentCls + ", " + componentCls + "-menu-submenu", (0, _defineProperty2["default"])({}, menuCls, (0, _extends6["default"])((0, _extends6["default"])({
    padding: dropdownEdgeChildPadding,
    listStyleType: 'none',
    backgroundColor: colorBgElevated,
    backgroundClip: 'padding-box',
    borderRadius: token.borderRadiusLG,
    outline: 'none',
    boxShadow: token.boxShadowSecondary
  }, (0, _style.genFocusStyle)(token)), (_extends5 = {}, (0, _defineProperty2["default"])(_extends5, menuCls + "-item-group-title", {
    padding: dropdownPaddingVertical + "px " + controlPaddingHorizontal + "px",
    color: token.colorTextDescription,
    transition: "all " + motionDurationMid
  }), (0, _defineProperty2["default"])(_extends5, menuCls + "-item", {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderRadius: token.borderRadiusSM
  }), (0, _defineProperty2["default"])(_extends5, menuCls + "-item-icon", {
    minWidth: fontSize,
    marginInlineEnd: token.marginXS,
    fontSize: token.fontSizeSM
  }), (0, _defineProperty2["default"])(_extends5, menuCls + "-title-content", {
    flex: 'auto',
    '> a': {
      color: 'inherit',
      transition: "all " + motionDurationMid,
      '&:hover': {
        color: 'inherit'
      },
      '&::after': {
        position: 'absolute',
        inset: 0,
        content: '""'
      }
    }
  }), (0, _defineProperty2["default"])(_extends5, menuCls + "-item, " + menuCls + "-submenu-title", (0, _extends6["default"])((0, _extends6["default"])((0, _defineProperty2["default"])({
    clear: 'both',
    margin: 0,
    padding: dropdownPaddingVertical + "px " + controlPaddingHorizontal + "px",
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: fontSize,
    lineHeight: token.lineHeight,
    cursor: 'pointer',
    transition: "all " + motionDurationMid,
    '&:first-child': !dropdownEdgeChildPadding ? {
      borderRadius: borderRadius + "px " + borderRadius + "px 0 0"
    } : [],
    '&:last-child': !dropdownEdgeChildPadding ? {
      borderRadius: "0 0 " + borderRadius + "px " + borderRadius + "px"
    } : []
  }, "&:hover, &-active", {
    backgroundColor: token.controlItemBgHover
  }), (0, _style.genFocusStyle)(token)), (0, _defineProperty2["default"])({
    '&-selected': {
      color: token.colorPrimary,
      backgroundColor: token.controlItemBgActive,
      '&:hover, &-active': {
        backgroundColor: token.controlItemBgActiveHover
      }
    },
    '&-disabled': {
      color: colorTextDisabled,
      cursor: 'not-allowed',
      '&:hover': {
        color: colorTextDisabled,
        backgroundColor: colorBgElevated,
        cursor: 'not-allowed'
      },
      a: {
        pointerEvents: 'none'
      }
    },
    '&-divider': {
      height: 1,
      margin: token.marginXXS + "px 0",
      overflow: 'hidden',
      lineHeight: 0,
      backgroundColor: token.colorSplit
    }
  }, componentCls + "-menu-submenu-expand-icon", (0, _defineProperty2["default"])({
    position: 'absolute',
    insetInlineEnd: token.paddingXS
  }, componentCls + "-menu-submenu-arrow-icon", {
    marginInlineEnd: '0 !important',
    color: token.colorTextDescription,
    fontSize: fontSizeIcon,
    fontStyle: 'normal'
  })))), (0, _defineProperty2["default"])(_extends5, menuCls + "-item-group-list", {
    margin: "0 " + token.marginXS + "px",
    padding: 0,
    listStyle: 'none'
  }), (0, _defineProperty2["default"])(_extends5, menuCls + "-submenu-title", {
    paddingInlineEnd: controlPaddingHorizontal + token.fontSizeSM
  }), (0, _defineProperty2["default"])(_extends5, menuCls + "-submenu-vertical", {
    position: 'relative'
  }), (0, _defineProperty2["default"])(_extends5, menuCls + "-submenu" + menuCls + "-submenu-disabled " + componentCls + "-menu-submenu-title", (0, _defineProperty2["default"])({}, "&, " + componentCls + "-menu-submenu-arrow-icon", {
    color: colorTextDisabled,
    backgroundColor: colorBgElevated,
    cursor: 'not-allowed'
  })), (0, _defineProperty2["default"])(_extends5, menuCls + "-submenu-selected " + componentCls + "-menu-submenu-title", {
    color: token.colorPrimary
  }), _extends5)))), _ref7),
  // Follow code may reuse in other components
  [(0, _motion.initSlideMotion)(token, 'slide-up'), (0, _motion.initSlideMotion)(token, 'slide-down'), (0, _motion.initMoveMotion)(token, 'move-up'), (0, _motion.initMoveMotion)(token, 'move-down')]];
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Dropdown', function (token, _ref8) {
  var rootPrefixCls = _ref8.rootPrefixCls;
  var marginXXS = token.marginXXS,
    sizePopupArrow = token.sizePopupArrow,
    controlHeight = token.controlHeight,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    paddingXXS = token.paddingXXS,
    componentCls = token.componentCls,
    borderRadiusOuter = token.borderRadiusOuter,
    borderRadiusLG = token.borderRadiusLG;
  var dropdownPaddingVertical = (controlHeight - fontSize * lineHeight) / 2;
  var _getArrowOffset = (0, _placementArrow.getArrowOffset)({
      sizePopupArrow: sizePopupArrow,
      contentRadius: borderRadiusLG,
      borderRadiusOuter: borderRadiusOuter
    }),
    dropdownArrowOffset = _getArrowOffset.dropdownArrowOffset;
  var dropdownToken = (0, _internal.mergeToken)(token, {
    menuCls: componentCls + "-menu",
    rootPrefixCls: rootPrefixCls,
    dropdownArrowDistance: sizePopupArrow / 2 + marginXXS,
    dropdownArrowOffset: dropdownArrowOffset,
    dropdownPaddingVertical: dropdownPaddingVertical,
    dropdownEdgeChildPadding: paddingXXS
  });
  return [genBaseStyle(dropdownToken), (0, _button["default"])(dropdownToken), (0, _status["default"])(dropdownToken)];
}, function (token) {
  return {
    zIndexPopup: token.zIndexPopupBase + 50
  };
});
exports["default"] = _default;