import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
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
import * as React from 'react';
import ExclamationCircleFilled from "@ant-design/icons/es/icons/ExclamationCircleFilled";
import classNames from 'classnames';
import Button from '../button';
import { convertLegacyProps } from '../button/button';
import ActionButton from '../_util/ActionButton';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale/en_US';
import { getRenderPropValue } from '../_util/getRenderPropValue';
import { ConfigContext } from '../config-provider';
import PopoverPurePanel from '../popover/PurePanel';
import useStyle from './style';
export var Overlay = function Overlay(props) {
  var prefixCls = props.prefixCls,
    okButtonProps = props.okButtonProps,
    cancelButtonProps = props.cancelButtonProps,
    title = props.title,
    cancelText = props.cancelText,
    okText = props.okText,
    _props$okType = props.okType,
    okType = _props$okType === void 0 ? 'primary' : _props$okType,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(ExclamationCircleFilled, null) : _props$icon,
    _props$showCancel = props.showCancel,
    showCancel = _props$showCancel === void 0 ? true : _props$showCancel,
    close = props.close,
    onConfirm = props.onConfirm,
    onCancel = props.onCancel;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  return /*#__PURE__*/React.createElement(LocaleReceiver, {
    componentName: "Popconfirm",
    defaultLocale: defaultLocale.Popconfirm
  }, function (contextLocale) {
    return /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-inner-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-message"
    }, icon && /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-message-icon"
    }, icon), /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-message-title"
    }, getRenderPropValue(title))), /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-buttons"
    }, showCancel && /*#__PURE__*/React.createElement(Button, _extends({
      onClick: onCancel,
      size: "small"
    }, cancelButtonProps), cancelText !== null && cancelText !== void 0 ? cancelText : contextLocale.cancelText), /*#__PURE__*/React.createElement(ActionButton, {
      buttonProps: _extends(_extends({
        size: 'small'
      }, convertLegacyProps(okType)), okButtonProps),
      actionFn: onConfirm,
      close: close,
      prefixCls: getPrefixCls('btn'),
      quitOnNullishReturnValue: true,
      emitEvent: true
    }, okText !== null && okText !== void 0 ? okText : contextLocale.okText)));
  });
};
export default function PurePanel(props) {
  var customizePrefixCls = props.prefixCls,
    placement = props.placement,
    className = props.className,
    style = props.style,
    restProps = __rest(props, ["prefixCls", "placement", "className", "style"]);
  var _React$useContext2 = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext2.getPrefixCls;
  var prefixCls = getPrefixCls('popconfirm', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 1),
    wrapSSR = _useStyle2[0];
  return wrapSSR( /*#__PURE__*/React.createElement(PopoverPurePanel, {
    placement: placement,
    className: classNames(prefixCls, className),
    style: style
  }, /*#__PURE__*/React.createElement(Overlay, _extends({}, restProps, {
    prefixCls: prefixCls
  }))));
}