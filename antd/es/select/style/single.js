import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { resetComponent } from '../../style';
import { mergeToken } from '../../theme/internal';
function genSizeStyle(token, suffix) {
  var _extends2, _ref, _ref3, _ref5;
  var componentCls = token.componentCls,
    inputPaddingHorizontalBase = token.inputPaddingHorizontalBase,
    borderRadius = token.borderRadius;
  var selectHeightWithoutBorder = token.controlHeight - token.lineWidth * 2;
  var selectionItemPadding = Math.ceil(token.fontSize * 1.25);
  var suffixCls = suffix ? componentCls + "-" + suffix : '';
  return _defineProperty({}, componentCls + "-single" + suffixCls, (_ref5 = {
    fontSize: token.fontSize
  }, _defineProperty(_ref5, componentCls + "-selector", _extends(_extends({}, resetComponent(token)), (_extends2 = {
    display: 'flex',
    borderRadius: borderRadius
  }, _defineProperty(_extends2, componentCls + "-selection-search", {
    position: 'absolute',
    top: 0,
    insetInlineStart: inputPaddingHorizontalBase,
    insetInlineEnd: inputPaddingHorizontalBase,
    bottom: 0,
    '&-input': {
      width: '100%'
    }
  }), _defineProperty(_extends2, "\n          " + componentCls + "-selection-item,\n          " + componentCls + "-selection-placeholder\n        ", {
    padding: 0,
    lineHeight: selectHeightWithoutBorder + "px",
    transition: "all " + token.motionDurationSlow,
    // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
    '@supports (-moz-appearance: meterbar)': {
      lineHeight: selectHeightWithoutBorder + "px"
    }
  }), _defineProperty(_extends2, componentCls + "-selection-item", {
    position: 'relative',
    userSelect: 'none'
  }), _defineProperty(_extends2, componentCls + "-selection-placeholder", {
    transition: 'none',
    pointerEvents: 'none'
  }), _defineProperty(_extends2, ['&:after', /* For '' value baseline align */componentCls + "-selection-item:after", /* For undefined value baseline align */componentCls + "-selection-placeholder:after"].join(','), {
    display: 'inline-block',
    width: 0,
    visibility: 'hidden',
    content: '"\\a0"'
  }), _extends2))), _defineProperty(_ref5, "\n        &" + componentCls + "-show-arrow " + componentCls + "-selection-item,\n        &" + componentCls + "-show-arrow " + componentCls + "-selection-placeholder\n      ", {
    paddingInlineEnd: selectionItemPadding
  }), _defineProperty(_ref5, "&" + componentCls + "-open " + componentCls + "-selection-item", {
    color: token.colorTextPlaceholder
  }), _defineProperty(_ref5, "&:not(" + componentCls + "-customize-input)", _defineProperty({}, componentCls + "-selector", (_ref = {
    width: '100%',
    height: token.controlHeight,
    padding: "0 " + inputPaddingHorizontalBase + "px"
  }, _defineProperty(_ref, componentCls + "-selection-search-input", {
    height: selectHeightWithoutBorder
  }), _defineProperty(_ref, '&:after', {
    lineHeight: selectHeightWithoutBorder + "px"
  }), _ref))), _defineProperty(_ref5, "&" + componentCls + "-customize-input", _defineProperty({}, componentCls + "-selector", (_ref3 = {
    '&:after': {
      display: 'none'
    }
  }, _defineProperty(_ref3, componentCls + "-selection-search", {
    position: 'static',
    width: '100%'
  }), _defineProperty(_ref3, componentCls + "-selection-placeholder", {
    position: 'absolute',
    insetInlineStart: 0,
    insetInlineEnd: 0,
    padding: "0 " + inputPaddingHorizontalBase + "px",
    '&:after': {
      display: 'none'
    }
  }), _ref3))), _ref5));
}
export default function genSingleStyle(token) {
  var _ref7;
  var componentCls = token.componentCls;
  var inputPaddingHorizontalSM = token.controlPaddingHorizontalSM - token.lineWidth;
  return [genSizeStyle(token),
  // ======================== Small ========================
  // Shared
  genSizeStyle(mergeToken(token, {
    controlHeight: token.controlHeightSM,
    borderRadius: token.borderRadiusSM
  }), 'sm'), // padding
  _defineProperty({}, componentCls + "-single" + componentCls + "-sm", _defineProperty({}, "&:not(" + componentCls + "-customize-input)", (_ref7 = {}, _defineProperty(_ref7, componentCls + "-selection-search", {
    insetInlineStart: inputPaddingHorizontalSM,
    insetInlineEnd: inputPaddingHorizontalSM
  }), _defineProperty(_ref7, componentCls + "-selector", {
    padding: "0 " + inputPaddingHorizontalSM + "px"
  }), _defineProperty(_ref7, "&" + componentCls + "-show-arrow " + componentCls + "-selection-search", {
    insetInlineStart: 'auto',
    insetInlineEnd: inputPaddingHorizontalSM + token.fontSize * 1.5
  }), _defineProperty(_ref7, "\n            &" + componentCls + "-show-arrow " + componentCls + "-selection-item,\n            &" + componentCls + "-show-arrow " + componentCls + "-selection-placeholder\n          ", {
    paddingInlineEnd: token.fontSize * 1.5
  }), _ref7))),
  // ======================== Large ========================
  // Shared
  genSizeStyle(mergeToken(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  }), 'lg')];
}