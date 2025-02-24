"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends6 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
var _dropdown = _interopRequireDefault(require("./dropdown"));
var _multiple = _interopRequireDefault(require("./multiple"));
var _single = _interopRequireDefault(require("./single"));
var _style = require("../../style");
var _compactItem = require("../../style/compact-item");
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
  }, (0, _defineProperty2["default"])(_ref2, componentCls + "-show-search&", {
    cursor: 'text',
    input: {
      cursor: 'auto',
      color: 'inherit'
    }
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-disabled&", (_ref = {
    color: token.colorTextDisabled,
    background: token.colorBgContainerDisabled,
    cursor: 'not-allowed'
  }, (0, _defineProperty2["default"])(_ref, componentCls + "-multiple&", {
    background: token.colorBgContainerDisabled
  }), (0, _defineProperty2["default"])(_ref, "input", {
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
  var overwriteStyle = overwriteDefaultBorder ? (0, _defineProperty2["default"])({}, componentCls + "-selector", {
    borderColor: borderHoverColor
  }) : {};
  return (0, _defineProperty2["default"])({}, rootSelectCls, (0, _defineProperty2["default"])({}, "&:not(" + componentCls + "-disabled):not(" + componentCls + "-customize-input):not(" + antCls + "-pagination-size-changer)", (0, _extends6["default"])((0, _extends6["default"])({}, overwriteStyle), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, componentCls + "-focused& " + componentCls + "-selector", {
    borderColor: borderHoverColor,
    boxShadow: "0 0 0 " + token.controlOutlineWidth + "px " + outlineColor,
    borderInlineEndWidth: token.controlLineWidth + "px !important",
    outline: 0
  }), (0, _defineProperty2["default"])(_extends2, "&:hover " + componentCls + "-selector", {
    borderColor: borderHoverColor,
    borderInlineEndWidth: token.controlLineWidth + "px !important"
  }), _extends2))));
};
// ============================== Styles ==============================
// /* Reset search input style */
var getSearchInputWithoutBorderStyle = function getSearchInputWithoutBorderStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls + "-selection-search-input", {
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
  return _ref7 = {}, (0, _defineProperty2["default"])(_ref7, componentCls, (0, _extends6["default"])((0, _extends6["default"])({}, (0, _style.resetComponent)(token)), (_extends4 = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer'
  }, (0, _defineProperty2["default"])(_extends4, "&:not(&-customize-input) " + componentCls + "-selector", (0, _extends6["default"])((0, _extends6["default"])({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token))), (0, _defineProperty2["default"])(_extends4, componentCls + "-selection-item", (0, _extends6["default"])({
    flex: 1,
    fontWeight: 'normal'
  }, _style.textEllipsis)), (0, _defineProperty2["default"])(_extends4, componentCls + "-selection-placeholder", (0, _extends6["default"])((0, _extends6["default"])({}, _style.textEllipsis), {
    flex: 1,
    color: token.colorTextPlaceholder,
    pointerEvents: 'none'
  })), (0, _defineProperty2["default"])(_extends4, componentCls + "-arrow", (0, _extends6["default"])((0, _extends6["default"])({}, (0, _style.resetIcon)()), (_extends3 = {
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
  }, (0, _defineProperty2["default"])(_extends3, iconCls, (0, _defineProperty2["default"])({
    verticalAlign: 'top',
    transition: "transform " + token.motionDurationSlow,
    '> svg': {
      verticalAlign: 'top'
    }
  }, "&:not(" + componentCls + "-suffix)", {
    pointerEvents: 'auto'
  })), (0, _defineProperty2["default"])(_extends3, componentCls + "-disabled &", {
    cursor: 'not-allowed'
  }), (0, _defineProperty2["default"])(_extends3, '> *:not(:last-child)', {
    marginInlineEnd: 8 // FIXME: magic
  }), _extends3))), (0, _defineProperty2["default"])(_extends4, componentCls + "-clear", {
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
  }), (0, _defineProperty2["default"])(_extends4, '&:hover', (0, _defineProperty2["default"])({}, componentCls + "-clear", {
    opacity: 1
  })), _extends4))), (0, _defineProperty2["default"])(_ref7, componentCls + "-has-feedback", (0, _defineProperty2["default"])({}, componentCls + "-clear", {
    insetInlineEnd: inputPaddingHorizontalBase + token.fontSize + token.paddingXXS
  })), _ref7;
};
// ============================== Styles ==============================
var genSelectStyle = function genSelectStyle(token) {
  var _extends5;
  var componentCls = token.componentCls;
  return [(0, _defineProperty2["default"])({}, componentCls, (0, _extends6["default"])((_extends5 = {}, (0, _defineProperty2["default"])(_extends5, "&-borderless " + componentCls + "-selector", {
    backgroundColor: "transparent !important",
    borderColor: "transparent !important",
    boxShadow: "none !important"
  }), (0, _defineProperty2["default"])(_extends5, '&&-in-form-item', {
    width: '100%'
  }), _extends5), (0, _compactItem.genCompactItemStyle)(token, componentCls, componentCls + "-selector", componentCls + "-focused"))),
  // =====================================================
  // ==                       LTR                       ==
  // =====================================================
  // Base
  genBaseStyle(token),
  // Single
  (0, _single["default"])(token),
  // Multiple
  (0, _multiple["default"])(token),
  // Dropdown
  (0, _dropdown["default"])(token), // =====================================================
  // ==                       RTL                       ==
  // =====================================================
  (0, _defineProperty2["default"])({}, componentCls + "-rtl", {
    direction: 'rtl'
  }),
  // =====================================================
  // ==                     Status                      ==
  // =====================================================
  genStatusStyle(componentCls, (0, _internal.mergeToken)(token, {
    borderHoverColor: token.colorPrimaryHover,
    outlineColor: token.controlOutline
  })), genStatusStyle(componentCls + "-status-error", (0, _internal.mergeToken)(token, {
    borderHoverColor: token.colorErrorHover,
    outlineColor: token.colorErrorOutline
  }), true), genStatusStyle(componentCls + "-status-warning", (0, _internal.mergeToken)(token, {
    borderHoverColor: token.colorWarningHover,
    outlineColor: token.colorWarningOutline
  }), true)];
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Select', function (token, _ref10) {
  var rootPrefixCls = _ref10.rootPrefixCls;
  var selectToken = (0, _internal.mergeToken)(token, {
    rootPrefixCls: rootPrefixCls,
    inputPaddingHorizontalBase: token.controlPaddingHorizontal - 1
  });
  return [genSelectStyle(selectToken)];
}, function (token) {
  return {
    zIndexPopup: token.zIndexPopupBase + 50
  };
});
exports["default"] = _default;