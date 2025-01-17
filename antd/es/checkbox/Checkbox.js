import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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
import RcCheckbox from 'rc-checkbox';
import * as React from 'react';
import { useContext } from 'react';
import { ConfigContext } from '../config-provider';
import { FormItemInputContext } from '../form/context';
import warning from '../_util/warning';
import { GroupContext } from './Group';
import DisabledContext from '../config-provider/DisabledContext';
import useStyle from './style';
var InternalCheckbox = function InternalCheckbox(_a, ref) {
  var _classNames;
  var _b;
  var customizePrefixCls = _a.prefixCls,
    className = _a.className,
    children = _a.children,
    _a$indeterminate = _a.indeterminate,
    indeterminate = _a$indeterminate === void 0 ? false : _a$indeterminate,
    style = _a.style,
    onMouseEnter = _a.onMouseEnter,
    onMouseLeave = _a.onMouseLeave,
    _a$skipGroup = _a.skipGroup,
    skipGroup = _a$skipGroup === void 0 ? false : _a$skipGroup,
    disabled = _a.disabled,
    restProps = __rest(_a, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]);
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var checkboxGroup = React.useContext(GroupContext);
  var _useContext = useContext(FormItemInputContext),
    isFormItemInput = _useContext.isFormItemInput;
  var contextDisabled = useContext(DisabledContext);
  var mergedDisabled = (_b = (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.disabled) || disabled) !== null && _b !== void 0 ? _b : contextDisabled;
  var prevValue = React.useRef(restProps.value);
  React.useEffect(function () {
    checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
    process.env.NODE_ENV !== "production" ? warning('checked' in restProps || !!checkboxGroup || !('value' in restProps), 'Checkbox', '`value` is not a valid prop, do you mean `checked`?') : void 0;
  }, []);
  React.useEffect(function () {
    if (skipGroup) {
      return;
    }
    if (restProps.value !== prevValue.current) {
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(prevValue.current);
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
      prevValue.current = restProps.value;
    }
    return function () {
      return checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(restProps.value);
    };
  }, [restProps.value]);
  var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var checkboxProps = _extends({}, restProps);
  if (checkboxGroup && !skipGroup) {
    checkboxProps.onChange = function () {
      if (restProps.onChange) {
        restProps.onChange.apply(restProps, arguments);
      }
      if (checkboxGroup.toggleOption) {
        checkboxGroup.toggleOption({
          label: children,
          value: restProps.value
        });
      }
    };
    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value.includes(restProps.value);
  }
  var classString = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls + "-wrapper", true), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _defineProperty(_classNames, prefixCls + "-wrapper-checked", checkboxProps.checked), _defineProperty(_classNames, prefixCls + "-wrapper-disabled", mergedDisabled), _defineProperty(_classNames, prefixCls + "-wrapper-in-form-item", isFormItemInput), _classNames), className, hashId);
  var checkboxClass = classNames(_defineProperty({}, prefixCls + "-indeterminate", indeterminate), hashId);
  var ariaChecked = indeterminate ? 'mixed' : undefined;
  return wrapSSR(
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  React.createElement("label", {
    className: classString,
    style: style,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/React.createElement(RcCheckbox, _extends({
    "aria-checked": ariaChecked
  }, checkboxProps, {
    prefixCls: prefixCls,
    className: checkboxClass,
    disabled: mergedDisabled,
    ref: ref
  })), children !== undefined && /*#__PURE__*/React.createElement("span", null, children)));
};
var Checkbox = /*#__PURE__*/React.forwardRef(InternalCheckbox);
if (process.env.NODE_ENV !== 'production') {
  Checkbox.displayName = 'Checkbox';
}
export default Checkbox;