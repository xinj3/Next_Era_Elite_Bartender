import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _this = this;
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
import ExclamationCircleFilled from "@ant-design/icons/es/icons/ExclamationCircleFilled";
import classNames from 'classnames';
import useMergedState from "rc-util/es/hooks/useMergedState";
import KeyCode from "rc-util/es/KeyCode";
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import Popover from '../popover';
import { cloneElement } from '../_util/reactNode';
import PurePanel, { Overlay } from './PurePanel';
import usePopconfirmStyle from './style';
var Popconfirm = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var _useMergedState = useMergedState(false, {
      value: props.open,
      defaultValue: props.defaultOpen
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    open = _useMergedState2[0],
    setOpen = _useMergedState2[1];
  // const isDestroyed = useDestroyed();
  var settingOpen = function settingOpen(value, e) {
    var _a;
    setOpen(value, true);
    (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, value, e);
  };
  var close = function close(e) {
    settingOpen(false, e);
  };
  var onConfirm = function onConfirm(e) {
    var _a;
    return (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(_this, e);
  };
  var onCancel = function onCancel(e) {
    var _a;
    settingOpen(false, e);
    (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(_this, e);
  };
  var _onKeyDown = function onKeyDown(e) {
    if (e.keyCode === KeyCode.ESC && open) {
      settingOpen(false, e);
    }
  };
  var onOpenChange = function onOpenChange(value) {
    var _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled;
    if (disabled) {
      return;
    }
    settingOpen(value);
  };
  var customizePrefixCls = props.prefixCls,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'top' : _props$placement,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? 'click' : _props$trigger,
    _props$okType = props.okType,
    okType = _props$okType === void 0 ? 'primary' : _props$okType,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(ExclamationCircleFilled, null) : _props$icon,
    children = props.children,
    overlayClassName = props.overlayClassName,
    restProps = __rest(props, ["prefixCls", "placement", "trigger", "okType", "icon", "children", "overlayClassName"]);
  var prefixCls = getPrefixCls('popconfirm', customizePrefixCls);
  var overlayClassNames = classNames(prefixCls, overlayClassName);
  var _usePopconfirmStyle = usePopconfirmStyle(prefixCls),
    _usePopconfirmStyle2 = _slicedToArray(_usePopconfirmStyle, 1),
    wrapSSR = _usePopconfirmStyle2[0];
  return wrapSSR( /*#__PURE__*/React.createElement(Popover, _extends({}, restProps, {
    trigger: trigger,
    placement: placement,
    onOpenChange: onOpenChange,
    open: open,
    ref: ref,
    overlayClassName: overlayClassNames,
    _overlay: /*#__PURE__*/React.createElement(Overlay, _extends({
      okType: okType,
      icon: icon
    }, props, {
      prefixCls: prefixCls,
      close: close,
      onConfirm: onConfirm,
      onCancel: onCancel
    })),
    "data-popover-inject": true
  }), cloneElement(children, {
    onKeyDown: function onKeyDown(e) {
      var _a, _b;
      if ( /*#__PURE__*/React.isValidElement(children)) {
        (_b = children === null || children === void 0 ? void 0 : (_a = children.props).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, e);
      }
      _onKeyDown(e);
    }
  })));
});
// We don't care debug panel
/* istanbul ignore next */
Popconfirm._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
export default Popconfirm;