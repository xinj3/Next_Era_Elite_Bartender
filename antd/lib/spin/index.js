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
var _classnames = _interopRequireDefault(require("classnames"));
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = require("../config-provider");
var _reactNode = require("../_util/reactNode");
var _type = require("../_util/type");
var _index = _interopRequireDefault(require("./style/index"));
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
var SpinSizes = (0, _type.tuple)('small', 'default', 'large');
// Render indicator
var defaultIndicator = null;
function renderIndicator(prefixCls, props) {
  var indicator = props.indicator;
  var dotClassName = prefixCls + "-dot";
  // should not be render default indicator when indicator value is null
  if (indicator === null) {
    return null;
  }
  if ((0, _reactNode.isValidElement)(indicator)) {
    return (0, _reactNode.cloneElement)(indicator, {
      className: (0, _classnames["default"])(indicator.props.className, dotClassName)
    });
  }
  if ((0, _reactNode.isValidElement)(defaultIndicator)) {
    return (0, _reactNode.cloneElement)(defaultIndicator, {
      className: (0, _classnames["default"])(defaultIndicator.props.className, dotClassName)
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames["default"])(dotClassName, prefixCls + "-dot-spin")
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
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    spinning = _React$useState2[0],
    setSpinning = _React$useState2[1];
  React.useEffect(function () {
    var updateSpinning = (0, _debounce["default"])(function () {
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
    var spinClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls + "-sm", size === 'small'), (0, _defineProperty2["default"])(_classNames, prefixCls + "-lg", size === 'large'), (0, _defineProperty2["default"])(_classNames, prefixCls + "-spinning", spinning), (0, _defineProperty2["default"])(_classNames, prefixCls + "-show-text", !!tip), (0, _defineProperty2["default"])(_classNames, prefixCls + "-rtl", direction === 'rtl'), _classNames), className, hashId);
    // fix https://fb.me/react-unknown-prop
    var divProps = (0, _omit["default"])(restProps, ['indicator', 'prefixCls']);
    var spinElement = /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, divProps, {
      style: style,
      className: spinClassName,
      "aria-live": "polite",
      "aria-busy": spinning
    }), renderIndicator(prefixCls, props), tip ? /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-text"
    }, tip) : null);
    if (isNestedPattern()) {
      var containerClassName = (0, _classnames["default"])(prefixCls + "-container", (0, _defineProperty2["default"])({}, prefixCls + "-blur", spinning));
      return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, divProps, {
        className: (0, _classnames["default"])(prefixCls + "-nested-loading", wrapperClassName, hashId)
      }), spinning && /*#__PURE__*/React.createElement("div", {
        key: "loading"
      }, spinElement), /*#__PURE__*/React.createElement("div", {
        className: containerClassName,
        key: "container"
      }, children));
    }
    return spinElement;
  };
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, renderSpin);
};
var SpinFC = function SpinFC(props) {
  var customizePrefixCls = props.prefixCls;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var spinPrefixCls = getPrefixCls('spin', customizePrefixCls);
  var _useStyle = (0, _index["default"])(spinPrefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var spinClassProps = (0, _extends2["default"])((0, _extends2["default"])({}, props), {
    spinPrefixCls: spinPrefixCls,
    hashId: hashId
  });
  return wrapSSR( /*#__PURE__*/React.createElement(Spin, (0, _extends2["default"])({}, spinClassProps)));
};
SpinFC.setDefaultIndicator = function (indicator) {
  defaultIndicator = indicator;
};
if (process.env.NODE_ENV !== 'production') {
  SpinFC.displayName = 'Spin';
}
var _default = SpinFC;
exports["default"] = _default;