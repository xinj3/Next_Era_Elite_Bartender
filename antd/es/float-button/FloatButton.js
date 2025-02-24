import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import { ConfigContext } from '../config-provider';
import useStyle from './style';
import Tooltip from '../tooltip';
import Content from './FloatButtonContent';
import FloatButtonGroupContext from './context';
import warning from '../_util/warning';
export var floatButtonPrefixCls = 'float-btn';
var FloatButton = function FloatButton(props, ref) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'circle' : _props$shape,
    icon = props.icon,
    description = props.description,
    tooltip = props.tooltip,
    restProps = __rest(props, ["prefixCls", "className", "type", "shape", "icon", "description", "tooltip"]);
  var _useContext = useContext(ConfigContext),
    getPrefixCls = _useContext.getPrefixCls,
    direction = _useContext.direction;
  var groupShape = useContext(FloatButtonGroupContext);
  var prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var mergeShape = groupShape || shape;
  var classString = classNames(hashId, prefixCls, className, prefixCls + "-" + type, prefixCls + "-" + mergeShape, _defineProperty({}, prefixCls + "-rtl", direction === 'rtl'));
  var contentProps = useMemo(function () {
    return {
      prefixCls: prefixCls,
      description: description,
      icon: icon,
      type: type
    };
  }, [prefixCls, description, icon, type]);
  var buttonNode = tooltip ? /*#__PURE__*/React.createElement(Tooltip, {
    title: tooltip,
    placement: "left"
  }, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-body"
  }, /*#__PURE__*/React.createElement(Content, _extends({}, contentProps)))) : /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-body"
  }, /*#__PURE__*/React.createElement(Content, _extends({}, contentProps)));
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning(!(shape === 'circle' && description), 'FloatButton', 'supported only when `shape` is `square`. Due to narrow space for text, short sentence is recommended.') : void 0;
  }
  return wrapSSR(props.href ? /*#__PURE__*/React.createElement("a", _extends({
    ref: ref
  }, restProps, {
    className: classString
  }), buttonNode) : /*#__PURE__*/React.createElement("button", _extends({
    ref: ref
  }, restProps, {
    className: classString,
    type: "button"
  }), buttonNode));
};
if (process.env.NODE_ENV !== 'production') {
  FloatButton.displayName = 'FloatButton';
}
var ForwardFloatButton = /*#__PURE__*/React.forwardRef(FloatButton);
export default ForwardFloatButton;