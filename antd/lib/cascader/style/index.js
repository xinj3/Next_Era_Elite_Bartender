"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _style = require("../../checkbox/style");
var _internal = require("../../theme/internal");
var _style2 = require("../../style");
var _compactItem = require("../../style/compact-item");
// =============================== Base ===============================
var genBaseStyle = function genBaseStyle(token) {
  var _extends2;
  var prefixCls = token.prefixCls,
    componentCls = token.componentCls,
    antCls = token.antCls;
  var cascaderMenuItemCls = componentCls + "-menu-item";
  var iconCls = "\n    &" + cascaderMenuItemCls + "-expand " + cascaderMenuItemCls + "-expand-icon,\n    " + cascaderMenuItemCls + "-loading-icon\n  ";
  var itemPaddingVertical = Math.round((token.controlHeight - token.fontSize * token.lineHeight) / 2);
  return [// =====================================================
  // ==                     Control                     ==
  // =====================================================
  (0, _defineProperty2["default"])({}, componentCls, (0, _extends3["default"])({
    width: token.controlWidth
  }, (0, _compactItem.genCompactItemStyle)(token, componentCls))), // =====================================================
  // ==                      Popup                      ==
  // =====================================================
  (0, _defineProperty2["default"])({}, componentCls + "-dropdown", [
  // ==================== Checkbox ====================
  (0, _style.getStyle)(prefixCls + "-checkbox", token), (0, _defineProperty2["default"])({}, "&" + antCls + "-select-dropdown", {
    padding: 0
  }), (0, _defineProperty2["default"])({}, componentCls, {
    // ================== Checkbox ==================
    '&-checkbox': {
      top: 0,
      marginInlineEnd: token.paddingXS
    },
    // ==================== Menu ====================
    // >>> Menus
    '&-menus': (0, _defineProperty2["default"])({
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'flex-start'
    }, "&" + componentCls + "-menu-empty", (0, _defineProperty2["default"])({}, componentCls + "-menu", (0, _defineProperty2["default"])({
      width: '100%',
      height: 'auto'
    }, cascaderMenuItemCls, {
      color: token.colorTextDisabled,
      cursor: 'default',
      pointerEvents: 'none'
    }))),
    // >>> Menu
    '&-menu': {
      flexGrow: 1,
      minWidth: token.controlItemWidth,
      height: token.dropdownHeight,
      padding: token.paddingXXS,
      overflow: 'auto',
      verticalAlign: 'top',
      listStyle: 'none',
      '-ms-overflow-style': '-ms-autohiding-scrollbar',
      '&:not(:last-child)': {
        borderInlineEnd: token.lineWidth + "px " + token.lineType + " " + token.colorSplit
      },
      '&-item': (0, _extends3["default"])((0, _extends3["default"])({}, _style2.textEllipsis), (_extends2 = {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        padding: itemPaddingVertical + "px " + token.paddingSM + "px",
        lineHeight: token.lineHeight,
        cursor: 'pointer',
        transition: "all " + token.motionDurationMid,
        borderRadius: token.borderRadiusSM,
        '&:hover': {
          background: token.controlItemBgHover
        },
        ' &-disabled': (0, _defineProperty2["default"])({
          color: token.colorTextDisabled,
          cursor: 'not-allowed',
          '&:hover': {
            background: 'transparent'
          }
        }, iconCls, {
          color: token.colorTextDisabled
        })
      }, (0, _defineProperty2["default"])(_extends2, "&-active:not(" + cascaderMenuItemCls + "-disabled)", (0, _defineProperty2["default"])({}, "&, &:hover", {
        fontWeight: token.fontWeightStrong,
        backgroundColor: token.controlItemBgActive
      })), (0, _defineProperty2["default"])(_extends2, '&-content', {
        flex: 'auto'
      }), (0, _defineProperty2["default"])(_extends2, iconCls, {
        marginInlineStart: token.paddingXXS,
        color: token.colorTextDescription,
        fontSize: token.fontSizeIcon
      }), (0, _defineProperty2["default"])(_extends2, '&-keyword', {
        color: token.colorHighlight
      }), _extends2))
    }
  })]), // =====================================================
  // ==                       RTL                       ==
  // =====================================================
  (0, _defineProperty2["default"])({}, componentCls + "-dropdown-rtl", {
    direction: 'rtl'
  })];
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Cascader', function (token) {
  return [genBaseStyle(token)];
}, {
  controlWidth: 184,
  controlItemWidth: 111,
  dropdownHeight: 180
});
exports["default"] = _default;