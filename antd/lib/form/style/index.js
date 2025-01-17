"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends5 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _motion = require("../../style/motion");
var _internal = require("../../theme/internal");
var _style = require("../../style");
var _explain = _interopRequireDefault(require("./explain"));
var resetForm = function resetForm(token) {
  var _ref;
  return _ref = {
    legend: {
      display: 'block',
      width: '100%',
      marginBottom: token.marginLG,
      padding: 0,
      color: token.colorTextDescription,
      fontSize: token.fontSizeLG,
      lineHeight: 'inherit',
      border: 0,
      borderBottom: token.lineWidth + "px " + token.lineType + " " + token.colorBorder
    },
    label: {
      fontSize: token.fontSize
    },
    'input[type="search"]': {
      boxSizing: 'border-box'
    },
    // Position radios and checkboxes better
    'input[type="radio"], input[type="checkbox"]': {
      lineHeight: 'normal'
    },
    'input[type="file"]': {
      display: 'block'
    },
    // Make range inputs behave like textual form controls
    'input[type="range"]': {
      display: 'block',
      width: '100%'
    },
    // Make multiple select elements height not fixed
    'select[multiple], select[size]': {
      height: 'auto'
    }
  }, (0, _defineProperty2["default"])(_ref, "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus", {
    outline: 0,
    boxShadow: "0 0 0 " + token.controlOutlineWidth + "px " + token.controlOutline
  }), (0, _defineProperty2["default"])(_ref, "output", {
    display: 'block',
    paddingTop: 15,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight
  }), _ref;
};
var genFormSize = function genFormSize(token, height) {
  var _formItemCls;
  var formItemCls = token.formItemCls;
  return (0, _defineProperty2["default"])({}, formItemCls, (_formItemCls = {}, (0, _defineProperty2["default"])(_formItemCls, formItemCls + "-label > label", {
    height: height
  }), (0, _defineProperty2["default"])(_formItemCls, formItemCls + "-control-input", {
    minHeight: height
  }), _formItemCls));
};
var genFormStyle = function genFormStyle(token) {
  var _extends2;
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, token.componentCls, (0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])({}, (0, _style.resetComponent)(token)), resetForm(token)), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, componentCls + "-text", {
    display: 'inline-block',
    paddingInlineEnd: token.paddingSM
  }), (0, _defineProperty2["default"])(_extends2, '&-small', (0, _extends5["default"])({}, genFormSize(token, token.controlHeightSM))), (0, _defineProperty2["default"])(_extends2, '&-large', (0, _extends5["default"])({}, genFormSize(token, token.controlHeightLG))), _extends2)));
};
var genFormItemStyle = function genFormItemStyle(token) {
  var _label, _ref6, _extends3;
  var formItemCls = token.formItemCls,
    iconCls = token.iconCls,
    componentCls = token.componentCls,
    rootPrefixCls = token.rootPrefixCls;
  return (0, _defineProperty2["default"])({}, formItemCls, (0, _extends5["default"])((0, _extends5["default"])({}, (0, _style.resetComponent)(token)), (_extends3 = {
    marginBottom: token.marginLG,
    verticalAlign: 'top',
    '&-with-help': {
      transition: 'none'
    }
  }, (0, _defineProperty2["default"])(_extends3, "&-hidden,\n        &-hidden." + rootPrefixCls + "-row", {
    // https://github.com/ant-design/ant-design/issues/26141
    display: 'none'
  }), (0, _defineProperty2["default"])(_extends3, '&-has-warning', (0, _defineProperty2["default"])({}, formItemCls + "-split", {
    color: token.colorError
  })), (0, _defineProperty2["default"])(_extends3, '&-has-error', (0, _defineProperty2["default"])({}, formItemCls + "-split", {
    color: token.colorWarning
  })), (0, _defineProperty2["default"])(_extends3, formItemCls + "-label", {
    display: 'inline-block',
    flexGrow: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textAlign: 'end',
    verticalAlign: 'middle',
    '&-left': {
      textAlign: 'start'
    },
    '&-wrap': {
      overflow: 'unset',
      lineHeight: token.lineHeight + " - 0.25em",
      whiteSpace: 'unset'
    },
    '> label': (_label = {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      maxWidth: '100%',
      height: token.controlHeight,
      color: token.colorTextHeading,
      fontSize: token.fontSize
    }, (0, _defineProperty2["default"])(_label, "> " + iconCls, {
      fontSize: token.fontSize,
      verticalAlign: 'top'
    }), (0, _defineProperty2["default"])(_label, "&" + formItemCls + "-required:not(" + formItemCls + "-required-mark-optional)::before", (0, _defineProperty2["default"])({
      display: 'inline-block',
      marginInlineEnd: token.marginXXS,
      color: token.colorError,
      fontSize: token.fontSize,
      fontFamily: 'SimSun, sans-serif',
      lineHeight: 1,
      content: '"*"'
    }, componentCls + "-hide-required-mark &", {
      display: 'none'
    })), (0, _defineProperty2["default"])(_label, formItemCls + "-optional", (0, _defineProperty2["default"])({
      display: 'inline-block',
      marginInlineStart: token.marginXXS,
      color: token.colorTextDescription
    }, componentCls + "-hide-required-mark &", {
      display: 'none'
    })), (0, _defineProperty2["default"])(_label, formItemCls + "-tooltip", {
      color: token.colorTextDescription,
      cursor: 'help',
      writingMode: 'horizontal-tb',
      marginInlineStart: token.marginXXS
    }), (0, _defineProperty2["default"])(_label, '&::after', {
      content: '":"',
      position: 'relative',
      marginBlock: 0,
      marginInlineStart: token.marginXXS / 2,
      marginInlineEnd: token.marginXS
    }), (0, _defineProperty2["default"])(_label, "&" + formItemCls + "-no-colon::after", {
      content: '" "'
    }), _label)
  }), (0, _defineProperty2["default"])(_extends3, formItemCls + "-control", (_ref6 = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  }, (0, _defineProperty2["default"])(_ref6, "&:first-child:not([class^=\"'" + rootPrefixCls + "-col-'\"]):not([class*=\"' " + rootPrefixCls + "-col-'\"])", {
    width: '100%'
  }), (0, _defineProperty2["default"])(_ref6, '&-input', {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minHeight: token.controlHeight,
    '&-content': {
      flex: 'auto',
      maxWidth: '100%'
    }
  }), _ref6)), (0, _defineProperty2["default"])(_extends3, formItemCls, {
    '&-explain, &-extra': {
      clear: 'both',
      color: token.colorTextDescription,
      fontSize: token.fontSize,
      lineHeight: token.lineHeight
    },
    '&-explain-connected': {
      width: '100%'
    },
    '&-extra': {
      minHeight: token.controlHeightSM,
      transition: "color " + token.motionDurationMid + " " + token.motionEaseOut // sync input color transition
    },

    '&-explain': {
      '&-error': {
        color: token.colorError
      },
      '&-warning': {
        color: token.colorWarning
      }
    }
  }), (0, _defineProperty2["default"])(_extends3, "&-with-help " + formItemCls + "-explain", {
    height: 'auto',
    opacity: 1
  }), (0, _defineProperty2["default"])(_extends3, formItemCls + "-feedback-icon", {
    fontSize: token.fontSize,
    textAlign: 'center',
    visibility: 'visible',
    animationName: _motion.zoomIn,
    animationDuration: token.motionDurationMid,
    animationTimingFunction: token.motionEaseOutBack,
    pointerEvents: 'none',
    '&-success': {
      color: token.colorSuccess
    },
    '&-error': {
      color: token.colorError
    },
    '&-warning': {
      color: token.colorWarning
    },
    '&-validating': {
      color: token.colorPrimary
    }
  }), _extends3)));
};
var genHorizontalStyle = function genHorizontalStyle(token) {
  var _ref8;
  var componentCls = token.componentCls,
    formItemCls = token.formItemCls,
    rootPrefixCls = token.rootPrefixCls;
  return (0, _defineProperty2["default"])({}, componentCls + "-horizontal", (_ref8 = {}, (0, _defineProperty2["default"])(_ref8, formItemCls + "-label", {
    flexGrow: 0
  }), (0, _defineProperty2["default"])(_ref8, formItemCls + "-control", {
    flex: '1 1 0',
    // https://github.com/ant-design/ant-design/issues/32777
    // https://github.com/ant-design/ant-design/issues/33773
    minWidth: 0
  }), (0, _defineProperty2["default"])(_ref8, formItemCls + "-label." + rootPrefixCls + "-col-24 + " + formItemCls + "-control", {
    minWidth: 'unset'
  }), _ref8));
};
var genInlineStyle = function genInlineStyle(token) {
  var _formItemCls2;
  var componentCls = token.componentCls,
    formItemCls = token.formItemCls;
  return (0, _defineProperty2["default"])({}, componentCls + "-inline", (0, _defineProperty2["default"])({
    display: 'flex',
    flexWrap: 'wrap'
  }, formItemCls, (_formItemCls2 = {
    flex: 'none',
    flexWrap: 'nowrap',
    marginInlineEnd: token.margin,
    marginBottom: 0,
    '&-with-help': {
      marginBottom: token.marginLG
    }
  }, (0, _defineProperty2["default"])(_formItemCls2, "> " + formItemCls + "-label,\n        > " + formItemCls + "-control", {
    display: 'inline-block',
    verticalAlign: 'top'
  }), (0, _defineProperty2["default"])(_formItemCls2, "> " + formItemCls + "-label", {
    flex: 'none'
  }), (0, _defineProperty2["default"])(_formItemCls2, componentCls + "-text", {
    display: 'inline-block'
  }), (0, _defineProperty2["default"])(_formItemCls2, formItemCls + "-has-feedback", {
    display: 'inline-block'
  }), _formItemCls2)));
};
var makeVerticalLayoutLabel = function makeVerticalLayoutLabel(token) {
  return {
    margin: 0,
    padding: "0 0 " + token.paddingXS + "px",
    whiteSpace: 'initial',
    textAlign: 'start',
    '> label': {
      margin: 0,
      '&::after': {
        display: 'none'
      }
    }
  };
};
var makeVerticalLayout = function makeVerticalLayout(token) {
  var _ref12;
  var componentCls = token.componentCls,
    formItemCls = token.formItemCls;
  return _ref12 = {}, (0, _defineProperty2["default"])(_ref12, formItemCls + " " + formItemCls + "-label", (0, _extends5["default"])({}, makeVerticalLayoutLabel(token))), (0, _defineProperty2["default"])(_ref12, componentCls, (0, _defineProperty2["default"])({}, formItemCls, (0, _defineProperty2["default"])({
    flexWrap: 'wrap'
  }, formItemCls + "-label,\n          " + formItemCls + "-control", {
    flex: '0 0 100%',
    maxWidth: '100%'
  }))), _ref12;
};
var genVerticalStyle = function genVerticalStyle(token) {
  var _ref17;
  var componentCls = token.componentCls,
    formItemCls = token.formItemCls,
    rootPrefixCls = token.rootPrefixCls;
  return _ref17 = {}, (0, _defineProperty2["default"])(_ref17, componentCls + "-vertical", (0, _defineProperty2["default"])({}, formItemCls, (0, _defineProperty2["default"])({
    '&-row': {
      flexDirection: 'column'
    },
    '&-label > label': {
      height: 'auto'
    }
  }, componentCls + "-item-control", {
    width: '100%'
  }))), (0, _defineProperty2["default"])(_ref17, componentCls + "-vertical " + formItemCls + "-label,\n      ." + rootPrefixCls + "-col-24" + formItemCls + "-label,\n      ." + rootPrefixCls + "-col-xl-24" + formItemCls + "-label", (0, _extends5["default"])({}, makeVerticalLayoutLabel(token))), (0, _defineProperty2["default"])(_ref17, "@media (max-width: " + token.screenSMMax + "px)", (0, _extends5["default"])((0, _extends5["default"])({}, makeVerticalLayout(token)), (0, _defineProperty2["default"])({}, componentCls, (0, _defineProperty2["default"])({}, "." + rootPrefixCls + "-col-xs-24" + formItemCls + "-label", (0, _extends5["default"])({}, makeVerticalLayoutLabel(token)))))), (0, _defineProperty2["default"])(_ref17, "@media (max-width: " + token.screenSMMax + "px)", (0, _defineProperty2["default"])({}, componentCls, (0, _defineProperty2["default"])({}, "." + rootPrefixCls + "-col-sm-24" + formItemCls + "-label", (0, _extends5["default"])({}, makeVerticalLayoutLabel(token))))), (0, _defineProperty2["default"])(_ref17, "@media (max-width: " + token.screenMDMax + "px)", (0, _defineProperty2["default"])({}, componentCls, (0, _defineProperty2["default"])({}, "." + rootPrefixCls + "-col-md-24" + formItemCls + "-label", (0, _extends5["default"])({}, makeVerticalLayoutLabel(token))))), (0, _defineProperty2["default"])(_ref17, "@media (max-width: " + token.screenLGMax + "px)", (0, _defineProperty2["default"])({}, componentCls, (0, _defineProperty2["default"])({}, "." + rootPrefixCls + "-col-lg-24" + formItemCls + "-label", (0, _extends5["default"])({}, makeVerticalLayoutLabel(token))))), _ref17;
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Form', function (token, _ref18) {
  var rootPrefixCls = _ref18.rootPrefixCls;
  var formToken = (0, _internal.mergeToken)(token, {
    formItemCls: token.componentCls + "-item",
    rootPrefixCls: rootPrefixCls
  });
  return [genFormStyle(formToken), genFormItemStyle(formToken), (0, _explain["default"])(formToken), genHorizontalStyle(formToken), genInlineStyle(formToken), genVerticalStyle(formToken), (0, _motion.genCollapseMotion)(formToken), _motion.zoomIn];
});
exports["default"] = _default;