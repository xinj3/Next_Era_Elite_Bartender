"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureContent = PureContent;
exports.TypeIcon = void 0;
exports["default"] = PurePanel;
exports.getCloseIcon = getCloseIcon;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));
var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleFilled"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));
var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons/CheckCircleFilled"));
var _InfoCircleFilled = _interopRequireDefault(require("@ant-design/icons/InfoCircleFilled"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));
var _rcNotification = require("rc-notification");
var _classnames = _interopRequireDefault(require("classnames"));
var _style = _interopRequireDefault(require("./style"));
var _configProvider = require("../config-provider");
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
var TypeIcon = {
  info: /*#__PURE__*/React.createElement(_InfoCircleFilled["default"], null),
  success: /*#__PURE__*/React.createElement(_CheckCircleFilled["default"], null),
  error: /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null),
  warning: /*#__PURE__*/React.createElement(_ExclamationCircleFilled["default"], null),
  loading: /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null)
};
exports.TypeIcon = TypeIcon;
function getCloseIcon(prefixCls, closeIcon) {
  return closeIcon || /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-close-x"
  }, /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
    className: prefixCls + "-close-icon"
  }));
}
var typeToIcon = {
  success: _CheckCircleFilled["default"],
  info: _InfoCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"]
};
function PureContent(_ref) {
  var prefixCls = _ref.prefixCls,
    icon = _ref.icon,
    type = _ref.type,
    message = _ref.message,
    description = _ref.description,
    btn = _ref.btn;
  var iconNode = null;
  if (icon) {
    iconNode = /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-icon"
    }, icon);
  } else if (type) {
    iconNode = /*#__PURE__*/React.createElement(typeToIcon[type] || null, {
      className: (0, _classnames["default"])(prefixCls + "-icon", prefixCls + "-icon-" + type)
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])((0, _defineProperty2["default"])({}, prefixCls + "-with-icon", iconNode)),
    role: "alert"
  }, iconNode, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-message"
  }, message), /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-description"
  }, description), btn && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-btn"
  }, btn));
}
/** @private Internal Component. Do not use in your production. */
function PurePanel(props) {
  var staticPrefixCls = props.prefixCls,
    className = props.className,
    icon = props.icon,
    type = props.type,
    message = props.message,
    description = props.description,
    btn = props.btn,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? true : _props$closable,
    closeIcon = props.closeIcon,
    restProps = __rest(props, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon"]);
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = staticPrefixCls || getPrefixCls('notification');
  var noticePrefixCls = prefixCls + "-notice";
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    hashId = _useStyle2[1];
  return /*#__PURE__*/React.createElement(_rcNotification.Notice, (0, _extends2["default"])({}, restProps, {
    prefixCls: prefixCls,
    className: (0, _classnames["default"])(className, hashId, noticePrefixCls + "-pure-panel"),
    eventKey: "pure",
    duration: null,
    closable: closable,
    closeIcon: getCloseIcon(prefixCls, closeIcon),
    content: /*#__PURE__*/React.createElement(PureContent, {
      prefixCls: noticePrefixCls,
      icon: icon,
      type: type,
      message: message,
      description: description,
      btn: btn
    })
  }));
}