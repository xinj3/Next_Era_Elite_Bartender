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
import toArray from "rc-util/es/Children/toArray";
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import useFlexGapSupport from '../_util/hooks/useFlexGapSupport';
import Item from './Item';
import Compact from './Compact';
import useStyle from './style';
export var SpaceContext = /*#__PURE__*/React.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false
});
var spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};
function getNumberSize(size) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}
var Space = function Space(props) {
  var _classNames;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    space = _React$useContext.space,
    directionConfig = _React$useContext.direction;
  var _props$size = props.size,
    size = _props$size === void 0 ? (space === null || space === void 0 ? void 0 : space.size) || 'small' : _props$size,
    align = props.align,
    className = props.className,
    children = props.children,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
    customizePrefixCls = props.prefixCls,
    split = props.split,
    style = props.style,
    _props$wrap = props.wrap,
    wrap = _props$wrap === void 0 ? false : _props$wrap,
    otherProps = __rest(props, ["size", "align", "className", "children", "direction", "prefixCls", "split", "style", "wrap"]);
  var supportFlexGap = useFlexGapSupport();
  var _React$useMemo = React.useMemo(function () {
      return (Array.isArray(size) ? size : [size, size]).map(function (item) {
        return getNumberSize(item);
      });
    }, [size]),
    _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
    horizontalSize = _React$useMemo2[0],
    verticalSize = _React$useMemo2[1];
  var childNodes = toArray(children, {
    keepEmpty: true
  });
  var mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  var prefixCls = getPrefixCls('space', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var cn = classNames(prefixCls, hashId, prefixCls + "-" + direction, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-rtl", directionConfig === 'rtl'), _defineProperty(_classNames, prefixCls + "-align-" + mergedAlign, mergedAlign), _classNames), className);
  var itemClassName = prefixCls + "-item";
  var marginDirection = directionConfig === 'rtl' ? 'marginLeft' : 'marginRight';
  // Calculate latest one
  var latestIndex = 0;
  var nodes = childNodes.map(function (child, i) {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    var key = child && child.key || itemClassName + "-" + i;
    return /*#__PURE__*/React.createElement(Item, {
      className: itemClassName,
      key: key,
      direction: direction,
      index: i,
      marginDirection: marginDirection,
      split: split,
      wrap: wrap
    }, child);
  });
  var spaceContext = React.useMemo(function () {
    return {
      horizontalSize: horizontalSize,
      verticalSize: verticalSize,
      latestIndex: latestIndex,
      supportFlexGap: supportFlexGap
    };
  }, [horizontalSize, verticalSize, latestIndex, supportFlexGap]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  var gapStyle = {};
  if (wrap) {
    gapStyle.flexWrap = 'wrap';
    // Patch for gap not support
    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize;
    }
  }
  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize;
    gapStyle.rowGap = verticalSize;
  }
  return wrapSSR( /*#__PURE__*/React.createElement("div", _extends({
    className: cn,
    style: _extends(_extends({}, gapStyle), style)
  }, otherProps), /*#__PURE__*/React.createElement(SpaceContext.Provider, {
    value: spaceContext
  }, nodes)));
};
var CompoundedSpace = Space;
CompoundedSpace.Compact = Compact;
export default CompoundedSpace;