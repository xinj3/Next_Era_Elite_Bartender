import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { clearFix, resetComponent } from '../../style';
import { genCompactItemStyle } from '../../style/compact-item';
export var genPlaceholderStyle = function genPlaceholderStyle(color) {
  return {
    // Firefox
    '&::-moz-placeholder': {
      opacity: 1
    },
    '&::placeholder': {
      color: color,
      userSelect: 'none' // https://github.com/ant-design/ant-design/pull/32639
    },

    '&:placeholder-shown': {
      textOverflow: 'ellipsis'
    }
  };
};
export var genHoverStyle = function genHoverStyle(token) {
  return {
    borderColor: token.inputBorderHoverColor,
    borderInlineEndWidth: token.lineWidth
  };
};
export var genActiveStyle = function genActiveStyle(token) {
  return {
    borderColor: token.inputBorderHoverColor,
    boxShadow: "0 0 0 " + token.controlOutlineWidth + "px " + token.controlOutline,
    borderInlineEndWidth: token.lineWidth,
    outline: 0
  };
};
export var genDisabledStyle = function genDisabledStyle(token) {
  return {
    color: token.colorTextDisabled,
    backgroundColor: token.colorBgContainerDisabled,
    borderColor: token.colorBorder,
    boxShadow: 'none',
    cursor: 'not-allowed',
    opacity: 1,
    '&:hover': _extends({}, genHoverStyle(mergeToken(token, {
      inputBorderHoverColor: token.colorBorder
    })))
  };
};
var genInputLargeStyle = function genInputLargeStyle(token) {
  var inputPaddingVerticalLG = token.inputPaddingVerticalLG,
    inputPaddingHorizontal = token.inputPaddingHorizontal,
    fontSizeLG = token.fontSizeLG,
    lineHeightLG = token.lineHeightLG,
    borderRadiusLG = token.borderRadiusLG;
  return {
    padding: inputPaddingVerticalLG + "px " + inputPaddingHorizontal + "px",
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
export var genInputSmallStyle = function genInputSmallStyle(token) {
  return {
    padding: token.inputPaddingVerticalSM + "px " + (token.controlPaddingHorizontalSM - 1) + "px",
    borderRadius: token.borderRadiusSM
  };
};
export var genStatusStyle = function genStatusStyle(token) {
  var componentCls = token.componentCls,
    colorError = token.colorError,
    colorWarning = token.colorWarning,
    colorErrorOutline = token.colorErrorOutline,
    colorWarningOutline = token.colorWarningOutline,
    colorErrorBorderHover = token.colorErrorBorderHover,
    colorWarningBorderHover = token.colorWarningBorderHover;
  return {
    '&-status-error:not(&-disabled):not(&-borderless)&': _defineProperty({
      borderColor: colorError,
      '&:hover': {
        borderColor: colorErrorBorderHover
      },
      '&:focus, &-focused': _extends({}, genActiveStyle(mergeToken(token, {
        inputBorderActiveColor: colorError,
        inputBorderHoverColor: colorError,
        controlOutline: colorErrorOutline
      })))
    }, componentCls + "-prefix", {
      color: colorError
    }),
    '&-status-warning:not(&-disabled):not(&-borderless)&': _defineProperty({
      borderColor: colorWarning,
      '&:hover': {
        borderColor: colorWarningBorderHover
      },
      '&:focus, &-focused': _extends({}, genActiveStyle(mergeToken(token, {
        inputBorderActiveColor: colorWarning,
        inputBorderHoverColor: colorWarning,
        controlOutline: colorWarningOutline
      })))
    }, componentCls + "-prefix", {
      color: colorWarning
    })
  };
};
export var genBasicInputStyle = function genBasicInputStyle(token) {
  return _extends(_extends({
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    minWidth: 0,
    padding: token.inputPaddingVertical + "px " + token.inputPaddingHorizontal + "px",
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    backgroundColor: token.colorBgContainer,
    backgroundImage: 'none',
    borderWidth: token.lineWidth,
    borderStyle: token.lineType,
    borderColor: token.colorBorder,
    borderRadius: token.borderRadius,
    transition: "all " + token.motionDurationMid
  }, genPlaceholderStyle(token.colorTextPlaceholder)), {
    '&:hover': _extends({}, genHoverStyle(token)),
    '&:focus, &-focused': _extends({}, genActiveStyle(token)),
    '&-disabled, &[disabled]': _extends({}, genDisabledStyle(token)),
    '&-borderless': {
      '&, &:hover, &:focus, &-focused, &-disabled, &[disabled]': {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none'
      }
    },
    // Reset height for `textarea`s
    'textarea&': {
      maxWidth: '100%',
      height: 'auto',
      minHeight: token.controlHeight,
      lineHeight: token.lineHeight,
      verticalAlign: 'bottom',
      transition: "all " + token.motionDurationSlow + ", height 0s"
    },
    '&-textarea': {
      '&-rtl': {
        direction: 'rtl'
      }
    },
    // Size
    '&-lg': _extends({}, genInputLargeStyle(token)),
    '&-sm': _extends({}, genInputSmallStyle(token)),
    '&-rtl': {
      direction: 'rtl'
    }
  });
};
export var genInputGroupStyle = function genInputGroupStyle(token) {
  var _ref2, _addon, _ref4, _ref6, _ref10, _extends2, _ref12;
  var componentCls = token.componentCls,
    antCls = token.antCls;
  return _ref12 = {
    position: 'relative',
    display: 'table',
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0
  }, _defineProperty(_ref12, "&[class*='col-']", {
    paddingInlineEnd: token.paddingXS,
    '&:last-child': {
      paddingInlineEnd: 0
    }
  }), _defineProperty(_ref12, "&-lg " + componentCls + ", &-lg > " + componentCls + "-group-addon", _extends({}, genInputLargeStyle(token))), _defineProperty(_ref12, "&-sm " + componentCls + ", &-sm > " + componentCls + "-group-addon", _extends({}, genInputSmallStyle(token))), _defineProperty(_ref12, "&-lg " + antCls + "-select-single " + antCls + "-select-selector", {
    height: token.controlHeightLG
  }), _defineProperty(_ref12, "&-sm " + antCls + "-select-single " + antCls + "-select-selector", {
    height: token.controlHeightSM
  }), _defineProperty(_ref12, "> " + componentCls, {
    display: 'table-cell',
    '&:not(:first-child):not(:last-child)': {
      borderRadius: 0
    }
  }), _defineProperty(_ref12, componentCls + "-group", (_ref4 = {}, _defineProperty(_ref4, "&-addon, &-wrap", {
    display: 'table-cell',
    width: 1,
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    '&:not(:first-child):not(:last-child)': {
      borderRadius: 0
    }
  }), _defineProperty(_ref4, '&-wrap > *', {
    display: 'block !important'
  }), _defineProperty(_ref4, '&-addon', (_addon = {
    position: 'relative',
    padding: "0 " + token.inputPaddingHorizontal + "px",
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: token.fontSize,
    textAlign: 'center',
    backgroundColor: token.colorFillAlter,
    border: token.lineWidth + "px " + token.lineType + " " + token.colorBorder,
    borderRadius: token.borderRadius,
    transition: "all " + token.motionDurationSlow
  }, _defineProperty(_addon, antCls + "-select", (_ref2 = {
    margin: "-" + (token.inputPaddingVertical + 1) + "px -" + token.inputPaddingHorizontal + "px"
  }, _defineProperty(_ref2, "&" + antCls + "-select-single:not(" + antCls + "-select-customize-input)", _defineProperty({}, antCls + "-select-selector", {
    backgroundColor: 'inherit',
    border: token.lineWidth + "px " + token.lineType + " transparent",
    boxShadow: 'none'
  })), _defineProperty(_ref2, '&-open, &-focused', _defineProperty({}, antCls + "-select-selector", {
    color: token.colorPrimary
  })), _ref2)), _defineProperty(_addon, antCls + "-cascader-picker", _defineProperty({
    margin: "-9px -" + token.inputPaddingHorizontal + "px",
    backgroundColor: 'transparent'
  }, antCls + "-cascader-input", {
    textAlign: 'start',
    border: 0,
    boxShadow: 'none'
  })), _addon)), _defineProperty(_ref4, '&-addon:first-child', {
    borderInlineEnd: 0
  }), _defineProperty(_ref4, '&-addon:last-child', {
    borderInlineStart: 0
  }), _ref4)), _defineProperty(_ref12, "" + componentCls, {
    "float": 'inline-start',
    width: '100%',
    marginBottom: 0,
    textAlign: 'inherit',
    '&:focus': {
      zIndex: 1,
      borderInlineEndWidth: 1
    },
    '&:hover': _defineProperty({
      zIndex: 1,
      borderInlineEndWidth: 1
    }, componentCls + "-search-with-button &", {
      zIndex: 0
    })
  }), _defineProperty(_ref12, "> " + componentCls + ":first-child, " + componentCls + "-group-addon:first-child", _defineProperty({
    borderStartEndRadius: 0,
    borderEndEndRadius: 0
  }, antCls + "-select " + antCls + "-select-selector", {
    borderStartEndRadius: 0,
    borderEndEndRadius: 0
  })), _defineProperty(_ref12, "> " + componentCls + "-affix-wrapper", (_ref6 = {}, _defineProperty(_ref6, "&:not(:first-child) " + componentCls, {
    borderStartStartRadius: 0,
    borderEndStartRadius: 0
  }), _defineProperty(_ref6, "&:not(:last-child) " + componentCls, {
    borderStartEndRadius: 0,
    borderEndEndRadius: 0
  }), _ref6)), _defineProperty(_ref12, "> " + componentCls + ":last-child, " + componentCls + "-group-addon:last-child", _defineProperty({
    borderStartStartRadius: 0,
    borderEndStartRadius: 0
  }, antCls + "-select " + antCls + "-select-selector", {
    borderStartStartRadius: 0,
    borderEndStartRadius: 0
  })), _defineProperty(_ref12, componentCls + "-affix-wrapper", _defineProperty({
    '&:not(:last-child)': _defineProperty({
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    }, componentCls + "-search &", {
      borderStartStartRadius: token.borderRadius,
      borderEndStartRadius: token.borderRadius
    })
  }, "&:not(:first-child), " + componentCls + "-search &:not(:first-child)", {
    borderStartStartRadius: 0,
    borderEndStartRadius: 0
  })), _defineProperty(_ref12, '&&-compact', _extends(_extends({
    display: 'block'
  }, clearFix()), (_extends2 = {}, _defineProperty(_extends2, componentCls + "-group-addon, " + componentCls + "-group-wrap, > " + componentCls, {
    '&:not(:first-child):not(:last-child)': {
      borderInlineEndWidth: token.lineWidth,
      '&:hover': {
        zIndex: 1
      },
      '&:focus': {
        zIndex: 1
      }
    }
  }), _defineProperty(_extends2, '& > *', {
    display: 'inline-block',
    "float": 'none',
    verticalAlign: 'top',
    borderRadius: 0
  }), _defineProperty(_extends2, "& > " + componentCls + "-affix-wrapper", {
    display: 'inline-flex'
  }), _defineProperty(_extends2, "& > " + antCls + "-picker-range", {
    display: 'inline-flex'
  }), _defineProperty(_extends2, '& > *:not(:last-child)', {
    marginInlineEnd: -token.lineWidth,
    borderInlineEndWidth: token.lineWidth
  }), _defineProperty(_extends2, "" + componentCls, {
    "float": 'none'
  }), _defineProperty(_extends2, "& > " + antCls + "-select > " + antCls + "-select-selector,\n      & > " + antCls + "-select-auto-complete " + componentCls + ",\n      & > " + antCls + "-cascader-picker " + componentCls + ",\n      & > " + componentCls + "-group-wrapper " + componentCls, {
    borderInlineEndWidth: token.lineWidth,
    borderRadius: 0,
    '&:hover': {
      zIndex: 1
    },
    '&:focus': {
      zIndex: 1
    }
  }), _defineProperty(_extends2, "& > " + antCls + "-select-focused", {
    zIndex: 1
  }), _defineProperty(_extends2, "& > " + antCls + "-select > " + antCls + "-select-arrow", {
    zIndex: 1 // https://github.com/ant-design/ant-design/issues/20371
  }), _defineProperty(_extends2, "& > *:first-child,\n      & > " + antCls + "-select:first-child > " + antCls + "-select-selector,\n      & > " + antCls + "-select-auto-complete:first-child " + componentCls + ",\n      & > " + antCls + "-cascader-picker:first-child " + componentCls, {
    borderStartStartRadius: token.borderRadius,
    borderEndStartRadius: token.borderRadius
  }), _defineProperty(_extends2, "& > *:last-child,\n      & > " + antCls + "-select:last-child > " + antCls + "-select-selector,\n      & > " + antCls + "-cascader-picker:last-child " + componentCls + ",\n      & > " + antCls + "-cascader-picker-focused:last-child " + componentCls, {
    borderInlineEndWidth: token.lineWidth,
    borderStartEndRadius: token.borderRadius,
    borderEndEndRadius: token.borderRadius
  }), _defineProperty(_extends2, "& > " + antCls + "-select-auto-complete " + componentCls, {
    verticalAlign: 'top'
  }), _defineProperty(_extends2, componentCls + "-group-wrapper + " + componentCls + "-group-wrapper", _defineProperty({
    marginInlineStart: -token.lineWidth
  }, componentCls + "-affix-wrapper", {
    borderRadius: 0
  })), _defineProperty(_extends2, componentCls + "-group-wrapper:not(:last-child)", _defineProperty({}, "&" + componentCls + "-search > " + componentCls + "-group", (_ref10 = {}, _defineProperty(_ref10, "& > " + componentCls + "-group-addon > " + componentCls + "-search-button", {
    borderRadius: 0
  }), _defineProperty(_ref10, "& > " + componentCls, {
    borderStartStartRadius: token.borderRadius,
    borderStartEndRadius: 0,
    borderEndEndRadius: 0,
    borderEndStartRadius: token.borderRadius
  }), _ref10))), _extends2))), _ref12;
};
var genInputStyle = function genInputStyle(token) {
  var _typeColor;
  var prefixCls = token.prefixCls,
    componentCls = token.componentCls,
    controlHeightSM = token.controlHeightSM,
    lineWidth = token.lineWidth;
  var FIXED_CHROME_COLOR_HEIGHT = 16;
  var colorSmallPadding = (controlHeightSM - lineWidth * 2 - FIXED_CHROME_COLOR_HEIGHT) / 2;
  return _defineProperty({}, "" + componentCls, _extends(_extends(_extends(_extends(_extends({}, resetComponent(token)), genBasicInputStyle(token)), genStatusStyle(token)), genCompactItemStyle(token, prefixCls)), {
    '&[type="color"]': (_typeColor = {
      height: token.controlHeight
    }, _defineProperty(_typeColor, "&" + componentCls + "-lg", {
      height: token.controlHeightLG
    }), _defineProperty(_typeColor, "&" + componentCls + "-sm", {
      height: controlHeightSM,
      paddingTop: colorSmallPadding,
      paddingBottom: colorSmallPadding
    }), _typeColor)
  }));
};
var genAllowClearStyle = function genAllowClearStyle(token) {
  var _ref14;
  var componentCls = token.componentCls;
  return _ref14 = {}, _defineProperty(_ref14, componentCls + "-clear-icon", {
    margin: 0,
    color: token.colorIcon,
    fontSize: token.fontSizeIcon,
    verticalAlign: -1,
    // https://github.com/ant-design/ant-design/pull/18151
    // https://codesandbox.io/s/wizardly-sun-u10br
    cursor: 'pointer',
    transition: "color " + token.motionDurationSlow,
    '&:hover': {
      color: token.colorTextDescription
    },
    '&:active': {
      color: token.colorText
    },
    '&-hidden': {
      visibility: 'hidden'
    },
    '&-has-suffix': {
      margin: "0 " + token.inputAffixPadding + "px"
    }
  }), _defineProperty(_ref14, '&-textarea-with-clear-btn', _defineProperty({
    padding: '0 !important',
    border: '0 !important'
  }, componentCls + "-clear-icon", {
    position: 'absolute',
    insetBlockStart: token.paddingXS,
    insetInlineEnd: token.paddingXS,
    zIndex: 1
  })), _ref14;
};
var genAffixStyle = function genAffixStyle(token) {
  var _extends4;
  var componentCls = token.componentCls,
    inputAffixPadding = token.inputAffixPadding,
    colorTextDescription = token.colorTextDescription,
    motionDurationSlow = token.motionDurationSlow,
    colorIcon = token.colorIcon,
    colorIconHover = token.colorIconHover,
    iconCls = token.iconCls;
  return _defineProperty({}, componentCls + "-affix-wrapper", _extends(_extends(_extends(_extends(_extends({}, genBasicInputStyle(token)), (_extends4 = {
    display: 'inline-flex',
    '&:not(&-disabled):hover': _extends(_extends({}, genHoverStyle(token)), _defineProperty({
      zIndex: 1
    }, componentCls + "-search-with-button &", {
      zIndex: 0
    })),
    '&-focused, &:focus': {
      zIndex: 1
    },
    '&-disabled': _defineProperty({}, componentCls + "[disabled]", {
      background: 'transparent'
    })
  }, _defineProperty(_extends4, "> input" + componentCls, {
    padding: 0,
    fontSize: 'inherit',
    border: 'none',
    borderRadius: 0,
    outline: 'none',
    '&:focus': {
      boxShadow: 'none !important'
    }
  }), _defineProperty(_extends4, '&::before', {
    width: 0,
    visibility: 'hidden',
    content: '"\\a0"'
  }), _defineProperty(_extends4, "" + componentCls, {
    '&-prefix, &-suffix': {
      display: 'flex',
      flex: 'none',
      alignItems: 'center',
      '> *:not(:last-child)': {
        marginInlineEnd: token.paddingXS
      }
    },
    '&-show-count-suffix': {
      color: colorTextDescription
    },
    '&-show-count-has-suffix': {
      marginInlineEnd: token.paddingXXS
    },
    '&-prefix': {
      marginInlineEnd: inputAffixPadding
    },
    '&-suffix': {
      marginInlineStart: inputAffixPadding
    }
  }), _extends4)), genAllowClearStyle(token)), _defineProperty({}, "" + iconCls + componentCls + "-password-icon", {
    color: colorIcon,
    cursor: 'pointer',
    transition: "all " + motionDurationSlow,
    '&:hover': {
      color: colorIconHover
    }
  })), genStatusStyle(token)));
};
var genGroupStyle = function genGroupStyle(token) {
  var componentCls = token.componentCls,
    colorError = token.colorError,
    colorSuccess = token.colorSuccess,
    borderRadiusLG = token.borderRadiusLG,
    borderRadiusSM = token.borderRadiusSM;
  return _defineProperty({}, componentCls + "-group", _extends(_extends(_extends({}, resetComponent(token)), genInputGroupStyle(token)), {
    '&-rtl': {
      direction: 'rtl'
    },
    '&-wrapper': {
      display: 'inline-block',
      width: '100%',
      textAlign: 'start',
      verticalAlign: 'top',
      '&-rtl': {
        direction: 'rtl'
      },
      // Size
      '&-lg': _defineProperty({}, componentCls + "-group-addon", {
        borderRadius: borderRadiusLG
      }),
      '&-sm': _defineProperty({}, componentCls + "-group-addon", {
        borderRadius: borderRadiusSM
      }),
      // Status
      '&-status-error': _defineProperty({}, componentCls + "-group-addon", {
        color: colorError,
        borderColor: colorError
      }),
      '&-status-warning': _defineProperty({}, componentCls + "-group-addon:last-child", {
        color: colorSuccess,
        borderColor: colorSuccess
      })
    }
  }));
};
var genSearchInputStyle = function genSearchInputStyle(token) {
  var _ref18, _ref23, _searchPrefixCls;
  var componentCls = token.componentCls,
    antCls = token.antCls;
  var searchPrefixCls = componentCls + "-search";
  return _defineProperty({}, searchPrefixCls, (_searchPrefixCls = {}, _defineProperty(_searchPrefixCls, "" + componentCls, {
    '&:hover, &:focus': _defineProperty({
      borderColor: token.colorPrimaryHover
    }, "+ " + componentCls + "-group-addon " + searchPrefixCls + "-button:not(" + antCls + "-btn-primary)", {
      borderInlineStartColor: token.colorPrimaryHover
    })
  }), _defineProperty(_searchPrefixCls, componentCls + "-affix-wrapper", {
    borderRadius: 0
  }), _defineProperty(_searchPrefixCls, componentCls + "-lg", {
    lineHeight: token.lineHeightLG - 0.0002
  }), _defineProperty(_searchPrefixCls, "> " + componentCls + "-group", _defineProperty({}, "> " + componentCls + "-group-addon:last-child", (_ref18 = {
    insetInlineStart: -1,
    padding: 0,
    border: 0
  }, _defineProperty(_ref18, searchPrefixCls + "-button", {
    paddingTop: 0,
    paddingBottom: 0,
    borderStartStartRadius: 0,
    borderStartEndRadius: token.borderRadius,
    borderEndEndRadius: token.borderRadius,
    borderEndStartRadius: 0
  }), _defineProperty(_ref18, searchPrefixCls + "-button:not(" + antCls + "-btn-primary)", _defineProperty({
    color: token.colorTextDescription,
    '&:hover': {
      color: token.colorPrimaryHover
    },
    '&:active': {
      color: token.colorPrimaryActive
    }
  }, "&" + antCls + "-btn-loading::before", {
    insetInlineStart: 0,
    insetInlineEnd: 0,
    insetBlockStart: 0,
    insetBlockEnd: 0
  })), _ref18))), _defineProperty(_searchPrefixCls, searchPrefixCls + "-button", {
    height: token.controlHeight,
    '&:hover, &:focus': {
      zIndex: 1
    }
  }), _defineProperty(_searchPrefixCls, "&-large " + searchPrefixCls + "-button", {
    height: token.controlHeightLG
  }), _defineProperty(_searchPrefixCls, "&-small " + searchPrefixCls + "-button", {
    height: token.controlHeightSM
  }), _defineProperty(_searchPrefixCls, '&-rtl', {
    direction: 'rtl'
  }), _defineProperty(_searchPrefixCls, "&" + componentCls + "-compact-item", (_ref23 = {}, _defineProperty(_ref23, "&:not(" + componentCls + "-compact-last-item)", _defineProperty({}, componentCls + "-group-addon", _defineProperty({}, componentCls + "-search-button", {
    marginInlineEnd: -token.lineWidth,
    borderRadius: 0
  }))), _defineProperty(_ref23, "&:not(" + componentCls + "-compact-first-item)", _defineProperty({}, componentCls + "," + componentCls + "-affix-wrapper", {
    borderRadius: 0
  })), _defineProperty(_ref23, "> " + componentCls + "-group-addon " + componentCls + "-search-button,\n        > " + componentCls + ",\n        " + componentCls + "-affix-wrapper", {
    '&:hover,&:focus,&:active': {
      zIndex: 2
    }
  }), _defineProperty(_ref23, "> " + componentCls + "-affix-wrapper-focused", {
    zIndex: 2
  }), _ref23)), _searchPrefixCls));
};
export function initInputToken(token) {
  // @ts-ignore
  return mergeToken(token, {
    inputAffixPadding: token.paddingXXS,
    inputPaddingVertical: Math.max(Math.round((token.controlHeight - token.fontSize * token.lineHeight) / 2 * 10) / 10 - token.lineWidth, 3),
    inputPaddingVerticalLG: Math.ceil((token.controlHeightLG - token.fontSizeLG * token.lineHeightLG) / 2 * 10) / 10 - token.lineWidth,
    inputPaddingVerticalSM: Math.max(Math.round((token.controlHeightSM - token.fontSize * token.lineHeight) / 2 * 10) / 10 - token.lineWidth, 0),
    inputPaddingHorizontal: token.controlPaddingHorizontal - token.lineWidth,
    inputPaddingHorizontalSM: token.controlPaddingHorizontalSM - token.lineWidth,
    inputBorderHoverColor: token.colorPrimaryHover,
    inputBorderActiveColor: token.colorPrimaryHover
  });
}
var genTextAreaStyle = function genTextAreaStyle(token) {
  var _showCount, _textareaPrefixCls;
  var componentCls = token.componentCls,
    inputPaddingHorizontal = token.inputPaddingHorizontal,
    paddingLG = token.paddingLG;
  var textareaPrefixCls = componentCls + "-textarea";
  return _defineProperty({}, textareaPrefixCls, (_textareaPrefixCls = {
    position: 'relative'
  }, _defineProperty(_textareaPrefixCls, textareaPrefixCls + "-suffix", {
    position: 'absolute',
    top: 0,
    insetInlineEnd: inputPaddingHorizontal,
    bottom: 0,
    zIndex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    margin: 'auto'
  }), _defineProperty(_textareaPrefixCls, "&-status-error,\n        &-status-warning,\n        &-status-success,\n        &-status-validating", _defineProperty({}, "&" + textareaPrefixCls + "-has-feedback", _defineProperty({}, "" + componentCls, {
    paddingInlineEnd: paddingLG
  }))), _defineProperty(_textareaPrefixCls, '&-show-count', (_showCount = {}, _defineProperty(_showCount, "> " + componentCls, {
    height: '100%'
  }), _defineProperty(_showCount, '&::after', {
    position: 'absolute',
    bottom: 0,
    insetInlineEnd: 0,
    color: token.colorTextDescription,
    whiteSpace: 'nowrap',
    content: 'attr(data-count)',
    pointerEvents: 'none',
    display: 'block',
    transform: 'translateY(100%)'
  }), _showCount)), _textareaPrefixCls));
};
// ============================== Export ==============================
export default genComponentStyleHook('Input', function (token) {
  var inputToken = initInputToken(token);
  return [genInputStyle(inputToken), genTextAreaStyle(inputToken), genAffixStyle(inputToken), genGroupStyle(inputToken), genSearchInputStyle(inputToken)];
});