"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends8 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _internal = require("../../theme/internal");
var _group = _interopRequireDefault(require("./group"));
var _style = require("../../style");
var _compactItem = require("../../style/compact-item");
var _compactItemVertical = require("../../style/compact-item-vertical");
// ============================== Shared ==============================
var genSharedButtonStyle = function genSharedButtonStyle(token) {
  var _extends2, _extends3;
  var componentCls = token.componentCls,
    iconCls = token.iconCls;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends8["default"])((0, _extends8["default"])((0, _extends8["default"])((_extends2 = {
    outline: 'none',
    position: 'relative',
    display: 'inline-block',
    fontWeight: 400,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    backgroundImage: 'none',
    backgroundColor: 'transparent',
    border: token.lineWidth + "px " + token.lineType + " transparent",
    cursor: 'pointer',
    transition: "all " + token.motionDurationMid + " " + token.motionEaseInOut,
    userSelect: 'none',
    touchAction: 'manipulation',
    lineHeight: token.lineHeight,
    color: token.colorText,
    '> span': {
      display: 'inline-block'
    }
  }, (0, _defineProperty2["default"])(_extends2, "> " + iconCls + " + span, > span + " + iconCls, {
    marginInlineStart: token.marginXS
  }), (0, _defineProperty2["default"])(_extends2, '&:not(:disabled)', (0, _extends8["default"])({}, (0, _style.genFocusStyle)(token))), _extends2), (0, _compactItem.genCompactItemStyle)(token, componentCls)), (0, _compactItemVertical.genCompactItemVerticalStyle)(token, componentCls)), (_extends3 = {
    // make `btn-icon-only` not too narrow
    '&-icon-only&-compact-item': {
      flex: 'none'
    }
  }, (0, _defineProperty2["default"])(_extends3, "&-compact-item" + componentCls + "-primary", {
    '&:not([disabled]) + &:not([disabled])': {
      position: 'relative',
      '&:after': {
        position: 'absolute',
        top: -token.lineWidth,
        insetInlineStart: -token.lineWidth,
        display: 'inline-block',
        width: token.lineWidth,
        height: "calc(100% + " + token.lineWidth * 2 + "px)",
        backgroundColor: token.colorPrimaryBorder,
        content: '""'
      }
    }
  }), (0, _defineProperty2["default"])(_extends3, '&-compact-vertical-item', (0, _defineProperty2["default"])({}, "&" + componentCls + "-primary", {
    '&:not([disabled]) + &:not([disabled])': {
      position: 'relative',
      '&:after': {
        position: 'absolute',
        top: -token.lineWidth,
        insetInlineStart: -token.lineWidth,
        display: 'inline-block',
        width: "calc(100% + " + token.lineWidth * 2 + "px)",
        height: token.lineWidth,
        backgroundColor: token.colorPrimaryBorder,
        content: '""'
      }
    }
  })), _extends3)));
};
var genHoverActiveButtonStyle = function genHoverActiveButtonStyle(hoverStyle, activeStyle) {
  return {
    '&:not(:disabled)': {
      '&:hover': hoverStyle,
      '&:active': activeStyle
    }
  };
};
// ============================== Shape ===============================
var genCircleButtonStyle = function genCircleButtonStyle(token) {
  return {
    minWidth: token.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: '50%'
  };
};
var genRoundButtonStyle = function genRoundButtonStyle(token) {
  return {
    borderRadius: token.controlHeight,
    paddingInlineStart: token.controlHeight / 2,
    paddingInlineEnd: token.controlHeight / 2,
    width: 'auto'
  };
};
// =============================== Type ===============================
var genGhostButtonStyle = function genGhostButtonStyle(btnCls, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) {
  return (0, _defineProperty2["default"])({}, "&" + btnCls + "-background-ghost", (0, _extends8["default"])((0, _extends8["default"])({
    color: textColor || undefined,
    backgroundColor: 'transparent',
    borderColor: borderColor || undefined,
    boxShadow: 'none'
  }, genHoverActiveButtonStyle((0, _extends8["default"])({
    backgroundColor: 'transparent'
  }, hoverStyle), (0, _extends8["default"])({
    backgroundColor: 'transparent'
  }, activeStyle))), {
    '&:disabled': {
      cursor: 'not-allowed',
      color: textColorDisabled || undefined,
      borderColor: borderColorDisabled || undefined
    }
  }));
};
var genSolidDisabledButtonStyle = function genSolidDisabledButtonStyle(token) {
  return {
    '&:disabled': {
      cursor: 'not-allowed',
      borderColor: token.colorBorder,
      color: token.colorTextDisabled,
      backgroundColor: token.colorBgContainerDisabled,
      boxShadow: 'none'
    }
  };
};
var genSolidButtonStyle = function genSolidButtonStyle(token) {
  return (0, _extends8["default"])({}, genSolidDisabledButtonStyle(token));
};
var genPureDisabledButtonStyle = function genPureDisabledButtonStyle(token) {
  return {
    '&:disabled': {
      cursor: 'not-allowed',
      color: token.colorTextDisabled
    }
  };
};
// Type: Default
var genDefaultButtonStyle = function genDefaultButtonStyle(token) {
  return (0, _extends8["default"])((0, _extends8["default"])((0, _extends8["default"])((0, _extends8["default"])((0, _extends8["default"])({}, genSolidButtonStyle(token)), {
    backgroundColor: token.colorBgContainer,
    borderColor: token.colorBorder,
    boxShadow: "0 " + token.controlOutlineWidth + "px 0 " + token.controlTmpOutline
  }), genHoverActiveButtonStyle({
    color: token.colorPrimaryHover,
    borderColor: token.colorPrimaryHover
  }, {
    color: token.colorPrimaryActive,
    borderColor: token.colorPrimaryActive
  })), genGhostButtonStyle(token.componentCls, token.colorBgContainer, token.colorBgContainer, token.colorTextDisabled, token.colorBorder)), (0, _defineProperty2["default"])({}, "&" + token.componentCls + "-dangerous", (0, _extends8["default"])((0, _extends8["default"])((0, _extends8["default"])({
    color: token.colorError,
    borderColor: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    borderColor: token.colorErrorBorderHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder)), genSolidDisabledButtonStyle(token))));
};
// Type: Primary
var genPrimaryButtonStyle = function genPrimaryButtonStyle(token) {
  return (0, _extends8["default"])((0, _extends8["default"])((0, _extends8["default"])((0, _extends8["default"])((0, _extends8["default"])({}, genSolidButtonStyle(token)), {
    color: token.colorTextLightSolid,
    backgroundColor: token.colorPrimary,
    boxShadow: "0 " + token.controlOutlineWidth + "px 0 " + token.controlOutline
  }), genHoverActiveButtonStyle({
    color: token.colorTextLightSolid,
    backgroundColor: token.colorPrimaryHover
  }, {
    color: token.colorTextLightSolid,
    backgroundColor: token.colorPrimaryActive
  })), genGhostButtonStyle(token.componentCls, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
    color: token.colorPrimaryHover,
    borderColor: token.colorPrimaryHover
  }, {
    color: token.colorPrimaryActive,
    borderColor: token.colorPrimaryActive
  })), (0, _defineProperty2["default"])({}, "&" + token.componentCls + "-dangerous", (0, _extends8["default"])((0, _extends8["default"])((0, _extends8["default"])({
    backgroundColor: token.colorError,
    boxShadow: "0 " + token.controlOutlineWidth + "px 0 " + token.colorErrorOutline
  }, genHoverActiveButtonStyle({
    backgroundColor: token.colorErrorHover
  }, {
    backgroundColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genSolidDisabledButtonStyle(token))));
};
// Type: Dashed
var genDashedButtonStyle = function genDashedButtonStyle(token) {
  return (0, _extends8["default"])((0, _extends8["default"])({}, genDefaultButtonStyle(token)), {
    borderStyle: 'dashed'
  });
};
// Type: Link
var genLinkButtonStyle = function genLinkButtonStyle(token) {
  return (0, _extends8["default"])((0, _extends8["default"])((0, _extends8["default"])({
    color: token.colorLink
  }, genHoverActiveButtonStyle({
    color: token.colorLinkHover
  }, {
    color: token.colorLinkActive
  })), genPureDisabledButtonStyle(token)), (0, _defineProperty2["default"])({}, "&" + token.componentCls + "-dangerous", (0, _extends8["default"])((0, _extends8["default"])({
    color: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover
  }, {
    color: token.colorErrorActive
  })), genPureDisabledButtonStyle(token))));
};
// Type: Text
var genTextButtonStyle = function genTextButtonStyle(token) {
  return (0, _extends8["default"])((0, _extends8["default"])((0, _extends8["default"])({}, genHoverActiveButtonStyle({
    color: token.colorText,
    backgroundColor: token.colorBgTextHover
  }, {
    color: token.colorText,
    backgroundColor: token.colorBgTextActive
  })), genPureDisabledButtonStyle(token)), (0, _defineProperty2["default"])({}, "&" + token.componentCls + "-dangerous", (0, _extends8["default"])((0, _extends8["default"])({
    color: token.colorError
  }, genPureDisabledButtonStyle(token)), genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }, {
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }))));
};
var genTypeButtonStyle = function genTypeButtonStyle(token) {
  var _ref3;
  var componentCls = token.componentCls;
  return _ref3 = {}, (0, _defineProperty2["default"])(_ref3, componentCls + "-default", genDefaultButtonStyle(token)), (0, _defineProperty2["default"])(_ref3, componentCls + "-primary", genPrimaryButtonStyle(token)), (0, _defineProperty2["default"])(_ref3, componentCls + "-dashed", genDashedButtonStyle(token)), (0, _defineProperty2["default"])(_ref3, componentCls + "-link", genLinkButtonStyle(token)), (0, _defineProperty2["default"])(_ref3, componentCls + "-text", genTextButtonStyle(token)), _ref3;
};
// =============================== Size ===============================
var genSizeButtonStyle = function genSizeButtonStyle(token) {
  var _ref4;
  var sizePrefixCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var componentCls = token.componentCls,
    iconCls = token.iconCls;
  var paddingVertical = Math.max(0, (token.controlHeight - token.fontSize * token.lineHeight) / 2 - token.lineWidth);
  var paddingHorizontal = token.buttonPaddingHorizontal - token.lineWidth;
  var iconOnlyCls = componentCls + "-icon-only";
  return [// Size
  (0, _defineProperty2["default"])({}, "" + componentCls + sizePrefixCls, (_ref4 = {
    fontSize: token.fontSize,
    height: token.controlHeight,
    padding: paddingVertical + "px " + paddingHorizontal + "px",
    borderRadius: token.borderRadius
  }, (0, _defineProperty2["default"])(_ref4, "&" + iconOnlyCls, {
    width: token.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    '> span': {
      transform: 'scale(1.143)' // 14px -> 16px
    }
  }), (0, _defineProperty2["default"])(_ref4, "&" + componentCls + "-loading", {
    opacity: token.opacityLoading,
    cursor: 'default'
  }), (0, _defineProperty2["default"])(_ref4, componentCls + "-loading-icon", {
    transition: "width " + token.motionDurationSlow + " " + token.motionEaseInOut + ", opacity " + token.motionDurationSlow + " " + token.motionEaseInOut
  }), (0, _defineProperty2["default"])(_ref4, "&:not(" + iconOnlyCls + ") " + componentCls + "-loading-icon > " + iconCls, {
    marginInlineEnd: token.marginXS
  }), _ref4)), // Shape - patch prefixCls again to override solid border radius style
  (0, _defineProperty2["default"])({}, "" + componentCls + componentCls + "-circle" + sizePrefixCls, genCircleButtonStyle(token)), (0, _defineProperty2["default"])({}, "" + componentCls + componentCls + "-round" + sizePrefixCls, genRoundButtonStyle(token))];
};
var genSizeBaseButtonStyle = function genSizeBaseButtonStyle(token) {
  return genSizeButtonStyle(token);
};
var genSizeSmallButtonStyle = function genSizeSmallButtonStyle(token) {
  var smallToken = (0, _internal.mergeToken)(token, {
    controlHeight: token.controlHeightSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: token.borderRadiusSM
  });
  return genSizeButtonStyle(smallToken, token.componentCls + "-sm");
};
var genSizeLargeButtonStyle = function genSizeLargeButtonStyle(token) {
  var largeToken = (0, _internal.mergeToken)(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  });
  return genSizeButtonStyle(largeToken, token.componentCls + "-lg");
};
var genBlockButtonStyle = function genBlockButtonStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _defineProperty2["default"])({}, "&" + componentCls + "-block", {
    width: '100%'
  }));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Button', function (token) {
  var controlTmpOutline = token.controlTmpOutline,
    paddingContentHorizontal = token.paddingContentHorizontal;
  var buttonToken = (0, _internal.mergeToken)(token, {
    colorOutlineDefault: controlTmpOutline,
    buttonPaddingHorizontal: paddingContentHorizontal
  });
  return [
  // Shared
  genSharedButtonStyle(buttonToken),
  // Size
  genSizeSmallButtonStyle(buttonToken), genSizeBaseButtonStyle(buttonToken), genSizeLargeButtonStyle(buttonToken),
  // Block
  genBlockButtonStyle(buttonToken),
  // Group (type, ghost, danger, disabled, loading)
  genTypeButtonStyle(buttonToken),
  // Button Group
  (0, _group["default"])(buttonToken)];
});
exports["default"] = _default;