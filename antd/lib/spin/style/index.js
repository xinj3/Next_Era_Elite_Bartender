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
var antSpinMove = new _cssinjs.Keyframes('antSpinMove', {
  to: {
    opacity: 1
  }
});
var antRotate = new _cssinjs.Keyframes('antRotate', {
  to: {
    transform: 'rotate(405deg)'
  }
});
var genSpinStyle = function genSpinStyle(token) {
  var _ref, _ref2, _ref3, _nestedLoading, _extends2;
  return (0, _defineProperty2["default"])({}, "" + token.componentCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    position: 'absolute',
    display: 'none',
    color: token.colorPrimary,
    textAlign: 'center',
    verticalAlign: 'middle',
    opacity: 0,
    transition: "transform " + token.motionDurationSlow + " " + token.motionEaseInOutCirc,
    '&-spinning': {
      position: 'static',
      display: 'inline-block',
      opacity: 1
    },
    '&-nested-loading': (_nestedLoading = {
      position: 'relative'
    }, (0, _defineProperty2["default"])(_nestedLoading, "> div > " + token.componentCls, (_ref3 = {
      position: 'absolute',
      top: 0,
      insetInlineStart: 0,
      zIndex: 4,
      display: 'block',
      width: '100%',
      height: '100%',
      maxHeight: token.contentHeight
    }, (0, _defineProperty2["default"])(_ref3, token.componentCls + "-dot", {
      position: 'absolute',
      top: '50%',
      insetInlineStart: '50%',
      margin: -token.spinDotSize / 2
    }), (0, _defineProperty2["default"])(_ref3, token.componentCls + "-text", {
      position: 'absolute',
      top: '50%',
      width: '100%',
      paddingTop: (token.spinDotSize - token.fontSize) / 2 + 2,
      textShadow: "0 1px 2px " + token.colorBgContainer // FIXME: shadow
    }), (0, _defineProperty2["default"])(_ref3, "&" + token.componentCls + "-show-text " + token.componentCls + "-dot", {
      marginTop: -(token.spinDotSize / 2) - 10
    }), (0, _defineProperty2["default"])(_ref3, "> div > " + token.componentCls + "-sm", (_ref = {}, (0, _defineProperty2["default"])(_ref, token.componentCls + "-dot", {
      margin: -token.spinDotSizeSM / 2
    }), (0, _defineProperty2["default"])(_ref, token.componentCls + "-text", {
      paddingTop: (token.spinDotSizeSM - token.fontSize) / 2 + 2
    }), (0, _defineProperty2["default"])(_ref, "&" + token.componentCls + "-show-text " + token.componentCls + "-dot", {
      marginTop: -(token.spinDotSizeSM / 2) - 10
    }), _ref)), (0, _defineProperty2["default"])(_ref3, "> div > " + token.componentCls + "-lg", (_ref2 = {}, (0, _defineProperty2["default"])(_ref2, token.componentCls + "-dot", {
      margin: -(token.spinDotSizeLG / 2)
    }), (0, _defineProperty2["default"])(_ref2, token.componentCls + "-text", {
      paddingTop: (token.spinDotSizeLG - token.fontSize) / 2 + 2
    }), (0, _defineProperty2["default"])(_ref2, "&" + token.componentCls + "-show-text " + token.componentCls + "-dot", {
      marginTop: -(token.spinDotSizeLG / 2) - 10
    }), _ref2)), _ref3)), (0, _defineProperty2["default"])(_nestedLoading, token.componentCls + "-container", {
      position: 'relative',
      transition: "opacity " + token.motionDurationSlow,
      '&::after': {
        position: 'absolute',
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: 10,
        width: '100%',
        height: '100%',
        background: token.colorBgContainer,
        opacity: 0,
        transition: "all " + token.motionDurationSlow,
        content: '""',
        pointerEvents: 'none'
      }
    }), (0, _defineProperty2["default"])(_nestedLoading, token.componentCls + "-blur", (0, _defineProperty2["default"])({
      clear: 'both',
      opacity: 0.5,
      userSelect: 'none',
      pointerEvents: 'none'
    }, "&::after", {
      opacity: 0.4,
      pointerEvents: 'auto'
    })), _nestedLoading)
  }, (0, _defineProperty2["default"])(_extends2, "&-tip", {
    color: token.spinDotDefault
  }), (0, _defineProperty2["default"])(_extends2, token.componentCls + "-dot", {
    position: 'relative',
    display: 'inline-block',
    fontSize: token.spinDotSize,
    width: '1em',
    height: '1em',
    '&-item': {
      position: 'absolute',
      display: 'block',
      width: (token.spinDotSize - token.marginXXS / 2) / 2,
      height: (token.spinDotSize - token.marginXXS / 2) / 2,
      backgroundColor: token.colorPrimary,
      borderRadius: '100%',
      transform: 'scale(0.75)',
      transformOrigin: '50% 50%',
      opacity: 0.3,
      animationName: antSpinMove,
      animationDuration: '1s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationDirection: 'alternate',
      '&:nth-child(1)': {
        top: 0,
        insetInlineStart: 0
      },
      '&:nth-child(2)': {
        top: 0,
        insetInlineEnd: 0,
        animationDelay: '0.4s'
      },
      '&:nth-child(3)': {
        insetInlineEnd: 0,
        bottom: 0,
        animationDelay: '0.8s'
      },
      '&:nth-child(4)': {
        bottom: 0,
        insetInlineStart: 0,
        animationDelay: '1.2s'
      }
    },
    '&-spin': {
      transform: 'rotate(45deg)',
      animationName: antRotate,
      animationDuration: '1.2s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear'
    }
  }), (0, _defineProperty2["default"])(_extends2, "&-sm " + token.componentCls + "-dot", {
    fontSize: token.spinDotSizeSM,
    i: {
      width: (token.spinDotSizeSM - token.marginXXS / 2) / 2,
      height: (token.spinDotSizeSM - token.marginXXS / 2) / 2
    }
  }), (0, _defineProperty2["default"])(_extends2, "&-lg " + token.componentCls + "-dot", {
    fontSize: token.spinDotSizeLG,
    i: {
      width: (token.spinDotSizeLG - token.marginXXS) / 2,
      height: (token.spinDotSizeLG - token.marginXXS) / 2
    }
  }), (0, _defineProperty2["default"])(_extends2, "&" + token.componentCls + "-show-text " + token.componentCls + "-text", {
    display: 'block'
  }), _extends2)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Spin', function (token) {
  var spinToken = (0, _internal.mergeToken)(token, {
    spinDotDefault: token.colorTextDescription,
    spinDotSize: token.controlHeightLG / 2,
    spinDotSizeSM: token.controlHeightLG * 0.35,
    spinDotSizeLG: token.controlHeight
  });
  return [genSpinStyle(spinToken)];
}, {
  contentHeight: 400
});
exports["default"] = _default;