import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
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
import DownOutlined from "@ant-design/icons/es/icons/DownOutlined";
import UpOutlined from "@ant-design/icons/es/icons/UpOutlined";
import classNames from 'classnames';
import RcInputNumber from 'rc-input-number';
import * as React from 'react';
import { useContext } from 'react';
import ConfigProvider, { ConfigContext } from '../config-provider';
import DisabledContext from '../config-provider/DisabledContext';
import SizeContext from '../config-provider/SizeContext';
import { FormItemInputContext, NoFormStyle } from '../form/context';
import { NoCompactStyle, useCompactItemContext } from '../space/Compact';
import { cloneElement } from '../_util/reactNode';
import { getMergedStatus, getStatusClassNames } from '../_util/statusUtils';
import useStyle from './style';
var InputNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = React.useContext(SizeContext);
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
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
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var _useCompactItemContex = useCompactItemContext(prefixCls, direction),
    compactSize = _useCompactItemContex.compactSize,
    compactItemClassnames = _useCompactItemContex.compactItemClassnames;
  var upIcon = /*#__PURE__*/React.createElement(UpOutlined, {
    className: prefixCls + "-handler-up-inner"
  });
  var downIcon = /*#__PURE__*/React.createElement(DownOutlined, {
    className: prefixCls + "-handler-down-inner"
  });
  var controlsTemp = typeof controls === 'boolean' ? controls : undefined;
  if (_typeof(controls) === 'object') {
    upIcon = typeof controls.upIcon === 'undefined' ? upIcon : /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-handler-up-inner"
    }, controls.upIcon);
    downIcon = typeof controls.downIcon === 'undefined' ? downIcon : /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-handler-down-inner"
    }, controls.downIcon);
  }
  var _useContext = useContext(FormItemInputContext),
    hasFeedback = _useContext.hasFeedback,
    contextStatus = _useContext.status,
    isFormItemInput = _useContext.isFormItemInput,
    feedbackIcon = _useContext.feedbackIcon;
  var mergedStatus = getMergedStatus(contextStatus, customStatus);
  var mergeSize = compactSize || customizeSize || size;
  // ===================== Disabled =====================
  var disabled = React.useContext(DisabledContext);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  var inputNumberClass = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls + "-lg", mergeSize === 'large'), _defineProperty(_classNames, prefixCls + "-sm", mergeSize === 'small'), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _defineProperty(_classNames, prefixCls + "-borderless", !bordered), _defineProperty(_classNames, prefixCls + "-in-form-item", isFormItemInput), _classNames), getStatusClassNames(prefixCls, mergedStatus), compactItemClassnames, hashId, className);
  var element = /*#__PURE__*/React.createElement(RcInputNumber, _extends({
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
    var affixWrapperCls = classNames(prefixCls + "-affix-wrapper", getStatusClassNames(prefixCls + "-affix-wrapper", mergedStatus, hasFeedback), (_classNames2 = {}, _defineProperty(_classNames2, prefixCls + "-affix-wrapper-focused", focused), _defineProperty(_classNames2, prefixCls + "-affix-wrapper-disabled", props.disabled), _defineProperty(_classNames2, prefixCls + "-affix-wrapper-sm", mergeSize === 'small'), _defineProperty(_classNames2, prefixCls + "-affix-wrapper-lg", mergeSize === 'large'), _defineProperty(_classNames2, prefixCls + "-affix-wrapper-rtl", direction === 'rtl'), _defineProperty(_classNames2, prefixCls + "-affix-wrapper-readonly", readOnly), _defineProperty(_classNames2, prefixCls + "-affix-wrapper-borderless", !bordered), _defineProperty(_classNames2, "" + className, !(addonBefore || addonAfter) && className), _classNames2), hashId);
    element = /*#__PURE__*/React.createElement("div", {
      className: affixWrapperCls,
      style: props.style,
      onMouseUp: function onMouseUp() {
        return inputRef.current.focus();
      }
    }, prefix && /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-prefix"
    }, prefix), cloneElement(element, {
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
    var mergedWrapperClassName = classNames(prefixCls + "-wrapper", wrapperClassName, hashId, _defineProperty({}, wrapperClassName + "-rtl", direction === 'rtl'));
    var mergedGroupClassName = classNames(prefixCls + "-group-wrapper", (_classNames4 = {}, _defineProperty(_classNames4, prefixCls + "-group-wrapper-sm", mergeSize === 'small'), _defineProperty(_classNames4, prefixCls + "-group-wrapper-lg", mergeSize === 'large'), _defineProperty(_classNames4, prefixCls + "-group-wrapper-rtl", direction === 'rtl'), _classNames4), getStatusClassNames(prefixCls + "-group-wrapper", mergedStatus, hasFeedback), hashId, className);
    element = /*#__PURE__*/React.createElement("div", {
      className: mergedGroupClassName,
      style: props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: mergedWrapperClassName
    }, addonBeforeNode && /*#__PURE__*/React.createElement(NoCompactStyle, null, /*#__PURE__*/React.createElement(NoFormStyle, {
      status: true,
      override: true
    }, addonBeforeNode)), cloneElement(element, {
      style: null,
      disabled: mergedDisabled
    }), addonAfterNode && /*#__PURE__*/React.createElement(NoCompactStyle, null, /*#__PURE__*/React.createElement(NoFormStyle, {
      status: true,
      override: true
    }, addonAfterNode))));
  }
  return wrapSSR(element);
});
var TypedInputNumber = InputNumber;
var PureInputNumber = function PureInputNumber(props) {
  return /*#__PURE__*/React.createElement(ConfigProvider, {
    theme: {
      components: {
        InputNumber: {
          handleVisible: true
        }
      }
    }
  }, /*#__PURE__*/React.createElement(InputNumber, _extends({}, props)));
};
TypedInputNumber._InternalPanelDoNotUseOrYouWillBeFired = PureInputNumber;
export default TypedInputNumber;