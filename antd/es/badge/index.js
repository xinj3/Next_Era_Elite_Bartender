import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _extends from "@babel/runtime/helpers/esm/extends";
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
import CSSMotion from 'rc-motion';
import * as React from 'react';
import { useMemo, useRef } from 'react';
import { ConfigContext } from '../config-provider';
import { cloneElement } from '../_util/reactNode';
import Ribbon from './Ribbon';
import ScrollNumber from './ScrollNumber';
import useStyle from './style';
import { isPresetColor } from './utils';
var Badge = function Badge(_a) {
  var _classNames, _classNames2;
  var customizePrefixCls = _a.prefixCls,
    customizeScrollNumberPrefixCls = _a.scrollNumberPrefixCls,
    children = _a.children,
    status = _a.status,
    text = _a.text,
    color = _a.color,
    _a$count = _a.count,
    count = _a$count === void 0 ? null : _a$count,
    _a$overflowCount = _a.overflowCount,
    overflowCount = _a$overflowCount === void 0 ? 99 : _a$overflowCount,
    _a$dot = _a.dot,
    dot = _a$dot === void 0 ? false : _a$dot,
    _a$size = _a.size,
    size = _a$size === void 0 ? 'default' : _a$size,
    title = _a.title,
    offset = _a.offset,
    style = _a.style,
    className = _a.className,
    _a$showZero = _a.showZero,
    showZero = _a$showZero === void 0 ? false : _a$showZero,
    restProps = __rest(_a, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color", "count", "overflowCount", "dot", "size", "title", "offset", "style", "className", "showZero"]);
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('badge', customizePrefixCls);
  // Style
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  // ================================ Misc ================================
  var numberedDisplayCount = count > overflowCount ? overflowCount + "+" : count;
  var isZero = numberedDisplayCount === '0' || numberedDisplayCount === 0;
  var ignoreCount = count === null || isZero && !showZero;
  var hasStatus = (status !== null && status !== undefined || color !== null && color !== undefined) && ignoreCount;
  var showAsDot = dot && !isZero;
  var mergedCount = showAsDot ? '' : numberedDisplayCount;
  var isHidden = useMemo(function () {
    var isEmpty = mergedCount === null || mergedCount === undefined || mergedCount === '';
    return (isEmpty || isZero && !showZero) && !showAsDot;
  }, [mergedCount, isZero, showZero, showAsDot]);
  // Count should be cache in case hidden change it
  var countRef = useRef(count);
  if (!isHidden) {
    countRef.current = count;
  }
  var livingCount = countRef.current;
  // We need cache count since remove motion should not change count display
  var displayCountRef = useRef(mergedCount);
  if (!isHidden) {
    displayCountRef.current = mergedCount;
  }
  var displayCount = displayCountRef.current;
  // We will cache the dot status to avoid shaking on leaved motion
  var isDotRef = useRef(showAsDot);
  if (!isHidden) {
    isDotRef.current = showAsDot;
  }
  // =============================== Styles ===============================
  var mergedStyle = useMemo(function () {
    if (!offset) {
      return _extends({}, style);
    }
    var offsetStyle = {
      marginTop: offset[1]
    };
    if (direction === 'rtl') {
      offsetStyle.left = parseInt(offset[0], 10);
    } else {
      offsetStyle.right = -parseInt(offset[0], 10);
    }
    return _extends(_extends({}, offsetStyle), style);
  }, [direction, offset, style]);
  // =============================== Render ===============================
  // >>> Title
  var titleNode = title !== null && title !== void 0 ? title : typeof livingCount === 'string' || typeof livingCount === 'number' ? livingCount : undefined;
  // >>> Status Text
  var statusTextNode = isHidden || !text ? null : /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-status-text"
  }, text);
  // >>> Display Component
  var displayNode = !livingCount || _typeof(livingCount) !== 'object' ? undefined : cloneElement(livingCount, function (oriProps) {
    return {
      style: _extends(_extends({}, mergedStyle), oriProps.style)
    };
  });
  // Shared styles
  var statusCls = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls + "-status-dot", hasStatus), _defineProperty(_classNames, prefixCls + "-status-" + status, !!status), _defineProperty(_classNames, prefixCls + "-status-" + color, isPresetColor(color)), _classNames));
  var statusStyle = {};
  if (color && !isPresetColor(color)) {
    statusStyle.background = color;
  }
  var badgeClassName = classNames(prefixCls, (_classNames2 = {}, _defineProperty(_classNames2, prefixCls + "-status", hasStatus), _defineProperty(_classNames2, prefixCls + "-not-a-wrapper", !children), _defineProperty(_classNames2, prefixCls + "-rtl", direction === 'rtl'), _classNames2), className);
  // <Badge status="success" />
  if (!children && hasStatus) {
    var statusTextColor = mergedStyle.color;
    return wrapSSR( /*#__PURE__*/React.createElement("span", _extends({}, restProps, {
      className: classNames(badgeClassName, hashId),
      style: mergedStyle
    }), /*#__PURE__*/React.createElement("span", {
      className: statusCls,
      style: statusStyle
    }), text && /*#__PURE__*/React.createElement("span", {
      style: {
        color: statusTextColor
      },
      className: prefixCls + "-status-text"
    }, text)));
  }
  // <Badge status="success" count={<Icon type="xxx" />}></Badge>
  return wrapSSR( /*#__PURE__*/React.createElement("span", _extends({}, restProps, {
    className: classNames(badgeClassName, hashId)
  }), children, /*#__PURE__*/React.createElement(CSSMotion, {
    visible: !isHidden,
    motionName: prefixCls + "-zoom",
    motionAppear: false,
    motionDeadline: 1000
  }, function (_ref) {
    var _classNames3;
    var motionClassName = _ref.className;
    var scrollNumberPrefixCls = getPrefixCls('scroll-number', customizeScrollNumberPrefixCls);
    var isDot = isDotRef.current;
    var scrollNumberCls = classNames((_classNames3 = {}, _defineProperty(_classNames3, prefixCls + "-dot", isDot), _defineProperty(_classNames3, prefixCls + "-count", !isDot), _defineProperty(_classNames3, prefixCls + "-count-sm", size === 'small'), _defineProperty(_classNames3, prefixCls + "-multiple-words", !isDot && displayCount && displayCount.toString().length > 1), _defineProperty(_classNames3, prefixCls + "-status-" + status, !!status), _defineProperty(_classNames3, prefixCls + "-status-" + color, isPresetColor(color)), _classNames3));
    var scrollNumberStyle = _extends({}, mergedStyle);
    if (color && !isPresetColor(color)) {
      scrollNumberStyle = scrollNumberStyle || {};
      scrollNumberStyle.background = color;
    }
    return /*#__PURE__*/React.createElement(ScrollNumber, {
      prefixCls: scrollNumberPrefixCls,
      show: !isHidden,
      motionClassName: motionClassName,
      className: scrollNumberCls,
      count: displayCount,
      title: titleNode,
      style: scrollNumberStyle,
      key: "scrollNumber"
    }, displayNode);
  }), statusTextNode));
};
Badge.Ribbon = Ribbon;
export default Badge;