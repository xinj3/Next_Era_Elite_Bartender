import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { Keyframes } from '@ant-design/cssinjs';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { genFocusOutline, resetComponent } from '../../style';
// ============================== Motion ==============================
var antCheckboxEffect = new Keyframes('antCheckboxEffect', {
  '0%': {
    transform: 'scale(1)',
    opacity: 0.5
  },
  '100%': {
    transform: 'scale(1.6)',
    opacity: 0
  }
});
// ============================== Styles ==============================
export var genCheckboxStyle = function genCheckboxStyle(token) {
  var _extends2, _ref2, _ref5, _ref6, _ref8, _ref9, _ref10;
  var checkboxCls = token.checkboxCls;
  var wrapperCls = checkboxCls + "-wrapper";
  return [(_ref2 = {}, _defineProperty(_ref2, checkboxCls + "-group", _extends(_extends({}, resetComponent(token)), {
    display: 'inline-flex'
  })), _defineProperty(_ref2, wrapperCls, _extends(_extends({}, resetComponent(token)), {
    display: 'inline-flex',
    alignItems: 'baseline',
    lineHeight: 'unset',
    cursor: 'pointer',
    // Fix checkbox & radio in flex align #30260
    '&:after': {
      display: 'inline-block',
      width: 0,
      overflow: 'hidden',
      content: "'\\a0'"
    },
    // Checkbox near checkbox
    '& + &': {
      marginInlineStart: token.marginXS
    },
    '&&-in-form-item': {
      'input[type="checkbox"]': {
        width: 14,
        height: 14 // FIXME: magic
      }
    }
  })), _defineProperty(_ref2, checkboxCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    top: '0.2em',
    position: 'relative',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    cursor: 'pointer'
  }, _defineProperty(_extends2, checkboxCls + "-input", _defineProperty({
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    opacity: 0
  }, "&:focus-visible + " + checkboxCls + "-inner", _extends({}, genFocusOutline(token)))), _defineProperty(_extends2, checkboxCls + "-inner", {
    boxSizing: 'border-box',
    position: 'relative',
    top: 0,
    insetInlineStart: 0,
    display: 'block',
    width: token.checkboxSize,
    height: token.checkboxSize,
    direction: 'ltr',
    backgroundColor: token.colorBgContainer,
    border: token.lineWidth + "px " + token.lineType + " " + token.colorBorder,
    borderRadius: token.borderRadiusSM,
    borderCollapse: 'separate',
    transition: "all " + token.motionDurationSlow,
    '&:after': {
      boxSizing: 'border-box',
      position: 'absolute',
      top: '50%',
      insetInlineStart: '21.5%',
      display: 'table',
      width: token.checkboxSize / 14 * 5,
      height: token.checkboxSize / 14 * 8,
      border: token.lineWidthBold + "px solid " + token.colorWhite,
      borderTop: 0,
      borderInlineStart: 0,
      transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
      opacity: 0,
      content: '""',
      transition: "all " + token.motionDurationFast + " " + token.motionEaseInBack + ", opacity " + token.motionDurationFast
    }
  }), _defineProperty(_extends2, '& + span', {
    paddingInlineStart: token.paddingXS,
    paddingInlineEnd: token.paddingXS
  }), _extends2))), _ref2), // ================= Indeterminate =================
  _defineProperty({}, checkboxCls, {
    '&-indeterminate': _defineProperty({}, checkboxCls + "-inner", {
      '&:after': {
        top: '50%',
        insetInlineStart: '50%',
        width: token.fontSizeLG / 2,
        height: token.fontSizeLG / 2,
        backgroundColor: token.colorPrimary,
        border: 0,
        transform: 'translate(-50%, -50%) scale(1)',
        opacity: 1,
        content: '""'
      }
    })
  }), (_ref5 = {}, _defineProperty(_ref5, wrapperCls + ":hover " + checkboxCls + ":after", {
    visibility: 'visible'
  }), _defineProperty(_ref5, "\n        " + wrapperCls + ":not(" + wrapperCls + "-disabled),\n        " + checkboxCls + ":not(" + checkboxCls + "-disabled)\n      ", _defineProperty({}, "&:hover " + checkboxCls + "-inner", {
    borderColor: token.colorPrimary
  })), _ref5), (_ref8 = {}, _defineProperty(_ref8, checkboxCls + "-checked", (_ref6 = {}, _defineProperty(_ref6, checkboxCls + "-inner", {
    backgroundColor: token.colorPrimary,
    borderColor: token.colorPrimary,
    zIndex: 2,
    '&:after': {
      opacity: 1,
      transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
      transition: "all " + token.motionDurationMid + " " + token.motionEaseOutBack + " " + token.motionDurationFast
    }
  }), _defineProperty(_ref6, '&:after', {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    insetInlineStart: 0,
    width: '100%',
    height: '100%',
    borderRadius: token.borderRadiusSM,
    visibility: 'hidden',
    border: token.lineWidthBold + "px solid " + token.colorPrimary,
    animationName: antCheckboxEffect,
    animationDuration: token.motionDurationSlow,
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'backwards',
    content: '""'
  }), _ref6)), _defineProperty(_ref8, "\n        " + wrapperCls + "-checked:not(" + wrapperCls + "-disabled),\n        " + checkboxCls + "-checked:not(" + checkboxCls + "-disabled)\n      ", _defineProperty({}, "&:hover " + checkboxCls + "-inner", {
    backgroundColor: token.colorPrimaryHover,
    borderColor: 'transparent'
  })), _ref8), (_ref10 = {}, _defineProperty(_ref10, wrapperCls + "-disabled", {
    cursor: 'not-allowed'
  }), _defineProperty(_ref10, checkboxCls + "-disabled", (_ref9 = {}, _defineProperty(_ref9, "&, " + checkboxCls + "-input", {
    cursor: 'not-allowed'
  }), _defineProperty(_ref9, checkboxCls + "-inner", {
    background: token.colorBgContainerDisabled,
    borderColor: token.colorBorder,
    '&:after': {
      borderColor: token.colorTextDisabled
    }
  }), _defineProperty(_ref9, '&:after', {
    display: 'none'
  }), _defineProperty(_ref9, '& + span', {
    color: token.colorTextDisabled
  }), _ref9)), _ref10)];
};
// ============================== Export ==============================
export function getStyle(prefixCls, token) {
  var checkboxToken = mergeToken(token, {
    checkboxCls: "." + prefixCls,
    checkboxSize: token.controlInteractiveSize
  });
  return [genCheckboxStyle(checkboxToken)];
}
export default genComponentStyleHook('Checkbox', function (token, _ref11) {
  var prefixCls = _ref11.prefixCls;
  return [getStyle(prefixCls, token)];
});