"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ItemHolder;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons/CheckCircleFilled"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));
var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleFilled"));
var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));
var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _grid = require("../../grid");
var _FormItemLabel = _interopRequireDefault(require("../FormItemLabel"));
var _FormItemInput = _interopRequireDefault(require("../FormItemInput"));
var _context = require("../context");
var _useDebounce = _interopRequireDefault(require("../hooks/useDebounce"));
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
var iconMap = {
  success: _CheckCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  validating: _LoadingOutlined["default"]
};
function ItemHolder(props) {
  var _itemClassName;
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    help = props.help,
    errors = props.errors,
    warnings = props.warnings,
    validateStatus = props.validateStatus,
    meta = props.meta,
    hasFeedback = props.hasFeedback,
    hidden = props.hidden,
    children = props.children,
    fieldId = props.fieldId,
    isRequired = props.isRequired,
    onSubItemMetaChange = props.onSubItemMetaChange,
    restProps = __rest(props, ["prefixCls", "className", "style", "help", "errors", "warnings", "validateStatus", "meta", "hasFeedback", "hidden", "children", "fieldId", "isRequired", "onSubItemMetaChange"]);
  var itemPrefixCls = prefixCls + "-item";
  var _React$useContext = React.useContext(_context.FormContext),
    requiredMark = _React$useContext.requiredMark;
  // ======================== Margin ========================
  var itemRef = React.useRef(null);
  var debounceErrors = (0, _useDebounce["default"])(errors);
  var debounceWarnings = (0, _useDebounce["default"])(warnings);
  var hasHelp = help !== undefined && help !== null;
  var hasError = !!(hasHelp || errors.length || warnings.length);
  var _React$useState = React.useState(null),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    marginBottom = _React$useState2[0],
    setMarginBottom = _React$useState2[1];
  (0, _useLayoutEffect["default"])(function () {
    if (hasError && itemRef.current) {
      var itemStyle = getComputedStyle(itemRef.current);
      setMarginBottom(parseInt(itemStyle.marginBottom, 10));
    }
  }, [hasError]);
  var onErrorVisibleChanged = function onErrorVisibleChanged(nextVisible) {
    if (!nextVisible) {
      setMarginBottom(null);
    }
  };
  // ======================== Status ========================
  var mergedValidateStatus = '';
  if (validateStatus !== undefined) {
    mergedValidateStatus = validateStatus;
  } else if (meta.validating) {
    mergedValidateStatus = 'validating';
  } else if (debounceErrors.length) {
    mergedValidateStatus = 'error';
  } else if (debounceWarnings.length) {
    mergedValidateStatus = 'warning';
  } else if (meta.touched) {
    mergedValidateStatus = 'success';
  }
  var formItemStatusContext = React.useMemo(function () {
    var feedbackIcon;
    if (hasFeedback) {
      var IconNode = mergedValidateStatus && iconMap[mergedValidateStatus];
      feedbackIcon = IconNode ? /*#__PURE__*/React.createElement("span", {
        className: (0, _classnames["default"])(itemPrefixCls + "-feedback-icon", itemPrefixCls + "-feedback-icon-" + mergedValidateStatus)
      }, /*#__PURE__*/React.createElement(IconNode, null)) : null;
    }
    return {
      status: mergedValidateStatus,
      hasFeedback: hasFeedback,
      feedbackIcon: feedbackIcon,
      isFormItemInput: true
    };
  }, [mergedValidateStatus, hasFeedback]);
  // ======================== Render ========================
  var itemClassName = (_itemClassName = {}, (0, _defineProperty2["default"])(_itemClassName, itemPrefixCls, true), (0, _defineProperty2["default"])(_itemClassName, itemPrefixCls + "-with-help", hasHelp || debounceErrors.length || debounceWarnings.length), (0, _defineProperty2["default"])(_itemClassName, "" + className, !!className), (0, _defineProperty2["default"])(_itemClassName, itemPrefixCls + "-has-feedback", mergedValidateStatus && hasFeedback), (0, _defineProperty2["default"])(_itemClassName, itemPrefixCls + "-has-success", mergedValidateStatus === 'success'), (0, _defineProperty2["default"])(_itemClassName, itemPrefixCls + "-has-warning", mergedValidateStatus === 'warning'), (0, _defineProperty2["default"])(_itemClassName, itemPrefixCls + "-has-error", mergedValidateStatus === 'error'), (0, _defineProperty2["default"])(_itemClassName, itemPrefixCls + "-is-validating", mergedValidateStatus === 'validating'), (0, _defineProperty2["default"])(_itemClassName, itemPrefixCls + "-hidden", hidden), _itemClassName);
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])(itemClassName),
    style: style,
    ref: itemRef
  }, /*#__PURE__*/React.createElement(_grid.Row, (0, _extends2["default"])({
    className: itemPrefixCls + "-row"
  }, (0, _omit["default"])(restProps, ['_internalItemRender', 'colon', 'dependencies', 'extra', 'fieldKey', 'getValueFromEvent', 'getValueProps', 'htmlFor', 'id', 'initialValue', 'isListField', 'label', 'labelAlign', 'labelCol', 'labelWrap', 'messageVariables', 'name', 'normalize', 'noStyle', 'preserve', 'required', 'requiredMark', 'rules', 'shouldUpdate', 'trigger', 'tooltip', 'validateFirst', 'validateTrigger', 'valuePropName', 'wrapperCol'])), /*#__PURE__*/React.createElement(_FormItemLabel["default"], (0, _extends2["default"])({
    htmlFor: fieldId,
    required: isRequired,
    requiredMark: requiredMark
  }, props, {
    prefixCls: prefixCls
  })), /*#__PURE__*/React.createElement(_FormItemInput["default"], (0, _extends2["default"])({}, props, meta, {
    errors: debounceErrors,
    warnings: debounceWarnings,
    prefixCls: prefixCls,
    status: mergedValidateStatus,
    help: help,
    marginBottom: marginBottom,
    onErrorVisibleChanged: onErrorVisibleChanged
  }), /*#__PURE__*/React.createElement(_context.NoStyleItemContext.Provider, {
    value: onSubItemMetaChange
  }, /*#__PURE__*/React.createElement(_context.FormItemInputContext.Provider, {
    value: formItemStatusContext
  }, children)))), !!marginBottom && /*#__PURE__*/React.createElement("div", {
    className: itemPrefixCls + "-margin-offset",
    style: {
      marginBottom: -marginBottom
    }
  }));
}