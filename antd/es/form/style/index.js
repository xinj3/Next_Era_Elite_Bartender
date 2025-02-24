import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genCollapseMotion, zoomIn } from '../../style/motion';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';
import genFormValidateMotionStyle from './explain';
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
  }, _defineProperty(_ref, "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus", {
    outline: 0,
    boxShadow: "0 0 0 " + token.controlOutlineWidth + "px " + token.controlOutline
  }), _defineProperty(_ref, "output", {
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
  return _defineProperty({}, formItemCls, (_formItemCls = {}, _defineProperty(_formItemCls, formItemCls + "-label > label", {
    height: height
  }), _defineProperty(_formItemCls, formItemCls + "-control-input", {
    minHeight: height
  }), _formItemCls));
};
var genFormStyle = function genFormStyle(token) {
  var _extends2;
  var componentCls = token.componentCls;
  return _defineProperty({}, token.componentCls, _extends(_extends(_extends({}, resetComponent(token)), resetForm(token)), (_extends2 = {}, _defineProperty(_extends2, componentCls + "-text", {
    display: 'inline-block',
    paddingInlineEnd: token.paddingSM
  }), _defineProperty(_extends2, '&-small', _extends({}, genFormSize(token, token.controlHeightSM))), _defineProperty(_extends2, '&-large', _extends({}, genFormSize(token, token.controlHeightLG))), _extends2)));
};
var genFormItemStyle = function genFormItemStyle(token) {
  var _label, _ref6, _extends3;
  var formItemCls = token.formItemCls,
    iconCls = token.iconCls,
    componentCls = token.componentCls,
    rootPrefixCls = token.rootPrefixCls;
  return _defineProperty({}, formItemCls, _extends(_extends({}, resetComponent(token)), (_extends3 = {
    marginBottom: token.marginLG,
    verticalAlign: 'top',
    '&-with-help': {
      transition: 'none'
    }
  }, _defineProperty(_extends3, "&-hidden,\n        &-hidden." + rootPrefixCls + "-row", {
    // https://github.com/ant-design/ant-design/issues/26141
    display: 'none'
  }), _defineProperty(_extends3, '&-has-warning', _defineProperty({}, formItemCls + "-split", {
    color: token.colorError
  })), _defineProperty(_extends3, '&-has-error', _defineProperty({}, formItemCls + "-split", {
    color: token.colorWarning
  })), _defineProperty(_extends3, formItemCls + "-label", {
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
    }, _defineProperty(_label, "> " + iconCls, {
      fontSize: token.fontSize,
      verticalAlign: 'top'
    }), _defineProperty(_label, "&" + formItemCls + "-required:not(" + formItemCls + "-required-mark-optional)::before", _defineProperty({
      display: 'inline-block',
      marginInlineEnd: token.marginXXS,
      color: token.colorError,
      fontSize: token.fontSize,
      fontFamily: 'SimSun, sans-serif',
      lineHeight: 1,
      content: '"*"'
    }, componentCls + "-hide-required-mark &", {
      display: 'none'
    })), _defineProperty(_label, formItemCls + "-optional", _defineProperty({
      display: 'inline-block',
      marginInlineStart: token.marginXXS,
      color: token.colorTextDescription
    }, componentCls + "-hide-required-mark &", {
      display: 'none'
    })), _defineProperty(_label, formItemCls + "-tooltip", {
      color: token.colorTextDescription,
      cursor: 'help',
      writingMode: 'horizontal-tb',
      marginInlineStart: token.marginXXS
    }), _defineProperty(_label, '&::after', {
      content: '":"',
      position: 'relative',
      marginBlock: 0,
      marginInlineStart: token.marginXXS / 2,
      marginInlineEnd: token.marginXS
    }), _defineProperty(_label, "&" + formItemCls + "-no-colon::after", {
      content: '" "'
    }), _label)
  }), _defineProperty(_extends3, formItemCls + "-control", (_ref6 = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  }, _defineProperty(_ref6, "&:first-child:not([class^=\"'" + rootPrefixCls + "-col-'\"]):not([class*=\"' " + rootPrefixCls + "-col-'\"])", {
    width: '100%'
  }), _defineProperty(_ref6, '&-input', {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minHeight: token.controlHeight,
    '&-content': {
      flex: 'auto',
      maxWidth: '100%'
    }
  }), _ref6)), _defineProperty(_extends3, formItemCls, {
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
  }), _defineProperty(_extends3, "&-with-help " + formItemCls + "-explain", {
    height: 'auto',
    opacity: 1
  }), _defineProperty(_extends3, formItemCls + "-feedback-icon", {
    fontSize: token.fontSize,
    textAlign: 'center',
    visibility: 'visible',
    animationName: zoomIn,
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
  return _defineProperty({}, componentCls + "-horizontal", (_ref8 = {}, _defineProperty(_ref8, formItemCls + "-label", {
    flexGrow: 0
  }), _defineProperty(_ref8, formItemCls + "-control", {
    flex: '1 1 0',
    // https://github.com/ant-design/ant-design/issues/32777
    // https://github.com/ant-design/ant-design/issues/33773
    minWidth: 0
  }), _defineProperty(_ref8, formItemCls + "-label." + rootPrefixCls + "-col-24 + " + formItemCls + "-control", {
    minWidth: 'unset'
  }), _ref8));
};
var genInlineStyle = function genInlineStyle(token) {
  var _formItemCls2;
  var componentCls = token.componentCls,
    formItemCls = token.formItemCls;
  return _defineProperty({}, componentCls + "-inline", _defineProperty({
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
  }, _defineProperty(_formItemCls2, "> " + formItemCls + "-label,\n        > " + formItemCls + "-control", {
    display: 'inline-block',
    verticalAlign: 'top'
  }), _defineProperty(_formItemCls2, "> " + formItemCls + "-label", {
    flex: 'none'
  }), _defineProperty(_formItemCls2, componentCls + "-text", {
    display: 'inline-block'
  }), _defineProperty(_formItemCls2, formItemCls + "-has-feedback", {
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
  return _ref12 = {}, _defineProperty(_ref12, formItemCls + " " + formItemCls + "-label", _extends({}, makeVerticalLayoutLabel(token))), _defineProperty(_ref12, componentCls, _defineProperty({}, formItemCls, _defineProperty({
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
  return _ref17 = {}, _defineProperty(_ref17, componentCls + "-vertical", _defineProperty({}, formItemCls, _defineProperty({
    '&-row': {
      flexDirection: 'column'
    },
    '&-label > label': {
      height: 'auto'
    }
  }, componentCls + "-item-control", {
    width: '100%'
  }))), _defineProperty(_ref17, componentCls + "-vertical " + formItemCls + "-label,\n      ." + rootPrefixCls + "-col-24" + formItemCls + "-label,\n      ." + rootPrefixCls + "-col-xl-24" + formItemCls + "-label", _extends({}, makeVerticalLayoutLabel(token))), _defineProperty(_ref17, "@media (max-width: " + token.screenSMMax + "px)", _extends(_extends({}, makeVerticalLayout(token)), _defineProperty({}, componentCls, _defineProperty({}, "." + rootPrefixCls + "-col-xs-24" + formItemCls + "-label", _extends({}, makeVerticalLayoutLabel(token)))))), _defineProperty(_ref17, "@media (max-width: " + token.screenSMMax + "px)", _defineProperty({}, componentCls, _defineProperty({}, "." + rootPrefixCls + "-col-sm-24" + formItemCls + "-label", _extends({}, makeVerticalLayoutLabel(token))))), _defineProperty(_ref17, "@media (max-width: " + token.screenMDMax + "px)", _defineProperty({}, componentCls, _defineProperty({}, "." + rootPrefixCls + "-col-md-24" + formItemCls + "-label", _extends({}, makeVerticalLayoutLabel(token))))), _defineProperty(_ref17, "@media (max-width: " + token.screenLGMax + "px)", _defineProperty({}, componentCls, _defineProperty({}, "." + rootPrefixCls + "-col-lg-24" + formItemCls + "-label", _extends({}, makeVerticalLayoutLabel(token))))), _ref17;
};
// ============================== Export ==============================
export default genComponentStyleHook('Form', function (token, _ref18) {
  var rootPrefixCls = _ref18.rootPrefixCls;
  var formToken = mergeToken(token, {
    formItemCls: token.componentCls + "-item",
    rootPrefixCls: rootPrefixCls
  });
  return [genFormStyle(formToken), genFormItemStyle(formToken), genFormValidateMotionStyle(formToken), genHorizontalStyle(formToken), genInlineStyle(formToken), genVerticalStyle(formToken), genCollapseMotion(formToken), zoomIn];
});