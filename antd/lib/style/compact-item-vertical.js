"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genCompactItemVerticalStyle = genCompactItemVerticalStyle;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function compactItemVerticalBorder(token) {
  return {
    // border collapse
    '&-item:not(&-last-item)': {
      marginBottom: -token.lineWidth
    },
    '&-item': {
      '&:hover,&:focus,&:active': {
        zIndex: 2
      },
      '&[disabled]': {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls) {
  return {
    '&-item:not(&-first-item):not(&-last-item)': {
      borderRadius: 0
    },
    '&-item&-first-item:not(&-last-item)': (0, _defineProperty2["default"])({}, "&, &" + prefixCls + "-sm, &" + prefixCls + "-lg", {
      borderEndEndRadius: 0,
      borderEndStartRadius: 0
    }),
    '&-item&-last-item:not(&-first-item)': (0, _defineProperty2["default"])({}, "&, &" + prefixCls + "-sm, &" + prefixCls + "-lg", {
      borderStartStartRadius: 0,
      borderStartEndRadius: 0
    })
  };
}
function genCompactItemVerticalStyle(token, prefixCls) {
  return {
    '&-compact-vertical': (0, _extends2["default"])((0, _extends2["default"])({}, compactItemVerticalBorder(token)), compactItemBorderVerticalRadius(prefixCls))
  };
}