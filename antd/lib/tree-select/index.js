"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TreeNode", {
  enumerable: true,
  get: function get() {
    return _rcTreeSelect.TreeNode;
  }
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcTreeSelect = _interopRequireWildcard(require("rc-tree-select"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = require("../config-provider");
var _defaultRenderEmpty = _interopRequireDefault(require("../config-provider/defaultRenderEmpty"));
var _DisabledContext = _interopRequireDefault(require("../config-provider/DisabledContext"));
var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));
var _context = require("../form/context");
var _PurePanel = _interopRequireDefault(require("../_util/PurePanel"));
var _style = _interopRequireDefault(require("../select/style"));
var _iconUtil = _interopRequireDefault(require("../select/utils/iconUtil"));
var _iconUtil2 = _interopRequireDefault(require("../tree/utils/iconUtil"));
var _motion = require("../_util/motion");
var _statusUtils = require("../_util/statusUtils");
var _Compact = require("../space/Compact");
var _warning = _interopRequireDefault(require("../_util/warning"));
var _style2 = _interopRequireDefault(require("./style"));
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
var InternalTreeSelect = function InternalTreeSelect(_a, ref) {
  var _classNames2;
  var customizePrefixCls = _a.prefixCls,
    customizeSize = _a.size,
    customDisabled = _a.disabled,
    _a$bordered = _a.bordered,
    bordered = _a$bordered === void 0 ? true : _a$bordered,
    className = _a.className,
    treeCheckable = _a.treeCheckable,
    multiple = _a.multiple,
    _a$listHeight = _a.listHeight,
    listHeight = _a$listHeight === void 0 ? 256 : _a$listHeight,
    _a$listItemHeight = _a.listItemHeight,
    listItemHeight = _a$listItemHeight === void 0 ? 26 : _a$listItemHeight,
    placement = _a.placement,
    notFoundContent = _a.notFoundContent,
    _switcherIcon = _a.switcherIcon,
    treeLine = _a.treeLine,
    getPopupContainer = _a.getPopupContainer,
    popupClassName = _a.popupClassName,
    dropdownClassName = _a.dropdownClassName,
    _a$treeIcon = _a.treeIcon,
    treeIcon = _a$treeIcon === void 0 ? false : _a$treeIcon,
    transitionName = _a.transitionName,
    _a$choiceTransitionNa = _a.choiceTransitionName,
    choiceTransitionName = _a$choiceTransitionNa === void 0 ? '' : _a$choiceTransitionNa,
    customStatus = _a.status,
    showArrow = _a.showArrow,
    treeExpandAction = _a.treeExpandAction,
    props = __rest(_a, ["prefixCls", "size", "disabled", "bordered", "className", "treeCheckable", "multiple", "listHeight", "listItemHeight", "placement", "notFoundContent", "switcherIcon", "treeLine", "getPopupContainer", "popupClassName", "dropdownClassName", "treeIcon", "transitionName", "choiceTransitionName", "status", "showArrow", "treeExpandAction"]);
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getContextPopupContainer = _React$useContext.getPopupContainer,
    getPrefixCls = _React$useContext.getPrefixCls,
    renderEmpty = _React$useContext.renderEmpty,
    direction = _React$useContext.direction,
    virtual = _React$useContext.virtual,
    dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth;
  var size = React.useContext(_SizeContext["default"]);
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? (0, _warning["default"])(multiple !== false || !treeCheckable, 'TreeSelect', '`multiple` will always be `true` when `treeCheckable` is true') : void 0;
    process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!dropdownClassName, 'TreeSelect', '`dropdownClassName` is deprecated. Please use `popupClassName` instead.') : void 0;
  }
  var rootPrefixCls = getPrefixCls();
  var prefixCls = getPrefixCls('select', customizePrefixCls);
  var treePrefixCls = getPrefixCls('select-tree', customizePrefixCls);
  var treeSelectPrefixCls = getPrefixCls('tree-select', customizePrefixCls);
  var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
    compactSize = _useCompactItemContex.compactSize,
    compactItemClassnames = _useCompactItemContex.compactItemClassnames;
  var _useSelectStyle = (0, _style["default"])(prefixCls),
    _useSelectStyle2 = (0, _slicedToArray2["default"])(_useSelectStyle, 2),
    wrapSelectSSR = _useSelectStyle2[0],
    hashId = _useSelectStyle2[1];
  var _useStyle = (0, _style2["default"])(treeSelectPrefixCls, treePrefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 1),
    wrapTreeSelectSSR = _useStyle2[0];
  var mergedDropdownClassName = (0, _classnames["default"])(popupClassName || dropdownClassName, treeSelectPrefixCls + "-dropdown", (0, _defineProperty2["default"])({}, treeSelectPrefixCls + "-dropdown-rtl", direction === 'rtl'), hashId);
  var isMultiple = !!(treeCheckable || multiple);
  var mergedShowArrow = showArrow !== undefined ? showArrow : props.loading || !isMultiple;
  // ===================== Form =====================
  var _useContext = (0, React.useContext)(_context.FormItemInputContext),
    contextStatus = _useContext.status,
    hasFeedback = _useContext.hasFeedback,
    isFormItemInput = _useContext.isFormItemInput,
    feedbackIcon = _useContext.feedbackIcon;
  var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
  // ===================== Icons =====================
  var _getIcons = (0, _iconUtil["default"])((0, _extends2["default"])((0, _extends2["default"])({}, props), {
      multiple: isMultiple,
      showArrow: mergedShowArrow,
      hasFeedback: hasFeedback,
      feedbackIcon: feedbackIcon,
      prefixCls: prefixCls
    })),
    suffixIcon = _getIcons.suffixIcon,
    removeIcon = _getIcons.removeIcon,
    clearIcon = _getIcons.clearIcon;
  // ===================== Empty =====================
  var mergedNotFound;
  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else {
    mergedNotFound = (renderEmpty || _defaultRenderEmpty["default"])('Select');
  }
  // ==================== Render =====================
  var selectProps = (0, _omit["default"])(props, ['suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'switcherIcon']);
  // ===================== Placement =====================
  var getPlacement = function getPlacement() {
    if (placement !== undefined) {
      return placement;
    }
    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };
  var mergedSize = compactSize || customizeSize || size;
  // ===================== Disabled =====================
  var disabled = React.useContext(_DisabledContext["default"]);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  var mergedClassName = (0, _classnames["default"])(!customizePrefixCls && treeSelectPrefixCls, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, prefixCls + "-lg", mergedSize === 'large'), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-sm", mergedSize === 'small'), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-rtl", direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-borderless", !bordered), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-in-form-item", isFormItemInput), _classNames2), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, className, hashId);
  var returnNode = /*#__PURE__*/React.createElement(_rcTreeSelect["default"], (0, _extends2["default"])({
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    disabled: mergedDisabled
  }, selectProps, {
    ref: ref,
    prefixCls: prefixCls,
    className: mergedClassName,
    listHeight: listHeight,
    listItemHeight: listItemHeight,
    treeCheckable: treeCheckable ? /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-tree-checkbox-inner"
    }) : treeCheckable,
    treeLine: !!treeLine,
    inputIcon: suffixIcon,
    multiple: multiple,
    placement: getPlacement(),
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    switcherIcon: function switcherIcon(nodeProps) {
      return (0, _iconUtil2["default"])(treePrefixCls, _switcherIcon, treeLine, nodeProps);
    },
    showTreeIcon: treeIcon,
    notFoundContent: mergedNotFound,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    treeMotion: null,
    dropdownClassName: mergedDropdownClassName,
    choiceTransitionName: (0, _motion.getTransitionName)(rootPrefixCls, '', choiceTransitionName),
    transitionName: (0, _motion.getTransitionName)(rootPrefixCls, (0, _motion.getTransitionDirection)(placement), transitionName),
    showArrow: hasFeedback || showArrow,
    treeExpandAction: treeExpandAction
  }));
  return wrapSelectSSR(wrapTreeSelectSSR(returnNode));
};
var TreeSelectRef = /*#__PURE__*/React.forwardRef(InternalTreeSelect);
var TreeSelect = TreeSelectRef;
// We don't care debug panel
/* istanbul ignore next */
var PurePanel = (0, _PurePanel["default"])(TreeSelect);
TreeSelect.TreeNode = _rcTreeSelect.TreeNode;
TreeSelect.SHOW_ALL = _rcTreeSelect.SHOW_ALL;
TreeSelect.SHOW_PARENT = _rcTreeSelect.SHOW_PARENT;
TreeSelect.SHOW_CHILD = _rcTreeSelect.SHOW_CHILD;
TreeSelect._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
var _default = TreeSelect;
exports["default"] = _default;