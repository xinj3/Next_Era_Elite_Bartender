"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = require("../config-provider");
var _reactNode = require("../_util/reactNode");
var _TimelineItem = _interopRequireDefault(require("./TimelineItem"));
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
var Timeline = function Timeline(props) {
  var _classNames;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls,
    _props$pending = props.pending,
    pending = _props$pending === void 0 ? null : _props$pending,
    pendingDot = props.pendingDot,
    children = props.children,
    className = props.className,
    _props$reverse = props.reverse,
    reverse = _props$reverse === void 0 ? false : _props$reverse,
    _props$mode = props.mode,
    mode = _props$mode === void 0 ? '' : _props$mode,
    restProps = __rest(props, ["prefixCls", "pending", "pendingDot", "children", "className", "reverse", "mode"]);
  var prefixCls = getPrefixCls('timeline', customizePrefixCls);
  var pendingNode = typeof pending === 'boolean' ? null : pending;
  // Style
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var pendingItem = pending ? /*#__PURE__*/React.createElement(_TimelineItem["default"], {
    pending: !!pending,
    dot: pendingDot || /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null)
  }, pendingNode) : null;
  var timeLineItems = React.Children.toArray(children);
  timeLineItems.push(pendingItem);
  if (reverse) {
    timeLineItems.reverse();
  }
  var getPositionCls = function getPositionCls(ele, idx) {
    if (mode === 'alternate') {
      if (ele.props.position === 'right') return prefixCls + "-item-right";
      if (ele.props.position === 'left') return prefixCls + "-item-left";
      return idx % 2 === 0 ? prefixCls + "-item-left" : prefixCls + "-item-right";
    }
    if (mode === 'left') return prefixCls + "-item-left";
    if (mode === 'right') return prefixCls + "-item-right";
    if (ele.props.position === 'right') return prefixCls + "-item-right";
    return '';
  };
  // Remove falsy items
  var truthyItems = timeLineItems.filter(function (item) {
    return !!item;
  });
  var itemsCount = React.Children.count(truthyItems);
  var lastCls = prefixCls + "-item-last";
  var items = React.Children.map(truthyItems, function (ele, idx) {
    var pendingClass = idx === itemsCount - 2 ? lastCls : '';
    var readyClass = idx === itemsCount - 1 ? lastCls : '';
    return (0, _reactNode.cloneElement)(ele, {
      className: (0, _classnames["default"])([ele.props.className, !reverse && !!pending ? pendingClass : readyClass, getPositionCls(ele, idx)])
    });
  });
  var hasLabelItem = timeLineItems.some(function (item) {
    var _a;
    return !!((_a = item === null || item === void 0 ? void 0 : item.props) === null || _a === void 0 ? void 0 : _a.label);
  });
  var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls + "-pending", !!pending), (0, _defineProperty2["default"])(_classNames, prefixCls + "-reverse", !!reverse), (0, _defineProperty2["default"])(_classNames, prefixCls + "-" + mode, !!mode && !hasLabelItem), (0, _defineProperty2["default"])(_classNames, prefixCls + "-label", hasLabelItem), (0, _defineProperty2["default"])(_classNames, prefixCls + "-rtl", direction === 'rtl'), _classNames), className);
  return wrapSSR( /*#__PURE__*/React.createElement("ul", (0, _extends2["default"])({}, restProps, {
    className: (0, _classnames["default"])(classString, hashId)
  }), items));
};
Timeline.Item = _TimelineItem["default"];
var _default = Timeline;
exports["default"] = _default;