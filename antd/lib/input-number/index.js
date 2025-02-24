"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _DownOutlined = _interopRequireDefault(require("@ant-design/icons/DownOutlined"));
var _UpOutlined = _interopRequireDefault(require("@ant-design/icons/UpOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcInputNumber = _interopRequireDefault(require("rc-input-number"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = _interopRequireWildcard(require("../config-provider"));
var _DisabledContext = _interopRequireDefault(require("../config-provider/DisabledContext"));
var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));
var _context = require("../form/context");
var _Compact = require("../space/Compact");
var _reactNode = require("../_util/reactNode");
var _statusUtils = require("../_util/statusUtils");
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
var InputNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = React.useContext(_SizeContext["default"]);
  var _React$useState = React.useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    focused = _React$useState2[0],
    setFocus = _React$useState2[1];
  var inputRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return inputRef.current;
  });
  var className = props.className,
    customizeSize = props.size,
    customDisabled = props.disabled,
    customizePrefixCls = props.prefixCls,
    addonBefore = props.addonBefore,
    addonAfter = props.addonAfter,
    prefix = props.prefix,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    readOnly = props.readOnly,
    customStatus = props.status,
    controls = props.controls,
    others = __rest(props, ["className", "size", "disabled", "prefixCls", "addonBefore", "addonAfter", "prefix", "bordered", "readOnly", "status", "controls"]);
  var prefixCls = getPrefixCls('input-number', customizePrefixCls);
  // Style
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
    compactSize = _useCompactItemContex.compactSize,
    compactItemClassnames = _useCompactItemContex.compactItemClassnames;
  var upIcon = /*#__PURE__*/React.createElement(_UpOutlined["default"], {
    className: prefixCls + "-handler-up-inner"
  });
  var downIcon = /*#__PURE__*/React.createElement(_DownOutlined["default"], {
    className: prefixCls + "-handler-down-inner"
  });
  var controlsTemp = typeof controls === 'boolean' ? controls : undefined;
  if ((0, _typeof2["default"])(controls) === 'object') {
    upIcon = typeof controls.upIcon === 'undefined' ? upIcon : /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-handler-up-inner"
    }, controls.upIcon);
    downIcon = typeof controls.downIcon === 'undefined' ? downIcon : /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-handler-down-inner"
    }, controls.downIcon);
  }
  var _useContext = (0, React.useContext)(_context.FormItemInputContext),
    hasFeedback = _useContext.hasFeedback,
    contextStatus = _useContext.status,
    isFormItemInput = _useContext.isFormItemInput,
    feedbackIcon = _useContext.feedbackIcon;
  var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
  var mergeSize = compactSize || customizeSize || size;
  // ===================== Disabled =====================
  var disabled = React.useContext(_DisabledContext["default"]);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  var inputNumberClass = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls + "-lg", mergeSize === 'large'), (0, _defineProperty2["default"])(_classNames, prefixCls + "-sm", mergeSize === 'small'), (0, _defineProperty2["default"])(_classNames, prefixCls + "-rtl", direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, prefixCls + "-borderless", !bordered), (0, _defineProperty2["default"])(_classNames, prefixCls + "-in-form-item", isFormItemInput), _classNames), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus), compactItemClassnames, hashId, className);
  var element = /*#__PURE__*/React.createElement(_rcInputNumber["default"], (0, _extends2["default"])({
    ref: inputRef,
    disabled: mergedDisabled,
    className: inputNumberClass,
    upHandler: upIcon,
    downHandler: downIcon,
    prefixCls: prefixCls,
    readOnly: readOnly,
    controls: controlsTemp
  }, others));
  if (prefix != null || hasFeedback) {
    var _classNames2;
    var affixWrapperCls = (0, _classnames["default"])(prefixCls + "-affix-wrapper", (0, _statusUtils.getStatusClassNames)(prefixCls + "-affix-wrapper", mergedStatus, hasFeedback), (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, prefixCls + "-affix-wrapper-focused", focused), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-affix-wrapper-disabled", props.disabled), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-affix-wrapper-sm", mergeSize === 'small'), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-affix-wrapper-lg", mergeSize === 'large'), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-affix-wrapper-rtl", direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-affix-wrapper-readonly", readOnly), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-affix-wrapper-borderless", !bordered), (0, _defineProperty2["default"])(_classNames2, "" + className, !(addonBefore || addonAfter) && className), _classNames2), hashId);
    element = /*#__PURE__*/React.createElement("div", {
      className: affixWrapperCls,
      style: props.style,
      onMouseUp: function onMouseUp() {
        return inputRef.current.focus();
      }
    }, prefix && /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-prefix"
    }, prefix), (0, _reactNode.cloneElement)(element, {
      style: null,
      value: props.value,
      onFocus: function onFocus(event) {
        var _a;
        setFocus(true);
        (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, event);
      },
      onBlur: function onBlur(event) {
        var _a;
        setFocus(false);
        (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, event);
      }
    }), hasFeedback && /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-suffix"
    }, feedbackIcon));
  }
  if (addonBefore != null || addonAfter != null) {
    var _classNames4;
    var wrapperClassName = prefixCls + "-group";
    var addonClassName = wrapperClassName + "-addon";
    var addonBeforeNode = addonBefore ? /*#__PURE__*/React.createElement("div", {
      className: addonClassName
    }, addonBefore) : null;
    var addonAfterNode = addonAfter ? /*#__PURE__*/React.createElement("div", {
      className: addonClassName
    }, addonAfter) : null;
    var mergedWrapperClassName = (0, _classnames["default"])(prefixCls + "-wrapper", wrapperClassName, hashId, (0, _defineProperty2["default"])({}, wrapperClassName + "-rtl", direction === 'rtl'));
    var mergedGroupClassName = (0, _classnames["default"])(prefixCls + "-group-wrapper", (_classNames4 = {}, (0, _defineProperty2["default"])(_classNames4, prefixCls + "-group-wrapper-sm", mergeSize === 'small'), (0, _defineProperty2["default"])(_classNames4, prefixCls + "-group-wrapper-lg", mergeSize === 'large'), (0, _defineProperty2["default"])(_classNames4, prefixCls + "-group-wrapper-rtl", direction === 'rtl'), _classNames4), (0, _statusUtils.getStatusClassNames)(prefixCls + "-group-wrapper", mergedStatus, hasFeedback), hashId, className);
    element = /*#__PURE__*/React.createElement("div", {
      className: mergedGroupClassName,
      style: props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: mergedWrapperClassName
    }, addonBeforeNode && /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/React.createElement(_context.NoFormStyle, {
      status: true,
      override: true
    }, addonBeforeNode)), (0, _reactNode.cloneElement)(element, {
      style: null,
      disabled: mergedDisabled
    }), addonAfterNode && /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/React.createElement(_context.NoFormStyle, {
      status: true,
      override: true
    }, addonAfterNode))));
  }
  return wrapSSR(element);
});
var TypedInputNumber = InputNumber;
var PureInputNumber = function PureInputNumber(props) {
  return /*#__PURE__*/React.createElement(_configProvider["default"], {
    theme: {
      components: {
        InputNumber: {
          handleVisible: true
        }
      }
    }
  }, /*#__PURE__*/React.createElement(InputNumber, (0, _extends2["default"])({}, props)));
};
TypedInputNumber._InternalPanelDoNotUseOrYouWillBeFired = PureInputNumber;
var _default = TypedInputNumber;
exports["default"] = _default;