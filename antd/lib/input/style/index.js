"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genStatusStyle = exports.genPlaceholderStyle = exports.genInputSmallStyle = exports.genInputGroupStyle = exports.genHoverStyle = exports.genDisabledStyle = exports.genBasicInputStyle = exports.genActiveStyle = exports["default"] = void 0;
exports.initInputToken = initInputToken;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends6 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
var _compactItem = require("../../style/compact-item");
var genPlaceholderStyle = function genPlaceholderStyle(color) {
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
exports.genPlaceholderStyle = genPlaceholderStyle;
var genHoverStyle = function genHoverStyle(token) {
  return {
    borderColor: token.inputBorderHoverColor,
    borderInlineEndWidth: token.lineWidth
  };
};
exports.genHoverStyle = genHoverStyle;
var genActiveStyle = function genActiveStyle(token) {
  return {
    borderColor: token.inputBorderHoverColor,
    boxShadow: "0 0 0 " + token.controlOutlineWidth + "px " + token.controlOutline,
    borderInlineEndWidth: token.lineWidth,
    outline: 0
  };
};
exports.genActiveStyle = genActiveStyle;
var genDisabledStyle = function genDisabledStyle(token) {
  return {
    color: token.colorTextDisabled,
    backgroundColor: token.colorBgContainerDisabled,
    borderColor: token.colorBorder,
    boxShadow: 'none',
    cursor: 'not-allowed',
    opacity: 1,
    '&:hover': (0, _extends6["default"])({}, genHoverStyle((0, _internal.mergeToken)(token, {
      inputBorderHoverColor: token.colorBorder
    })))
  };
};
exports.genDisabledStyle = genDisabledStyle;
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
var genInputSmallStyle = function genInputSmallStyle(token) {
  return {
    padding: token.inputPaddingVerticalSM + "px " + (token.controlPaddingHorizontalSM - 1) + "px",
    borderRadius: token.borderRadiusSM
  };
};
exports.genInputSmallStyle = genInputSmallStyle;
var genStatusStyle = function genStatusStyle(token) {
  var componentCls = token.componentCls,
    colorError = token.colorError,
    colorWarning = token.colorWarning,
    colorErrorOutline = token.colorErrorOutline,
    colorWarningOutline = token.colorWarningOutline,
    colorErrorBorderHover = token.colorErrorBorderHover,
    colorWarningBorderHover = token.colorWarningBorderHover;
  return {
    '&-status-error:not(&-disabled):not(&-borderless)&': (0, _defineProperty2["default"])({
      borderColor: colorError,
      '&:hover': {
        borderColor: colorErrorBorderHover
      },
      '&:focus, &-focused': (0, _extends6["default"])({}, genActiveStyle((0, _internal.mergeToken)(token, {
        inputBorderActiveColor: colorError,
        inputBorderHoverColor: colorError,
        controlOutline: colorErrorOutline
      })))
    }, componentCls + "-prefix", {
      color: colorError
    }),
    '&-status-warning:not(&-disabled):not(&-borderless)&': (0, _defineProperty2["default"])({
      borderColor: colorWarning,
      '&:hover': {
        borderColor: colorWarningBorderHover
      },
      '&:focus, &-focused': (0, _extends6["default"])({}, genActiveStyle((0, _internal.mergeToken)(token, {
        inputBorderActiveColor: colorWarning,
        inputBorderHoverColor: colorWarning,
        controlOutline: colorWarningOutline
      })))
    }, componentCls + "-prefix", {
      color: colorWarning
    })
  };
};
exports.genStatusStyle = genStatusStyle;
var genBasicInputStyle = function genBasicInputStyle(token) {
  return (0, _extends6["default"])((0, _extends6["default"])({
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
    '&:hover': (0, _extends6["default"])({}, genHoverStyle(token)),
    '&:focus, &-focused': (0, _extends6["default"])({}, genActiveStyle(token)),
    '&-disabled, &[disabled]': (0, _extends6["default"])({}, genDisabledStyle(token)),
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
    '&-lg': (0, _extends6["default"])({}, genInputLargeStyle(token)),
    '&-sm': (0, _extends6["default"])({}, genInputSmallStyle(token)),
    '&-rtl': {
      direction: 'rtl'
    }
  });
};
exports.genBasicInputStyle = genBasicInputStyle;
var genInputGroupStyle = function genInputGroupStyle(token) {
  var _ref2, _addon, _ref4, _ref6, _ref10, _extends2, _ref12;
  var componentCls = token.componentCls,
    antCls = token.antCls;
  return _ref12 = {
    position: 'relative',
    display: 'table',
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0
  }, (0, _defineProperty2["default"])(_ref12, "&[class*='col-']", {
    paddingInlineEnd: token.paddingXS,
    '&:last-child': {
      paddingInlineEnd: 0
    }
  }), (0, _defineProperty2["default"])(_ref12, "&-lg " + componentCls + ", &-lg > " + componentCls + "-group-addon", (0, _extends6["default"])({}, genInputLargeStyle(token))), (0, _defineProperty2["default"])(_ref12, "&-sm " + componentCls + ", &-sm > " + componentCls + "-group-addon", (0, _extends6["default"])({}, genInputSmallStyle(token))), (0, _defineProperty2["default"])(_ref12, "&-lg " + antCls + "-select-single " + antCls + "-select-selector", {
    height: token.controlHeightLG
  }), (0, _defineProperty2["default"])(_ref12, "&-sm " + antCls + "-select-single " + antCls + "-select-selector", {
    height: token.controlHeightSM
  }), (0, _defineProperty2["default"])(_ref12, "> " + componentCls, {
    display: 'table-cell',
    '&:not(:first-child):not(:last-child)': {
      borderRadius: 0
    }
  }), (0, _defineProperty2["default"])(_ref12, componentCls + "-group", (_ref4 = {}, (0, _defineProperty2["default"])(_ref4, "&-addon, &-wrap", {
    display: 'table-cell',
    width: 1,
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    '&:not(:first-child):not(:last-child)': {
      borderRadius: 0
    }
  }), (0, _defineProperty2["default"])(_ref4, '&-wrap > *', {
    display: 'block !important'
  }), (0, _defineProperty2["default"])(_ref4, '&-addon', (_addon = {
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
  }, (0, _defineProperty2["default"])(_addon, antCls + "-select", (_ref2 = {
    margin: "-" + (token.inputPaddingVertical + 1) + "px -" + token.inputPaddingHorizontal + "px"
  }, (0, _defineProperty2["default"])(_ref2, "&" + antCls + "-select-single:not(" + antCls + "-select-customize-input)", (0, _defineProperty2["default"])({}, antCls + "-select-selector", {
    backgroundColor: 'inherit',
    border: token.lineWidth + "px " + token.lineType + " transparent",
    boxShadow: 'none'
  })), (0, _defineProperty2["default"])(_ref2, '&-open, &-focused', (0, _defineProperty2["default"])({}, antCls + "-select-selector", {
    color: token.colorPrimary
  })), _ref2)), (0, _defineProperty2["default"])(_addon, antCls + "-cascader-picker", (0, _defineProperty2["default"])({
    margin: "-9px -" + token.inputPaddingHorizontal + "px",
    backgroundColor: 'transparent'
  }, antCls + "-cascader-input", {
    textAlign: 'start',
    border: 0,
    boxShadow: 'none'
  })), _addon)), (0, _defineProperty2["default"])(_ref4, '&-addon:first-child', {
    borderInlineEnd: 0
  }), (0, _defineProperty2["default"])(_ref4, '&-addon:last-child', {
    borderInlineStart: 0
  }), _ref4)), (0, _defineProperty2["default"])(_ref12, "" + componentCls, {
    "float": 'inline-start',
    width: '100%',
    marginBottom: 0,
    textAlign: 'inherit',
    '&:focus': {
      zIndex: 1,
      borderInlineEndWidth: 1
    },
    '&:hover': (0, _defineProperty2["default"])({
      zIndex: 1,
      borderInlineEndWidth: 1
    }, componentCls + "-search-with-button &", {
      zIndex: 0
    })
  }), (0, _defineProperty2["default"])(_ref12, "> " + componentCls + ":first-child, " + componentCls + "-group-addon:first-child", (0, _defineProperty2["default"])({
    borderStartEndRadius: 0,
    borderEndEndRadius: 0
  }, antCls + "-select " + antCls + "-select-selector", {
    borderStartEndRadius: 0,
    borderEndEndRadius: 0
  })), (0, _defineProperty2["default"])(_ref12, "> " + componentCls + "-affix-wrapper", (_ref6 = {}, (0, _defineProperty2["default"])(_ref6, "&:not(:first-child) " + componentCls, {
    borderStartStartRadius: 0,
    borderEndStartRadius: 0
  }), (0, _defineProperty2["default"])(_ref6, "&:not(:last-child) " + componentCls, {
    borderStartEndRadius: 0,
    borderEndEndRadius: 0
  }), _ref6)), (0, _defineProperty2["default"])(_ref12, "> " + componentCls + ":last-child, " + componentCls + "-group-addon:last-child", (0, _defineProperty2["default"])({
    borderStartStartRadius: 0,
    borderEndStartRadius: 0
  }, antCls + "-select " + antCls + "-select-selector", {
    borderStartStartRadius: 0,
    borderEndStartRadius: 0
  })), (0, _defineProperty2["default"])(_ref12, componentCls + "-affix-wrapper", (0, _defineProperty2["default"])({
    '&:not(:last-child)': (0, _defineProperty2["default"])({
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    }, componentCls + "-search &", {
      borderStartStartRadius: token.borderRadius,
      borderEndStartRadius: token.borderRadius
    })
  }, "&:not(:first-child), " + componentCls + "-search &:not(:first-child)", {
    borderStartStartRadius: 0,
    borderEndStartRadius: 0
  })), (0, _defineProperty2["default"])(_ref12, '&&-compact', (0, _extends6["default"])((0, _extends6["default"])({
    display: 'block'
  }, (0, _style.clearFix)()), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, componentCls + "-group-addon, " + componentCls + "-group-wrap, > " + componentCls, {
    '&:not(:first-child):not(:last-child)': {
      borderInlineEndWidth: token.lineWidth,
      '&:hover': {
        zIndex: 1
      },
      '&:focus': {
        zIndex: 1
      }
    }
  }), (0, _defineProperty2["default"])(_extends2, '& > *', {
    display: 'inline-block',
    "float": 'none',
    verticalAlign: 'top',
    borderRadius: 0
  }), (0, _defineProperty2["default"])(_extends2, "& > " + componentCls + "-affix-wrapper", {
    display: 'inline-flex'
  }), (0, _defineProperty2["default"])(_extends2, "& > " + antCls + "-picker-range", {
    display: 'inline-flex'
  }), (0, _defineProperty2["default"])(_extends2, '& > *:not(:last-child)', {
    marginInlineEnd: -token.lineWidth,
    borderInlineEndWidth: token.lineWidth
  }), (0, _defineProperty2["default"])(_extends2, "" + componentCls, {
    "float": 'none'
  }), (0, _defineProperty2["default"])(_extends2, "& > " + antCls + "-select > " + antCls + "-select-selector,\n      & > " + antCls + "-select-auto-complete " + componentCls + ",\n      & > " + antCls + "-cascader-picker " + componentCls + ",\n      & > " + componentCls + "-group-wrapper " + componentCls, {
    borderInlineEndWidth: token.lineWidth,
    borderRadius: 0,
    '&:hover': {
      zIndex: 1
    },
    '&:focus': {
      zIndex: 1
    }
  }), (0, _defineProperty2["default"])(_extends2, "& > " + antCls + "-select-focused", {
    zIndex: 1
  }), (0, _defineProperty2["default"])(_extends2, "& > " + antCls + "-select > " + antCls + "-select-arrow", {
    zIndex: 1 // https://github.com/ant-design/ant-design/issues/20371
  }), (0, _defineProperty2["default"])(_extends2, "& > *:first-child,\n      & > " + antCls + "-select:first-child > " + antCls + "-select-selector,\n      & > " + antCls + "-select-auto-complete:first-child " + componentCls + ",\n      & > " + antCls + "-cascader-picker:first-child " + componentCls, {
    borderStartStartRadius: token.borderRadius,
    borderEndStartRadius: token.borderRadius
  }), (0, _defineProperty2["default"])(_extends2, "& > *:last-child,\n      & > " + antCls + "-select:last-child > " + antCls + "-select-selector,\n      & > " + antCls + "-cascader-picker:last-child " + componentCls + ",\n      & > " + antCls + "-cascader-picker-focused:last-child " + componentCls, {
    borderInlineEndWidth: token.lineWidth,
    borderStartEndRadius: token.borderRadius,
    borderEndEndRadius: token.borderRadius
  }), (0, _defineProperty2["default"])(_extends2, "& > " + antCls + "-select-auto-complete " + componentCls, {
    verticalAlign: 'top'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-group-wrapper + " + componentCls + "-group-wrapper", (0, _defineProperty2["default"])({
    marginInlineStart: -token.lineWidth
  }, componentCls + "-affix-wrapper", {
    borderRadius: 0
  })), (0, _defineProperty2["default"])(_extends2, componentCls + "-group-wrapper:not(:last-child)", (0, _defineProperty2["default"])({}, "&" + componentCls + "-search > " + componentCls + "-group", (_ref10 = {}, (0, _defineProperty2["default"])(_ref10, "& > " + componentCls + "-group-addon > " + componentCls + "-search-button", {
    borderRadius: 0
  }), (0, _defineProperty2["default"])(_ref10, "& > " + componentCls, {
    borderStartStartRadius: token.borderRadius,
    borderStartEndRadius: 0,
    borderEndEndRadius: 0,
    borderEndStartRadius: token.borderRadius
  }), _ref10))), _extends2))), _ref12;
};
exports.genInputGroupStyle = genInputGroupStyle;
var genInputStyle = function genInputStyle(token) {
  var _typeColor;
  var prefixCls = token.prefixCls,
    componentCls = token.componentCls,
    controlHeightSM = token.controlHeightSM,
    lineWidth = token.lineWidth;
  var FIXED_CHROME_COLOR_HEIGHT = 16;
  var colorSmallPadding = (controlHeightSM - lineWidth * 2 - FIXED_CHROME_COLOR_HEIGHT) / 2;
  return (0, _defineProperty2["default"])({}, "" + componentCls, (0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])({}, (0, _style.resetComponent)(token)), genBasicInputStyle(token)), genStatusStyle(token)), (0, _compactItem.genCompactItemStyle)(token, prefixCls)), {
    '&[type="color"]': (_typeColor = {
      height: token.controlHeight
    }, (0, _defineProperty2["default"])(_typeColor, "&" + componentCls + "-lg", {
      height: token.controlHeightLG
    }), (0, _defineProperty2["default"])(_typeColor, "&" + componentCls + "-sm", {
      height: controlHeightSM,
      paddingTop: colorSmallPadding,
      paddingBottom: colorSmallPadding
    }), _typeColor)
  }));
};
var genAllowClearStyle = function genAllowClearStyle(token) {
  var _ref14;
  var componentCls = token.componentCls;
  return _ref14 = {}, (0, _defineProperty2["default"])(_ref14, componentCls + "-clear-icon", {
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
  }), (0, _defineProperty2["default"])(_ref14, '&-textarea-with-clear-btn', (0, _defineProperty2["default"])({
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
  return (0, _defineProperty2["default"])({}, componentCls + "-affix-wrapper", (0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])({}, genBasicInputStyle(token)), (_extends4 = {
    display: 'inline-flex',
    '&:not(&-disabled):hover': (0, _extends6["default"])((0, _extends6["default"])({}, genHoverStyle(token)), (0, _defineProperty2["default"])({
      zIndex: 1
    }, componentCls + "-search-with-button &", {
      zIndex: 0
    })),
    '&-focused, &:focus': {
      zIndex: 1
    },
    '&-disabled': (0, _defineProperty2["default"])({}, componentCls + "[disabled]", {
      background: 'transparent'
    })
  }, (0, _defineProperty2["default"])(_extends4, "> input" + componentCls, {
    padding: 0,
    fontSize: 'inherit',
    border: 'none',
    borderRadius: 0,
    outline: 'none',
    '&:focus': {
      boxShadow: 'none !important'
    }
  }), (0, _defineProperty2["default"])(_extends4, '&::before', {
    width: 0,
    visibility: 'hidden',
    content: '"\\a0"'
  }), (0, _defineProperty2["default"])(_extends4, "" + componentCls, {
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
  }), _extends4)), genAllowClearStyle(token)), (0, _defineProperty2["default"])({}, "" + iconCls + componentCls + "-password-icon", {
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
  return (0, _defineProperty2["default"])({}, componentCls + "-group", (0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])({}, (0, _style.resetComponent)(token)), genInputGroupStyle(token)), {
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
      '&-lg': (0, _defineProperty2["default"])({}, componentCls + "-group-addon", {
        borderRadius: borderRadiusLG
      }),
      '&-sm': (0, _defineProperty2["default"])({}, componentCls + "-group-addon", {
        borderRadius: borderRadiusSM
      }),
      // Status
      '&-status-error': (0, _defineProperty2["default"])({}, componentCls + "-group-addon", {
        color: colorError,
        borderColor: colorError
      }),
      '&-status-warning': (0, _defineProperty2["default"])({}, componentCls + "-group-addon:last-child", {
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
  return (0, _defineProperty2["default"])({}, searchPrefixCls, (_searchPrefixCls = {}, (0, _defineProperty2["default"])(_searchPrefixCls, "" + componentCls, {
    '&:hover, &:focus': (0, _defineProperty2["default"])({
      borderColor: token.colorPrimaryHover
    }, "+ " + componentCls + "-group-addon " + searchPrefixCls + "-button:not(" + antCls + "-btn-primary)", {
      borderInlineStartColor: token.colorPrimaryHover
    })
  }), (0, _defineProperty2["default"])(_searchPrefixCls, componentCls + "-affix-wrapper", {
    borderRadius: 0
  }), (0, _defineProperty2["default"])(_searchPrefixCls, componentCls + "-lg", {
    lineHeight: token.lineHeightLG - 0.0002
  }), (0, _defineProperty2["default"])(_searchPrefixCls, "> " + componentCls + "-group", (0, _defineProperty2["default"])({}, "> " + componentCls + "-group-addon:last-child", (_ref18 = {
    insetInlineStart: -1,
    padding: 0,
    border: 0
  }, (0, _defineProperty2["default"])(_ref18, searchPrefixCls + "-button", {
    paddingTop: 0,
    paddingBottom: 0,
    borderStartStartRadius: 0,
    borderStartEndRadius: token.borderRadius,
    borderEndEndRadius: token.borderRadius,
    borderEndStartRadius: 0
  }), (0, _defineProperty2["default"])(_ref18, searchPrefixCls + "-button:not(" + antCls + "-btn-primary)", (0, _defineProperty2["default"])({
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
  })), _ref18))), (0, _defineProperty2["default"])(_searchPrefixCls, searchPrefixCls + "-button", {
    height: token.controlHeight,
    '&:hover, &:focus': {
      zIndex: 1
    }
  }), (0, _defineProperty2["default"])(_searchPrefixCls, "&-large " + searchPrefixCls + "-button", {
    height: token.controlHeightLG
  }), (0, _defineProperty2["default"])(_searchPrefixCls, "&-small " + searchPrefixCls + "-button", {
    height: token.controlHeightSM
  }), (0, _defineProperty2["default"])(_searchPrefixCls, '&-rtl', {
    direction: 'rtl'
  }), (0, _defineProperty2["default"])(_searchPrefixCls, "&" + componentCls + "-compact-item", (_ref23 = {}, (0, _defineProperty2["default"])(_ref23, "&:not(" + componentCls + "-compact-last-item)", (0, _defineProperty2["default"])({}, componentCls + "-group-addon", (0, _defineProperty2["default"])({}, componentCls + "-search-button", {
    marginInlineEnd: -token.lineWidth,
    borderRadius: 0
  }))), (0, _defineProperty2["default"])(_ref23, "&:not(" + componentCls + "-compact-first-item)", (0, _defineProperty2["default"])({}, componentCls + "," + componentCls + "-affix-wrapper", {
    borderRadius: 0
  })), (0, _defineProperty2["default"])(_ref23, "> " + componentCls + "-group-addon " + componentCls + "-search-button,\n        > " + componentCls + ",\n        " + componentCls + "-affix-wrapper", {
    '&:hover,&:focus,&:active': {
      zIndex: 2
    }
  }), (0, _defineProperty2["default"])(_ref23, "> " + componentCls + "-affix-wrapper-focused", {
    zIndex: 2
  }), _ref23)), _searchPrefixCls));
};
function initInputToken(token) {
  // @ts-ignore
  return (0, _internal.mergeToken)(token, {
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
  return (0, _defineProperty2["default"])({}, textareaPrefixCls, (_textareaPrefixCls = {
    position: 'relative'
  }, (0, _defineProperty2["default"])(_textareaPrefixCls, textareaPrefixCls + "-suffix", {
    position: 'absolute',
    top: 0,
    insetInlineEnd: inputPaddingHorizontal,
    bottom: 0,
    zIndex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    margin: 'auto'
  }), (0, _defineProperty2["default"])(_textareaPrefixCls, "&-status-error,\n        &-status-warning,\n        &-status-success,\n        &-status-validating", (0, _defineProperty2["default"])({}, "&" + textareaPrefixCls + "-has-feedback", (0, _defineProperty2["default"])({}, "" + componentCls, {
    paddingInlineEnd: paddingLG
  }))), (0, _defineProperty2["default"])(_textareaPrefixCls, '&-show-count', (_showCount = {}, (0, _defineProperty2["default"])(_showCount, "> " + componentCls, {
    height: '100%'
  }), (0, _defineProperty2["default"])(_showCount, '&::after', {
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
var _default = (0, _internal.genComponentStyleHook)('Input', function (token) {
  var inputToken = initInputToken(token);
  return [genInputStyle(inputToken), genTextAreaStyle(inputToken), genAffixStyle(inputToken), genGroupStyle(inputToken), genSearchInputStyle(inputToken)];
});
exports["default"] = _default;