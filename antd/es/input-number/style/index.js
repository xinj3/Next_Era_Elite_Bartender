import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { genActiveStyle, genBasicInputStyle, genDisabledStyle, genHoverStyle, genInputGroupStyle, genPlaceholderStyle, genStatusStyle, initInputToken } from '../../input/style';
import { genComponentStyleHook } from '../../theme/internal';
import { resetComponent, resetIcon } from '../../style';
import { genCompactItemStyle } from '../../style/compact-item';
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
  return [_defineProperty({}, componentCls, _extends(_extends(_extends(_extends(_extends(_extends({}, resetComponent(token)), genBasicInputStyle(token)), genStatusStyle(token)), {
    display: 'inline-block',
    width: controlWidth,
    margin: 0,
    padding: 0,
    border: lineWidth + "px " + lineType + " " + colorBorder,
    borderRadius: borderRadius
  }), genCompactItemStyle(token, componentCls)), _defineProperty({
    '&-rtl': _defineProperty({
      direction: 'rtl'
    }, componentCls + "-input", {
      direction: 'rtl'
    }),
    '&-lg': _defineProperty({
      padding: 0,
      fontSize: fontSizeLG,
      borderRadius: borderRadiusLG
    }, "input" + componentCls + "-input", {
      height: controlHeightLG - 2 * lineWidth
    }),
    '&-sm': _defineProperty({
      padding: 0,
      borderRadius: borderRadiusSM
    }, "input" + componentCls + "-input", {
      height: controlHeightSM - 2 * lineWidth,
      padding: "0 " + inputPaddingHorizontalSM + "px"
    }),
    '&:hover': _extends({}, genHoverStyle(token)),
    '&-focused': _extends({}, genActiveStyle(token)),
    '&-disabled': _extends(_extends({}, genDisabledStyle(token)), _defineProperty({}, componentCls + "-input", {
      cursor: 'not-allowed'
    })),
    // ===================== Out Of Range =====================
    '&-out-of-range': {
      input: {
        color: colorError
      }
    },
    // Style for input-group: input with label, with button or dropdown...
    '&-group': _extends(_extends(_extends({}, resetComponent(token)), genInputGroupStyle(token)), {
      '&-wrapper': (_wrapper = {
        display: 'inline-block',
        textAlign: 'start',
        verticalAlign: 'top'
      }, _defineProperty(_wrapper, componentCls + "-affix-wrapper", {
        width: '100%'
      }), _defineProperty(_wrapper, '&-lg', _defineProperty({}, componentCls + "-group-addon", {
        borderRadius: borderRadiusLG
      })), _defineProperty(_wrapper, '&-sm', _defineProperty({}, componentCls + "-group-addon", {
        borderRadius: borderRadiusSM
      })), _wrapper)
    })
  }, componentCls, {
    '&-input': _extends(_extends({
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
    }, genPlaceholderStyle(token.colorTextPlaceholder)), {
      '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
        margin: 0,
        /* stylelint-disable-next-line property-no-vendor-prefix */
        webkitAppearance: 'none',
        appearance: 'none'
      }
    })
  }))), // Handler
  _defineProperty({}, componentCls, (_componentCls = {}, _defineProperty(_componentCls, "&:hover " + componentCls + "-handler-wrap, &-focused " + componentCls + "-handler-wrap", {
    opacity: 1
  }), _defineProperty(_componentCls, componentCls + "-handler-wrap", _defineProperty({
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
  }, componentCls + "-handler", _defineProperty({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 'auto',
    height: '40%'
  }, "\n              " + componentCls + "-handler-up-inner,\n              " + componentCls + "-handler-down-inner\n            ", {
    marginInlineEnd: 0,
    fontSize: token.handleFontSize
  }))), _defineProperty(_componentCls, componentCls + "-handler", {
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
    '&:hover': _defineProperty({
      height: "60%"
    }, "\n              " + componentCls + "-handler-up-inner,\n              " + componentCls + "-handler-down-inner\n            ", {
      color: colorPrimary
    }),
    '&-up-inner, &-down-inner': _extends(_extends({}, resetIcon()), {
      color: colorTextDescription,
      transition: "all " + motionDurationMid + " linear",
      userSelect: 'none'
    })
  }), _defineProperty(_componentCls, componentCls + "-handler-up", {
    borderStartEndRadius: borderRadius
  }), _defineProperty(_componentCls, componentCls + "-handler-down", {
    borderBlockStart: lineWidth + "px " + lineType + " " + colorBorder,
    borderEndEndRadius: borderRadius
  }), _defineProperty(_componentCls, '&-disabled, &-readonly', _defineProperty({}, componentCls + "-handler-wrap", {
    display: 'none'
  })), _defineProperty(_componentCls, "\n          " + componentCls + "-handler-up-disabled,\n          " + componentCls + "-handler-down-disabled\n        ", {
    cursor: 'not-allowed'
  }), _defineProperty(_componentCls, "\n          " + componentCls + "-handler-up-disabled:hover &-handler-up-inner,\n          " + componentCls + "-handler-down-disabled:hover &-handler-down-inner\n        ", {
    color: colorTextDisabled
  }), _componentCls)), // Border-less
  _defineProperty({}, componentCls + "-borderless", _defineProperty({
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
  return _defineProperty({}, componentCls + "-affix-wrapper", _extends(_extends(_extends({}, genBasicInputStyle(token)), genStatusStyle(token)), (_extends4 = {
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
    '&:not(&-disabled):hover': _extends(_extends({}, genHoverStyle(token)), {
      zIndex: 1
    }),
    '&-focused, &:focus': {
      zIndex: 1
    },
    '&-disabled': _defineProperty({}, componentCls + "[disabled]", {
      background: 'transparent'
    })
  }, _defineProperty(_extends4, "> div" + componentCls, _defineProperty({
    width: '100%',
    border: 'none',
    outline: 'none'
  }, "&" + componentCls + "-focused", {
    boxShadow: 'none !important'
  })), _defineProperty(_extends4, "input" + componentCls + "-input", {
    padding: 0
  }), _defineProperty(_extends4, '&::before', {
    width: 0,
    visibility: 'hidden',
    content: '"\\a0"'
  }), _defineProperty(_extends4, componentCls + "-handler-wrap", {
    zIndex: 2
  }), _defineProperty(_extends4, componentCls, {
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
export default genComponentStyleHook('InputNumber', function (token) {
  var inputNumberToken = initInputToken(token);
  return [genInputNumberStyles(inputNumberToken), genAffixWrapperStyles(inputNumberToken)];
}, function (token) {
  return {
    controlWidth: 90,
    handleWidth: token.controlHeightSM - token.lineWidth * 2,
    handleFontSize: token.fontSize / 2,
    handleVisible: 'auto'
  };
});