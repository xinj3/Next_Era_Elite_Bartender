"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _cssinjs = require("@ant-design/cssinjs");
var _internal = require("../../theme/internal");
var _style = require("../../style");
// deps-lint-skip-all

var genMessageStyle = function genMessageStyle(token) {
  var _extends2, _ref2;
  var componentCls = token.componentCls,
    iconCls = token.iconCls,
    boxShadowSecondary = token.boxShadowSecondary,
    colorBgElevated = token.colorBgElevated,
    colorSuccess = token.colorSuccess,
    colorError = token.colorError,
    colorWarning = token.colorWarning,
    colorInfo = token.colorInfo,
    fontSizeLG = token.fontSizeLG,
    motionEaseInOutCirc = token.motionEaseInOutCirc,
    motionDurationSlow = token.motionDurationSlow,
    marginXS = token.marginXS,
    paddingXS = token.paddingXS,
    borderRadiusLG = token.borderRadiusLG,
    zIndexPopup = token.zIndexPopup,
    messageNoticeContentPadding = token.messageNoticeContentPadding;
  var messageMoveIn = new _cssinjs.Keyframes('MessageMoveIn', {
    '0%': {
      padding: 0,
      transform: 'translateY(-100%)',
      opacity: 0
    },
    '100%': {
      padding: paddingXS,
      transform: 'translateY(0)',
      opacity: 1
    }
  });
  var messageMoveOut = new _cssinjs.Keyframes('MessageMoveOut', {
    '0%': {
      maxHeight: token.height,
      padding: paddingXS,
      opacity: 1
    },
    '100%': {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  return [// ============================ Holder ============================
  (0, _defineProperty2["default"])({}, componentCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    position: 'fixed',
    top: marginXS,
    insetInlineStart: 0,
    width: '100%',
    pointerEvents: 'none',
    zIndex: zIndexPopup
  }, (0, _defineProperty2["default"])(_extends2, componentCls + "-move-up", {
    animationFillMode: 'forwards'
  }), (0, _defineProperty2["default"])(_extends2, "\n        " + componentCls + "-move-up-appear,\n        " + componentCls + "-move-up-enter\n      ", {
    animationName: messageMoveIn,
    animationDuration: motionDurationSlow,
    animationPlayState: 'paused',
    animationTimingFunction: motionEaseInOutCirc
  }), (0, _defineProperty2["default"])(_extends2, "\n        " + componentCls + "-move-up-appear" + componentCls + "-move-up-appear-active,\n        " + componentCls + "-move-up-enter" + componentCls + "-move-up-enter-active\n      ", {
    animationPlayState: 'running'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-move-up-leave", {
    animationName: messageMoveOut,
    animationDuration: motionDurationSlow,
    animationPlayState: 'paused',
    animationTimingFunction: motionEaseInOutCirc
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-move-up-leave" + componentCls + "-move-up-leave-active", {
    animationPlayState: 'running'
  }), (0, _defineProperty2["default"])(_extends2, '&-rtl', {
    direction: 'rtl',
    span: {
      direction: 'rtl'
    }
  }), _extends2))), // ============================ Notice ============================
  (0, _defineProperty2["default"])({}, componentCls + "-notice", (_ref2 = {
    padding: paddingXS,
    textAlign: 'center'
  }, (0, _defineProperty2["default"])(_ref2, iconCls, {
    verticalAlign: 'text-bottom',
    marginInlineEnd: marginXS,
    fontSize: fontSizeLG
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-notice-content", {
    display: 'inline-block',
    padding: messageNoticeContentPadding,
    background: colorBgElevated,
    borderRadius: borderRadiusLG,
    boxShadow: boxShadowSecondary,
    pointerEvents: 'all'
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-success " + iconCls, {
    color: colorSuccess
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-error " + iconCls, {
    color: colorError
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-warning " + iconCls, {
    color: colorWarning
  }), (0, _defineProperty2["default"])(_ref2, "\n        " + componentCls + "-info " + iconCls + ",\n        " + componentCls + "-loading " + iconCls, {
    color: colorInfo
  }), _ref2)), // ============================= Pure =============================
  (0, _defineProperty2["default"])({}, componentCls + "-notice-pure-panel", {
    padding: 0,
    textAlign: 'start'
  })];
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Message', function (token) {
  // Gen-style functions here
  var combinedToken = (0, _internal.mergeToken)(token, {
    messageNoticeContentPadding: (token.controlHeightLG - token.fontSize * token.lineHeight) / 2 + "px " + token.paddingContentVertical + "px"
  });
  return [genMessageStyle(combinedToken)];
}, function (token) {
  return {
    height: 150,
    zIndexPopup: token.zIndexPopupBase + 10
  };
});
exports["default"] = _default;