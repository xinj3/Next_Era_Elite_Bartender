import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { getStyle as getCheckboxStyle } from '../../checkbox/style';
import { genComponentStyleHook } from '../../theme/internal';
import { textEllipsis } from '../../style';
import { genCompactItemStyle } from '../../style/compact-item';
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
  _defineProperty({}, componentCls, _extends({
    width: token.controlWidth
  }, genCompactItemStyle(token, componentCls))), // =====================================================
  // ==                      Popup                      ==
  // =====================================================
  _defineProperty({}, componentCls + "-dropdown", [
  // ==================== Checkbox ====================
  getCheckboxStyle(prefixCls + "-checkbox", token), _defineProperty({}, "&" + antCls + "-select-dropdown", {
    padding: 0
  }), _defineProperty({}, componentCls, {
    // ================== Checkbox ==================
    '&-checkbox': {
      top: 0,
      marginInlineEnd: token.paddingXS
    },
    // ==================== Menu ====================
    // >>> Menus
    '&-menus': _defineProperty({
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'flex-start'
    }, "&" + componentCls + "-menu-empty", _defineProperty({}, componentCls + "-menu", _defineProperty({
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
      '&-item': _extends(_extends({}, textEllipsis), (_extends2 = {
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
        ' &-disabled': _defineProperty({
          color: token.colorTextDisabled,
          cursor: 'not-allowed',
          '&:hover': {
            background: 'transparent'
          }
        }, iconCls, {
          color: token.colorTextDisabled
        })
      }, _defineProperty(_extends2, "&-active:not(" + cascaderMenuItemCls + "-disabled)", _defineProperty({}, "&, &:hover", {
        fontWeight: token.fontWeightStrong,
        backgroundColor: token.controlItemBgActive
      })), _defineProperty(_extends2, '&-content', {
        flex: 'auto'
      }), _defineProperty(_extends2, iconCls, {
        marginInlineStart: token.paddingXXS,
        color: token.colorTextDescription,
        fontSize: token.fontSizeIcon
      }), _defineProperty(_extends2, '&-keyword', {
        color: token.colorHighlight
      }), _extends2))
    }
  })]), // =====================================================
  // ==                       RTL                       ==
  // =====================================================
  _defineProperty({}, componentCls + "-dropdown-rtl", {
    direction: 'rtl'
  })];
};
// ============================== Export ==============================
export default genComponentStyleHook('Cascader', function (token) {
  return [genBaseStyle(token)];
}, {
  controlWidth: 184,
  controlItemWidth: 111,
  dropdownHeight: 180
});