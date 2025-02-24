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
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import useStyle from './style';
var CheckableTag = function CheckableTag(_a) {
  var _classNames;
  var customizePrefixCls = _a.prefixCls,
    className = _a.className,
    checked = _a.checked,
    onChange = _a.onChange,
    onClick = _a.onClick,
    restProps = __rest(_a, ["prefixCls", "className", "checked", "onChange", "onClick"]);
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var handleClick = function handleClick(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  // Style
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var cls = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-checkable", true), _defineProperty(_classNames, prefixCls + "-checkable-checked", checked), _classNames), className, hashId);
  return wrapSSR( /*#__PURE__*/React.createElement("span", _extends({}, restProps, {
    className: cls,
    onClick: handleClick
  })));
};
export default CheckableTag;