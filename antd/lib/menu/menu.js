"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _rcMenu = _interopRequireDefault(require("rc-menu"));
var React = _interopRequireWildcard(require("react"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _useEvent = _interopRequireDefault(require("rc-util/lib/hooks/useEvent"));
var _classnames = _interopRequireDefault(require("classnames"));
var _EllipsisOutlined = _interopRequireDefault(require("@ant-design/icons/EllipsisOutlined"));
var _warning = _interopRequireDefault(require("../_util/warning"));
var _motion = _interopRequireDefault(require("../_util/motion"));
var _reactNode = require("../_util/reactNode");
var _configProvider = require("../config-provider");
var _style = _interopRequireDefault(require("./style"));
var _OverrideContext = _interopRequireDefault(require("./OverrideContext"));
var _useItems = _interopRequireDefault(require("./hooks/useItems"));
var _MenuContext = _interopRequireDefault(require("./MenuContext"));
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
var InternalMenu = /*#__PURE__*/(0, React.forwardRef)(function (props, ref) {
  var _a;
  var override = React.useContext(_OverrideContext["default"]);
  var overrideObj = override || {};
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    getPopupContainer = _React$useContext.getPopupContainer,
    direction = _React$useContext.direction;
  var rootPrefixCls = getPrefixCls();
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    _props$theme = props.theme,
    theme = _props$theme === void 0 ? 'light' : _props$theme,
    expandIcon = props.expandIcon,
    _internalDisableMenuItemTitleTooltip = props._internalDisableMenuItemTitleTooltip,
    inlineCollapsed = props.inlineCollapsed,
    siderCollapsed = props.siderCollapsed,
    items = props.items,
    children = props.children,
    rootClassName = props.rootClassName,
    mode = props.mode,
    selectable = props.selectable,
    onClick = props.onClick,
    restProps = __rest(props, ["prefixCls", "className", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "items", "children", "rootClassName", "mode", "selectable", "onClick"]);
  var passedProps = (0, _omit["default"])(restProps, ['collapsedWidth']);
  // ========================= Items ===========================
  var mergedChildren = (0, _useItems["default"])(items) || children;
  // ======================== Warning ==========================
  process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!('inlineCollapsed' in props && mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.') : void 0;
  process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.') : void 0;
  process.env.NODE_ENV !== "production" ? (0, _warning["default"])('items' in props && !children, 'Menu', '`children` will be removed in next major version. Please use `items` instead.') : void 0;
  (_a = overrideObj.validator) === null || _a === void 0 ? void 0 : _a.call(overrideObj, {
    mode: mode
  });
  // ========================== Click ==========================
  // Tell dropdown that item clicked
  var onItemClick = (0, _useEvent["default"])(function () {
    var _a;
    onClick === null || onClick === void 0 ? void 0 : onClick.apply(void 0, arguments);
    (_a = overrideObj.onClick) === null || _a === void 0 ? void 0 : _a.call(overrideObj);
  });
  // ========================== Mode ===========================
  var mergedMode = overrideObj.mode || mode;
  // ======================= Selectable ========================
  var mergedSelectable = selectable !== null && selectable !== void 0 ? selectable : overrideObj.selectable;
  // ======================== Collapsed ========================
  // Inline Collapsed
  var mergedInlineCollapsed = React.useMemo(function () {
    if (siderCollapsed !== undefined) {
      return siderCollapsed;
    }
    return inlineCollapsed;
  }, [inlineCollapsed, siderCollapsed]);
  var defaultMotions = {
    horizontal: {
      motionName: rootPrefixCls + "-slide-up"
    },
    inline: (0, _motion["default"])(rootPrefixCls),
    other: {
      motionName: rootPrefixCls + "-zoom-big"
    }
  };
  var prefixCls = getPrefixCls('menu', customizePrefixCls || overrideObj.prefixCls);
  var _useStyle = (0, _style["default"])(prefixCls, !override),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var menuClassName = (0, _classnames["default"])(prefixCls + "-" + theme, className);
  // ====================== Expand Icon ========================
  var mergedExpandIcon;
  if (typeof expandIcon === 'function') {
    mergedExpandIcon = expandIcon;
  } else {
    mergedExpandIcon = (0, _reactNode.cloneElement)(expandIcon || overrideObj.expandIcon, {
      className: prefixCls + "-submenu-expand-icon"
    });
  }
  // ======================== Context ==========================
  var contextValue = React.useMemo(function () {
    return {
      prefixCls: prefixCls,
      inlineCollapsed: mergedInlineCollapsed || false,
      direction: direction,
      firstLevel: true,
      theme: theme,
      mode: mergedMode,
      disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip
    };
  }, [prefixCls, mergedInlineCollapsed, direction, _internalDisableMenuItemTitleTooltip, theme]);
  // ========================= Render ==========================
  return wrapSSR( /*#__PURE__*/React.createElement(_OverrideContext["default"].Provider, {
    value: null
  }, /*#__PURE__*/React.createElement(_MenuContext["default"].Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(_rcMenu["default"], (0, _extends2["default"])({
    getPopupContainer: getPopupContainer,
    overflowedIndicator: /*#__PURE__*/React.createElement(_EllipsisOutlined["default"], null),
    overflowedIndicatorPopupClassName: prefixCls + "-" + theme,
    mode: mergedMode,
    selectable: mergedSelectable,
    onClick: onItemClick
  }, passedProps, {
    inlineCollapsed: mergedInlineCollapsed,
    className: menuClassName,
    prefixCls: prefixCls,
    direction: direction,
    defaultMotions: defaultMotions,
    expandIcon: mergedExpandIcon,
    ref: ref,
    rootClassName: (0, _classnames["default"])(rootClassName, hashId)
  }), mergedChildren))));
});
var _default = InternalMenu;
exports["default"] = _default;