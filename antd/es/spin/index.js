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
import debounce from 'lodash/debounce';
import omit from "rc-util/es/omit";
import * as React from 'react';
import { ConfigConsumer, ConfigContext } from '../config-provider';
import { cloneElement, isValidElement } from '../_util/reactNode';
import { tuple } from '../_util/type';
import useStyle from './style/index';
var SpinSizes = tuple('small', 'default', 'large');
// Render indicator
var defaultIndicator = null;
function renderIndicator(prefixCls, props) {
  var indicator = props.indicator;
  var dotClassName = prefixCls + "-dot";
  // should not be render default indicator when indicator value is null
  if (indicator === null) {
    return null;
  }
  if (isValidElement(indicator)) {
    return cloneElement(indicator, {
      className: classNames(indicator.props.className, dotClassName)
    });
  }
  if (isValidElement(defaultIndicator)) {
    return cloneElement(defaultIndicator, {
      className: classNames(defaultIndicator.props.className, dotClassName)
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    className: classNames(dotClassName, prefixCls + "-dot-spin")
  }, /*#__PURE__*/React.createElement("i", {
    className: prefixCls + "-dot-item"
  }), /*#__PURE__*/React.createElement("i", {
    className: prefixCls + "-dot-item"
  }), /*#__PURE__*/React.createElement("i", {
    className: prefixCls + "-dot-item"
  }), /*#__PURE__*/React.createElement("i", {
    className: prefixCls + "-dot-item"
  }));
}
function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}
var Spin = function Spin(props) {
  var prefixCls = props.spinPrefixCls,
    _props$spinning = props.spinning,
    customSpinning = _props$spinning === void 0 ? true : _props$spinning,
    delay = props.delay,
    className = props.className,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size,
    tip = props.tip,
    wrapperClassName = props.wrapperClassName,
    style = props.style,
    children = props.children,
    hashId = props.hashId,
    restProps = __rest(props, ["spinPrefixCls", "spinning", "delay", "className", "size", "tip", "wrapperClassName", "style", "children", "hashId"]);
  var _React$useState = React.useState(function () {
      return customSpinning && !shouldDelay(customSpinning, delay);
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    spinning = _React$useState2[0],
    setSpinning = _React$useState2[1];
  React.useEffect(function () {
    var updateSpinning = debounce(function () {
      setSpinning(customSpinning);
    }, delay);
    updateSpinning();
    return function () {
      var _a;
      (_a = updateSpinning === null || updateSpinning === void 0 ? void 0 : updateSpinning.cancel) === null || _a === void 0 ? void 0 : _a.call(updateSpinning);
    };
  }, [delay, customSpinning]);
  var isNestedPattern = function isNestedPattern() {
    return typeof children !== 'undefined';
  };
  var renderSpin = function renderSpin(_ref) {
    var _classNames;
    var direction = _ref.direction;
    var spinClassName = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-sm", size === 'small'), _defineProperty(_classNames, prefixCls + "-lg", size === 'large'), _defineProperty(_classNames, prefixCls + "-spinning", spinning), _defineProperty(_classNames, prefixCls + "-show-text", !!tip), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _classNames), className, hashId);
    // fix https://fb.me/react-unknown-prop
    var divProps = omit(restProps, ['indicator', 'prefixCls']);
    var spinElement = /*#__PURE__*/React.createElement("div", _extends({}, divProps, {
      style: style,
      className: spinClassName,
      "aria-live": "polite",
      "aria-busy": spinning
    }), renderIndicator(prefixCls, props), tip ? /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-text"
    }, tip) : null);
    if (isNestedPattern()) {
      var containerClassName = classNames(prefixCls + "-container", _defineProperty({}, prefixCls + "-blur", spinning));
      return /*#__PURE__*/React.createElement("div", _extends({}, divProps, {
        className: classNames(prefixCls + "-nested-loading", wrapperClassName, hashId)
      }), spinning && /*#__PURE__*/React.createElement("div", {
        key: "loading"
      }, spinElement), /*#__PURE__*/React.createElement("div", {
        className: containerClassName,
        key: "container"
      }, children));
    }
    return spinElement;
  };
  return /*#__PURE__*/React.createElement(ConfigConsumer, null, renderSpin);
};
var SpinFC = function SpinFC(props) {
  var customizePrefixCls = props.prefixCls;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var spinPrefixCls = getPrefixCls('spin', customizePrefixCls);
  var _useStyle = useStyle(spinPrefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var spinClassProps = _extends(_extends({}, props), {
    spinPrefixCls: spinPrefixCls,
    hashId: hashId
  });
  return wrapSSR( /*#__PURE__*/React.createElement(Spin, _extends({}, spinClassProps)));
};
SpinFC.setDefaultIndicator = function (indicator) {
  defaultIndicator = indicator;
};
if (process.env.NODE_ENV !== 'production') {
  SpinFC.displayName = 'Spin';
}
export default SpinFC;