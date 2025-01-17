"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genFixedStyle = function genFixedStyle(token) {
  var _ref, _ref2, _ref3;
  var componentCls = token.componentCls,
    lineWidth = token.lineWidth,
    colorSplit = token.colorSplit,
    motionDurationSlow = token.motionDurationSlow,
    zIndexTableFixed = token.zIndexTableFixed,
    tableBg = token.tableBg;
  var shadowColor = colorSplit;
  // Follow style is magic of shadow which should not follow token:
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (_ref3 = {}, (0, _defineProperty2["default"])(_ref3, "\n        " + componentCls + "-cell-fix-left,\n        " + componentCls + "-cell-fix-right\n      ", {
    position: 'sticky !important',
    zIndex: zIndexTableFixed,
    background: tableBg
  }), (0, _defineProperty2["default"])(_ref3, "\n        " + componentCls + "-cell-fix-left-first::after,\n        " + componentCls + "-cell-fix-left-last::after\n      ", {
    position: 'absolute',
    top: 0,
    right: {
      _skip_check_: true,
      value: 0
    },
    bottom: -lineWidth,
    width: 30,
    transform: 'translateX(100%)',
    transition: "box-shadow " + motionDurationSlow,
    content: '""',
    pointerEvents: 'none'
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-cell-fix-left-all::after", {
    display: 'none'
  }), (0, _defineProperty2["default"])(_ref3, "\n        " + componentCls + "-cell-fix-right-first::after,\n        " + componentCls + "-cell-fix-right-last::after\n      ", {
    position: 'absolute',
    top: 0,
    bottom: -lineWidth,
    left: {
      _skip_check_: true,
      value: 0
    },
    width: 30,
    transform: 'translateX(-100%)',
    transition: "box-shadow " + motionDurationSlow,
    content: '""',
    pointerEvents: 'none'
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-container", {
    '&::before, &::after': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      zIndex: zIndexTableFixed,
      width: 30,
      transition: "box-shadow " + motionDurationSlow,
      content: '""',
      pointerEvents: 'none'
    },
    '&::before': {
      insetInlineStart: 0
    },
    '&::after': {
      insetInlineEnd: 0
    }
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-ping-left", (_ref = {}, (0, _defineProperty2["default"])(_ref, "&:not(" + componentCls + "-has-fix-left) " + componentCls + "-container", {
    position: 'relative',
    '&::before': {
      boxShadow: "inset 10px 0 8px -8px " + shadowColor
    }
  }), (0, _defineProperty2["default"])(_ref, "\n          " + componentCls + "-cell-fix-left-first::after,\n          " + componentCls + "-cell-fix-left-last::after\n        ", {
    boxShadow: "inset 10px 0 8px -8px " + shadowColor
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-cell-fix-left-last::before", {
    backgroundColor: 'transparent !important'
  }), _ref)), (0, _defineProperty2["default"])(_ref3, componentCls + "-ping-right", (_ref2 = {}, (0, _defineProperty2["default"])(_ref2, "&:not(" + componentCls + "-has-fix-right) " + componentCls + "-container", {
    position: 'relative',
    '&::after': {
      boxShadow: "inset -10px 0 8px -8px " + shadowColor
    }
  }), (0, _defineProperty2["default"])(_ref2, "\n          " + componentCls + "-cell-fix-right-first::after,\n          " + componentCls + "-cell-fix-right-last::after\n        ", {
    boxShadow: "inset -10px 0 8px -8px " + shadowColor
  }), _ref2)), _ref3));
};
var _default = genFixedStyle;
exports["default"] = _default;