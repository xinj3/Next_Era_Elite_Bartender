"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = void 0;
exports["default"] = PurePanel;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleFilled"));
var _classnames = _interopRequireDefault(require("classnames"));
var _button = _interopRequireDefault(require("../button"));
var _button2 = require("../button/button");
var _ActionButton = _interopRequireDefault(require("../_util/ActionButton"));
var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));
var _en_US = _interopRequireDefault(require("../locale/en_US"));
var _getRenderPropValue = require("../_util/getRenderPropValue");
var _configProvider = require("../config-provider");
var _PurePanel = _interopRequireDefault(require("../popover/PurePanel"));
var _style = _interopRequireDefault(require("./style"));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var Overlay = function Overlay(props) {
  var prefixCls = props.prefixCls,
    okButtonProps = props.okButtonProps,
    cancelButtonProps = props.cancelButtonProps,
    title = props.title,
    cancelText = props.cancelText,
    okText = props.okText,
    _props$okType = props.okType,
    okType = _props$okType === void 0 ? 'primary' : _props$okType,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(_ExclamationCircleFilled["default"], null) : _props$icon,
    _props$showCancel = props.showCancel,
    showCancel = _props$showCancel === void 0 ? true : _props$showCancel,
    close = props.close,
    onConfirm = props.onConfirm,
    onCancel = props.onCancel;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "Popconfirm",
    defaultLocale: _en_US["default"].Popconfirm
  }, function (contextLocale) {
    return /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-inner-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-message"
    }, icon && /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-message-icon"
    }, icon), /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-message-title"
    }, (0, _getRenderPropValue.getRenderPropValue)(title))), /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-buttons"
    }, showCancel && /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({
      onClick: onCancel,
      size: "small"
    }, cancelButtonProps), cancelText !== null && cancelText !== void 0 ? cancelText : contextLocale.cancelText), /*#__PURE__*/React.createElement(_ActionButton["default"], {
      buttonProps: (0, _extends2["default"])((0, _extends2["default"])({
        size: 'small'
      }, (0, _button2.convertLegacyProps)(okType)), okButtonProps),
      actionFn: onConfirm,
      close: close,
      prefixCls: getPrefixCls('btn'),
      quitOnNullishReturnValue: true,
      emitEvent: true
    }, okText !== null && okText !== void 0 ? okText : contextLocale.okText)));
  });
};
exports.Overlay = Overlay;
function PurePanel(props) {
  var customizePrefixCls = props.prefixCls,
    placement = props.placement,
    className = props.className,
    style = props.style,
    restProps = __rest(props, ["prefixCls", "placement", "className", "style"]);
  var _React$useContext2 = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext2.getPrefixCls;
  var prefixCls = getPrefixCls('popconfirm', customizePrefixCls);
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 1),
    wrapSSR = _useStyle2[0];
  return wrapSSR( /*#__PURE__*/React.createElement(_PurePanel["default"], {
    placement: placement,
    className: (0, _classnames["default"])(prefixCls, className),
    style: style
  }, /*#__PURE__*/React.createElement(Overlay, (0, _extends2["default"])({}, restProps, {
    prefixCls: prefixCls
  }))));
}