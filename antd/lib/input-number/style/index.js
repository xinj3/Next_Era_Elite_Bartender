"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends5 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _style = require("../../input/style");
var _internal = require("../../theme/internal");
var _style2 = require("../../style");
var _compactItem = require("../../style/compact-item");
var genInputNumberStyles = function genInputNumberStyles(token) {
  var _wrapper, _componentCls;
  var componentCls = token.componentCls,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    colorBorder = token.colorBorder,
    borderRadius = token.borderRadius,
    fontSizeLG = token.fontSizeLG,
    controlHeightLG = token.controlHeightLG,
    controlHeightSM = token.controlHeightSM,
    colorError = token.colorError,
    inputPaddingHorizontalSM = token.inputPaddingHorizontalSM,
    colorTextDescription = token.colorTextDescription,
    motionDurationMid = token.motionDurationMid,
    colorPrimary = token.colorPrimary,
    controlHeight = token.controlHeight,
    inputPaddingHorizontal = token.inputPaddingHorizontal,
    colorBgContainer = token.colorBgContainer,
    colorTextDisabled = token.colorTextDisabled,
    borderRadiusSM = token.borderRadiusSM,
    borderRadiusLG = token.borderRadiusLG,
    controlWidth = token.controlWidth,
    handleVisible = token.handleVisible;
  return [(0, _defineProperty2["default"])({}, componentCls, (0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])({}, (0, _style2.resetComponent)(token)), (0, _style.genBasicInputStyle)(token)), (0, _style.genStatusStyle)(token)), {
    display: 'inline-block',
    width: controlWidth,
    margin: 0,
    padding: 0,
    border: lineWidth + "px " + lineType + " " + colorBorder,
    borderRadius: borderRadius
  }), (0, _compactItem.genCompactItemStyle)(token, componentCls)), (0, _defineProperty2["default"])({
    '&-rtl': (0, _defineProperty2["default"])({
      direction: 'rtl'
    }, componentCls + "-input", {
      direction: 'rtl'
    }),
    '&-lg': (0, _defineProperty2["default"])({
      padding: 0,
      fontSize: fontSizeLG,
      borderRadius: borderRadiusLG
    }, "input" + componentCls + "-input", {
      height: controlHeightLG - 2 * lineWidth
    }),
    '&-sm': (0, _defineProperty2["default"])({
      padding: 0,
      borderRadius: borderRadiusSM
    }, "input" + componentCls + "-input", {
      height: controlHeightSM - 2 * lineWidth,
      padding: "0 " + inputPaddingHorizontalSM + "px"
    }),
    '&:hover': (0, _extends5["default"])({}, (0, _style.genHoverStyle)(token)),
    '&-focused': (0, _extends5["default"])({}, (0, _style.genActiveStyle)(token)),
    '&-disabled': (0, _extends5["default"])((0, _extends5["default"])({}, (0, _style.genDisabledStyle)(token)), (0, _defineProperty2["default"])({}, componentCls + "-input", {
      cursor: 'not-allowed'
    })),
    // ===================== Out Of Range =====================
    '&-out-of-range': {
      input: {
        color: colorError
      }
    },
    // Style for input-group: input with label, with button or dropdown...
    '&-group': (0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])({}, (0, _style2.resetComponent)(token)), (0, _style.genInputGroupStyle)(token)), {
      '&-wrapper': (_wrapper = {
        display: 'inline-block',
        textAlign: 'start',
        verticalAlign: 'top'
      }, (0, _defineProperty2["default"])(_wrapper, componentCls + "-affix-wrapper", {
        width: '100%'
      }), (0, _defineProperty2["default"])(_wrapper, '&-lg', (0, _defineProperty2["default"])({}, componentCls + "-group-addon", {
        borderRadius: borderRadiusLG
      })), (0, _defineProperty2["default"])(_wrapper, '&-sm', (0, _defineProperty2["default"])({}, componentCls + "-group-addon", {
        borderRadius: borderRadiusSM
      })), _wrapper)
    })
  }, componentCls, {
    '&-input': (0, _extends5["default"])((0, _extends5["default"])({
      width: '100%',
      height: controlHeight - 2 * lineWidth,
      padding: "0 " + inputPaddingHorizontal + "px",
      textAlign: 'start',
      backgroundColor: 'transparent',
      border: 0,
      borderRadius: borderRadius,
      outline: 0,
      transition: "all " + motionDurationMid + " linear",
      appearance: 'textfield',
      color: token.colorText,
      fontSize: 'inherit',
      verticalAlign: 'top'
    }, (0, _style.genPlaceholderStyle)(token.colorTextPlaceholder)), {
      '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
        margin: 0,
        /* stylelint-disable-next-line property-no-vendor-prefix */
        webkitAppearance: 'none',
        appearance: 'none'
      }
    })
  }))), // Handler
  (0, _defineProperty2["default"])({}, componentCls, (_componentCls = {}, (0, _defineProperty2["default"])(_componentCls, "&:hover " + componentCls + "-handler-wrap, &-focused " + componentCls + "-handler-wrap", {
    opacity: 1
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-handler-wrap", (0, _defineProperty2["default"])({
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineEnd: 0,
    width: token.handleWidth,
    height: '100%',
    background: colorBgContainer,
    borderStartStartRadius: 0,
    borderStartEndRadius: borderRadius,
    borderEndEndRadius: borderRadius,
    borderEndStartRadius: 0,
    opacity: handleVisible === true ? 1 : 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    transition: "opacity " + motionDurationMid + " linear " + motionDurationMid
  }, componentCls + "-handler", (0, _defineProperty2["default"])({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 'auto',
    height: '40%'
  }, "\n              " + componentCls + "-handler-up-inner,\n              " + componentCls + "-handler-down-inner\n            ", {
    marginInlineEnd: 0,
    fontSize: token.handleFontSize
  }))), (0, _defineProperty2["default"])(_componentCls, componentCls + "-handler", {
    height: '50%',
    overflow: 'hidden',
    color: colorTextDescription,
    fontWeight: 'bold',
    lineHeight: 0,
    textAlign: 'center',
    cursor: 'pointer',
    borderInlineStart: lineWidth + "px " + lineType + " " + colorBorder,
    transition: "all " + motionDurationMid + " linear",
    '&:active': {
      background: token.colorFillAlter
    },
    // Hover
    '&:hover': (0, _defineProperty2["default"])({
      height: "60%"
    }, "\n              " + componentCls + "-handler-up-inner,\n              " + componentCls + "-handler-down-inner\n            ", {
      color: colorPrimary
    }),
    '&-up-inner, &-down-inner': (0, _extends5["default"])((0, _extends5["default"])({}, (0, _style2.resetIcon)()), {
      color: colorTextDescription,
      transition: "all " + motionDurationMid + " linear",
      userSelect: 'none'
    })
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-handler-up", {
    borderStartEndRadius: borderRadius
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-handler-down", {
    borderBlockStart: lineWidth + "px " + lineType + " " + colorBorder,
    borderEndEndRadius: borderRadius
  }), (0, _defineProperty2["default"])(_componentCls, '&-disabled, &-readonly', (0, _defineProperty2["default"])({}, componentCls + "-handler-wrap", {
    display: 'none'
  })), (0, _defineProperty2["default"])(_componentCls, "\n          " + componentCls + "-handler-up-disabled,\n          " + componentCls + "-handler-down-disabled\n        ", {
    cursor: 'not-allowed'
  }), (0, _defineProperty2["default"])(_componentCls, "\n          " + componentCls + "-handler-up-disabled:hover &-handler-up-inner,\n          " + componentCls + "-handler-down-disabled:hover &-handler-down-inner\n        ", {
    color: colorTextDisabled
  }), _componentCls)), // Border-less
  (0, _defineProperty2["default"])({}, componentCls + "-borderless", (0, _defineProperty2["default"])({
    borderColor: 'transparent',
    boxShadow: 'none'
  }, componentCls + "-handler-down", {
    borderBlockStartWidth: 0
  }))];
};
var genAffixWrapperStyles = function genAffixWrapperStyles(token) {
  var _extends4;
  var componentCls = token.componentCls,
    inputPaddingHorizontal = token.inputPaddingHorizontal,
    inputAffixPadding = token.inputAffixPadding,
    controlWidth = token.controlWidth,
    borderRadiusLG = token.borderRadiusLG,
    borderRadiusSM = token.borderRadiusSM;
  return (0, _defineProperty2["default"])({}, componentCls + "-affix-wrapper", (0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])({}, (0, _style.genBasicInputStyle)(token)), (0, _style.genStatusStyle)(token)), (_extends4 = {
    // or number handler will cover form status
    position: 'relative',
    display: 'inline-flex',
    width: controlWidth,
    padding: 0,
    paddingInlineStart: inputPaddingHorizontal,
    '&-lg': {
      borderRadius: borderRadiusLG
    },
    '&-sm': {
      borderRadius: borderRadiusSM
    },
    '&:not(&-disabled):hover': (0, _extends5["default"])((0, _extends5["default"])({}, (0, _style.genHoverStyle)(token)), {
      zIndex: 1
    }),
    '&-focused, &:focus': {
      zIndex: 1
    },
    '&-disabled': (0, _defineProperty2["default"])({}, componentCls + "[disabled]", {
      background: 'transparent'
    })
  }, (0, _defineProperty2["default"])(_extends4, "> div" + componentCls, (0, _defineProperty2["default"])({
    width: '100%',
    border: 'none',
    outline: 'none'
  }, "&" + componentCls + "-focused", {
    boxShadow: 'none !important'
  })), (0, _defineProperty2["default"])(_extends4, "input" + componentCls + "-input", {
    padding: 0
  }), (0, _defineProperty2["default"])(_extends4, '&::before', {
    width: 0,
    visibility: 'hidden',
    content: '"\\a0"'
  }), (0, _defineProperty2["default"])(_extends4, componentCls + "-handler-wrap", {
    zIndex: 2
  }), (0, _defineProperty2["default"])(_extends4, componentCls, {
    '&-prefix, &-suffix': {
      display: 'flex',
      flex: 'none',
      alignItems: 'center',
      pointerEvents: 'none'
    },
    '&-prefix': {
      marginInlineEnd: inputAffixPadding
    },
    '&-suffix': {
      position: 'absolute',
      insetBlockStart: 0,
      insetInlineEnd: 0,
      zIndex: 1,
      height: '100%',
      marginInlineEnd: inputPaddingHorizontal,
      marginInlineStart: inputAffixPadding
    }
  }), _extends4)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('InputNumber', function (token) {
  var inputNumberToken = (0, _style.initInputToken)(token);
  return [genInputNumberStyles(inputNumberToken), genAffixWrapperStyles(inputNumberToken)];
}, function (token) {
  return {
    controlWidth: 90,
    handleWidth: token.controlHeightSM - token.lineWidth * 2,
    handleFontSize: token.fontSize / 2,
    handleVisible: 'auto'
  };
});
exports["default"] = _default;