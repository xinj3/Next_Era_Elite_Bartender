import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
// deps-lint-skip-all
import { Keyframes } from '@ant-design/cssinjs';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';
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
  var messageMoveIn = new Keyframes('MessageMoveIn', {
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
  var messageMoveOut = new Keyframes('MessageMoveOut', {
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
  _defineProperty({}, componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    position: 'fixed',
    top: marginXS,
    insetInlineStart: 0,
    width: '100%',
    pointerEvents: 'none',
    zIndex: zIndexPopup
  }, _defineProperty(_extends2, componentCls + "-move-up", {
    animationFillMode: 'forwards'
  }), _defineProperty(_extends2, "\n        " + componentCls + "-move-up-appear,\n        " + componentCls + "-move-up-enter\n      ", {
    animationName: messageMoveIn,
    animationDuration: motionDurationSlow,
    animationPlayState: 'paused',
    animationTimingFunction: motionEaseInOutCirc
  }), _defineProperty(_extends2, "\n        " + componentCls + "-move-up-appear" + componentCls + "-move-up-appear-active,\n        " + componentCls + "-move-up-enter" + componentCls + "-move-up-enter-active\n      ", {
    animationPlayState: 'running'
  }), _defineProperty(_extends2, componentCls + "-move-up-leave", {
    animationName: messageMoveOut,
    animationDuration: motionDurationSlow,
    animationPlayState: 'paused',
    animationTimingFunction: motionEaseInOutCirc
  }), _defineProperty(_extends2, componentCls + "-move-up-leave" + componentCls + "-move-up-leave-active", {
    animationPlayState: 'running'
  }), _defineProperty(_extends2, '&-rtl', {
    direction: 'rtl',
    span: {
      direction: 'rtl'
    }
  }), _extends2))), // ============================ Notice ============================
  _defineProperty({}, componentCls + "-notice", (_ref2 = {
    padding: paddingXS,
    textAlign: 'center'
  }, _defineProperty(_ref2, iconCls, {
    verticalAlign: 'text-bottom',
    marginInlineEnd: marginXS,
    fontSize: fontSizeLG
  }), _defineProperty(_ref2, componentCls + "-notice-content", {
    display: 'inline-block',
    padding: messageNoticeContentPadding,
    background: colorBgElevated,
    borderRadius: borderRadiusLG,
    boxShadow: boxShadowSecondary,
    pointerEvents: 'all'
  }), _defineProperty(_ref2, componentCls + "-success " + iconCls, {
    color: colorSuccess
  }), _defineProperty(_ref2, componentCls + "-error " + iconCls, {
    color: colorError
  }), _defineProperty(_ref2, componentCls + "-warning " + iconCls, {
    color: colorWarning
  }), _defineProperty(_ref2, "\n        " + componentCls + "-info " + iconCls + ",\n        " + componentCls + "-loading " + iconCls, {
    color: colorInfo
  }), _ref2)), // ============================= Pure =============================
  _defineProperty({}, componentCls + "-notice-pure-panel", {
    padding: 0,
    textAlign: 'start'
  })];
};
// ============================== Export ==============================
export default genComponentStyleHook('Message', function (token) {
  // Gen-style functions here
  var combinedToken = mergeToken(token, {
    messageNoticeContentPadding: (token.controlHeightLG - token.fontSize * token.lineHeight) / 2 + "px " + token.paddingContentVertical + "px"
  });
  return [genMessageStyle(combinedToken)];
}, function (token) {
  return {
    height: 150,
    zIndexPopup: token.zIndexPopupBase + 10
  };
});