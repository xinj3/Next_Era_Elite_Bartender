import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import genDropdownStyle from './dropdown';
import genMultipleStyle from './multiple';
import genSingleStyle from './single';
import { resetComponent, resetIcon, textEllipsis } from '../../style';
import { genCompactItemStyle } from '../../style/compact-item';
// ============================= Selector =============================
var genSelectorStyle = function genSelectorStyle(token) {
  var _ref, _ref2;
  var componentCls = token.componentCls;
  return _ref2 = {
    position: 'relative',
    backgroundColor: token.colorBgContainer,
    border: token.lineWidth + "px " + token.lineType + " " + token.colorBorder,
    transition: "all " + token.motionDurationMid + " " + token.motionEaseInOut,
    input: {
      cursor: 'pointer'
    }
  }, _defineProperty(_ref2, componentCls + "-show-search&", {
    cursor: 'text',
    input: {
      cursor: 'auto',
      color: 'inherit'
    }
  }), _defineProperty(_ref2, componentCls + "-disabled&", (_ref = {
    color: token.colorTextDisabled,
    background: token.colorBgContainerDisabled,
    cursor: 'not-allowed'
  }, _defineProperty(_ref, componentCls + "-multiple&", {
    background: token.colorBgContainerDisabled
  }), _defineProperty(_ref, "input", {
    cursor: 'not-allowed'
  }), _ref)), _ref2;
};
// ============================== Status ==============================
var genStatusStyle = function genStatusStyle(rootSelectCls, token) {
  var _extends2;
  var overwriteDefaultBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var componentCls = token.componentCls,
    borderHoverColor = token.borderHoverColor,
    outlineColor = token.outlineColor,
    antCls = token.antCls;
  var overwriteStyle = overwriteDefaultBorder ? _defineProperty({}, componentCls + "-selector", {
    borderColor: borderHoverColor
  }) : {};
  return _defineProperty({}, rootSelectCls, _defineProperty({}, "&:not(" + componentCls + "-disabled):not(" + componentCls + "-customize-input):not(" + antCls + "-pagination-size-changer)", _extends(_extends({}, overwriteStyle), (_extends2 = {}, _defineProperty(_extends2, componentCls + "-focused& " + componentCls + "-selector", {
    borderColor: borderHoverColor,
    boxShadow: "0 0 0 " + token.controlOutlineWidth + "px " + outlineColor,
    borderInlineEndWidth: token.controlLineWidth + "px !important",
    outline: 0
  }), _defineProperty(_extends2, "&:hover " + componentCls + "-selector", {
    borderColor: borderHoverColor,
    borderInlineEndWidth: token.controlLineWidth + "px !important"
  }), _extends2))));
};
// ============================== Styles ==============================
// /* Reset search input style */
var getSearchInputWithoutBorderStyle = function getSearchInputWithoutBorderStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls + "-selection-search-input", {
    margin: 0,
    padding: 0,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    appearance: 'none',
    '&::-webkit-search-cancel-button': {
      display: 'none',
      '-webkit-appearance': 'none'
    }
  });
};
// =============================== Base ===============================
var genBaseStyle = function genBaseStyle(token) {
  var _extends3, _extends4, _ref7;
  var componentCls = token.componentCls,
    inputPaddingHorizontalBase = token.inputPaddingHorizontalBase,
    iconCls = token.iconCls;
  return _ref7 = {}, _defineProperty(_ref7, componentCls, _extends(_extends({}, resetComponent(token)), (_extends4 = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer'
  }, _defineProperty(_extends4, "&:not(&-customize-input) " + componentCls + "-selector", _extends(_extends({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token))), _defineProperty(_extends4, componentCls + "-selection-item", _extends({
    flex: 1,
    fontWeight: 'normal'
  }, textEllipsis)), _defineProperty(_extends4, componentCls + "-selection-placeholder", _extends(_extends({}, textEllipsis), {
    flex: 1,
    color: token.colorTextPlaceholder,
    pointerEvents: 'none'
  })), _defineProperty(_extends4, componentCls + "-arrow", _extends(_extends({}, resetIcon()), (_extends3 = {
    position: 'absolute',
    top: '50%',
    insetInlineStart: 'auto',
    insetInlineEnd: inputPaddingHorizontalBase,
    height: token.fontSizeIcon,
    marginTop: -token.fontSizeIcon / 2,
    color: token.colorTextDisabled,
    fontSize: token.fontSizeIcon,
    lineHeight: 1,
    textAlign: 'center',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center'
  }, _defineProperty(_extends3, iconCls, _defineProperty({
    verticalAlign: 'top',
    transition: "transform " + token.motionDurationSlow,
    '> svg': {
      verticalAlign: 'top'
    }
  }, "&:not(" + componentCls + "-suffix)", {
    pointerEvents: 'auto'
  })), _defineProperty(_extends3, componentCls + "-disabled &", {
    cursor: 'not-allowed'
  }), _defineProperty(_extends3, '> *:not(:last-child)', {
    marginInlineEnd: 8 // FIXME: magic
  }), _extends3))), _defineProperty(_extends4, componentCls + "-clear", {
    position: 'absolute',
    top: '50%',
    insetInlineStart: 'auto',
    insetInlineEnd: inputPaddingHorizontalBase,
    zIndex: 1,
    display: 'inline-block',
    width: token.fontSizeIcon,
    height: token.fontSizeIcon,
    marginTop: -token.fontSizeIcon / 2,
    color: token.colorTextDisabled,
    fontSize: token.fontSizeIcon,
    fontStyle: 'normal',
    lineHeight: 1,
    textAlign: 'center',
    textTransform: 'none',
    background: token.colorBgContainer,
    cursor: 'pointer',
    opacity: 0,
    transition: "color " + token.motionDurationMid + " ease, opacity " + token.motionDurationSlow + " ease",
    textRendering: 'auto',
    '&:before': {
      display: 'block'
    },
    '&:hover': {
      color: token.colorTextDescription
    }
  }), _defineProperty(_extends4, '&:hover', _defineProperty({}, componentCls + "-clear", {
    opacity: 1
  })), _extends4))), _defineProperty(_ref7, componentCls + "-has-feedback", _defineProperty({}, componentCls + "-clear", {
    insetInlineEnd: inputPaddingHorizontalBase + token.fontSize + token.paddingXXS
  })), _ref7;
};
// ============================== Styles ==============================
var genSelectStyle = function genSelectStyle(token) {
  var _extends5;
  var componentCls = token.componentCls;
  return [_defineProperty({}, componentCls, _extends((_extends5 = {}, _defineProperty(_extends5, "&-borderless " + componentCls + "-selector", {
    backgroundColor: "transparent !important",
    borderColor: "transparent !important",
    boxShadow: "none !important"
  }), _defineProperty(_extends5, '&&-in-form-item', {
    width: '100%'
  }), _extends5), genCompactItemStyle(token, componentCls, componentCls + "-selector", componentCls + "-focused"))),
  // =====================================================
  // ==                       LTR                       ==
  // =====================================================
  // Base
  genBaseStyle(token),
  // Single
  genSingleStyle(token),
  // Multiple
  genMultipleStyle(token),
  // Dropdown
  genDropdownStyle(token), // =====================================================
  // ==                       RTL                       ==
  // =====================================================
  _defineProperty({}, componentCls + "-rtl", {
    direction: 'rtl'
  }),
  // =====================================================
  // ==                     Status                      ==
  // =====================================================
  genStatusStyle(componentCls, mergeToken(token, {
    borderHoverColor: token.colorPrimaryHover,
    outlineColor: token.controlOutline
  })), genStatusStyle(componentCls + "-status-error", mergeToken(token, {
    borderHoverColor: token.colorErrorHover,
    outlineColor: token.colorErrorOutline
  }), true), genStatusStyle(componentCls + "-status-warning", mergeToken(token, {
    borderHoverColor: token.colorWarningHover,
    outlineColor: token.colorWarningOutline
  }), true)];
};
// ============================== Export ==============================
export default genComponentStyleHook('Select', function (token, _ref10) {
  var rootPrefixCls = _ref10.rootPrefixCls;
  var selectToken = mergeToken(token, {
    rootPrefixCls: rootPrefixCls,
    inputPaddingHorizontalBase: token.controlPaddingHorizontal - 1
  });
  return [genSelectStyle(selectToken)];
}, function (token) {
  return {
    zIndexPopup: token.zIndexPopupBase + 50
  };
});