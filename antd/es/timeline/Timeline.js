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
import LoadingOutlined from "@ant-design/icons/es/icons/LoadingOutlined";
import classNames from 'classnames';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import { cloneElement } from '../_util/reactNode';
import TimelineItem from './TimelineItem';
// CSSINJS
import useStyle from './style';
var Timeline = function Timeline(props) {
  var _classNames;
  var _React$useContext = React.useContext(ConfigContext),
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
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var pendingItem = pending ? /*#__PURE__*/React.createElement(TimelineItem, {
    pending: !!pending,
    dot: pendingDot || /*#__PURE__*/React.createElement(LoadingOutlined, null)
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
    return cloneElement(ele, {
      className: classNames([ele.props.className, !reverse && !!pending ? pendingClass : readyClass, getPositionCls(ele, idx)])
    });
  });
  var hasLabelItem = timeLineItems.some(function (item) {
    var _a;
    return !!((_a = item === null || item === void 0 ? void 0 : item.props) === null || _a === void 0 ? void 0 : _a.label);
  });
  var classString = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-pending", !!pending), _defineProperty(_classNames, prefixCls + "-reverse", !!reverse), _defineProperty(_classNames, prefixCls + "-" + mode, !!mode && !hasLabelItem), _defineProperty(_classNames, prefixCls + "-label", hasLabelItem), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _classNames), className);
  return wrapSSR( /*#__PURE__*/React.createElement("ul", _extends({}, restProps, {
    className: classNames(classString, hashId)
  }), items));
};
Timeline.Item = TimelineItem;
export default Timeline;