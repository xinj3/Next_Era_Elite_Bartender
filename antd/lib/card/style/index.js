"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends5 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
// ============================== Styles ==============================
// ============================== Head ==============================
var genCardHeadStyle = function genCardHeadStyle(token) {
  var antCls = token.antCls,
    componentCls = token.componentCls,
    cardHeadHeight = token.cardHeadHeight,
    cardHeadPadding = token.cardHeadPadding,
    cardPaddingBase = token.cardPaddingBase,
    cardHeadTabsMarginBottom = token.cardHeadTabsMarginBottom;
  return (0, _extends5["default"])((0, _extends5["default"])({
    minHeight: cardHeadHeight,
    marginBottom: -1,
    padding: "0 " + cardPaddingBase + "px",
    color: token.colorTextHeading,
    fontWeight: token.fontWeightStrong,
    fontSize: token.fontSizeLG,
    background: 'transparent',
    borderBottom: token.lineWidth + "px " + token.lineType + " " + token.colorBorderSecondary,
    borderRadius: token.borderRadiusLG + "px " + token.borderRadiusLG + "px 0 0"
  }, (0, _style.clearFix)()), (0, _defineProperty2["default"])({
    '&-wrapper': {
      display: 'flex',
      alignItems: 'center'
    },
    '&-title': (0, _extends5["default"])((0, _extends5["default"])({
      display: 'inline-block',
      flex: 1,
      padding: cardHeadPadding + "px 0"
    }, _style.textEllipsis), (0, _defineProperty2["default"])({}, "\n          > " + componentCls + "-typography,\n          > " + componentCls + "-typography-edit-content\n        ", {
      insetInlineStart: 0,
      marginTop: 0,
      marginBottom: 0
    }))
  }, antCls + "-tabs-top", {
    clear: 'both',
    marginBottom: cardHeadTabsMarginBottom,
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: token.fontSize,
    '&-bar': {
      borderBottom: token.lineWidth + "px " + token.lineType + " " + token.colorBorderSecondary
    }
  }));
};
// ============================== Grid ==============================
var genCardGridStyle = function genCardGridStyle(token) {
  var cardPaddingBase = token.cardPaddingBase,
    colorBorderSecondary = token.colorBorderSecondary,
    cardShadow = token.cardShadow,
    lineWidth = token.lineWidth;
  return {
    width: '33.33%',
    padding: cardPaddingBase,
    border: 0,
    borderRadius: 0,
    boxShadow: "\n      " + lineWidth + "px 0 0 0 " + colorBorderSecondary + ",\n      0 " + lineWidth + "px 0 0 " + colorBorderSecondary + ",\n      " + lineWidth + "px " + lineWidth + "px 0 0 " + colorBorderSecondary + ",\n      " + lineWidth + "px 0 0 0 " + colorBorderSecondary + " inset,\n      0 " + lineWidth + "px 0 0 " + colorBorderSecondary + " inset;\n    ",
    transition: "all " + token.motionDurationMid,
    '&-hoverable:hover': {
      position: 'relative',
      zIndex: 1,
      boxShadow: cardShadow
    }
  };
};
// ============================== Actions ==============================
var genCardActionsStyle = function genCardActionsStyle(token) {
  var _span;
  var componentCls = token.componentCls,
    iconCls = token.iconCls,
    cardActionsLiMargin = token.cardActionsLiMargin,
    cardActionsIconSize = token.cardActionsIconSize,
    colorBorderSecondary = token.colorBorderSecondary;
  return (0, _extends5["default"])((0, _extends5["default"])({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    background: token.colorBgContainer,
    borderTop: token.lineWidth + "px " + token.lineType + " " + colorBorderSecondary,
    display: 'flex'
  }, (0, _style.clearFix)()), {
    '& > li': {
      margin: cardActionsLiMargin,
      color: token.colorTextDescription,
      textAlign: 'center',
      '> span': (_span = {
        position: 'relative',
        display: 'block',
        minWidth: token.cardActionsIconSize * 2,
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        cursor: 'pointer',
        '&:hover': {
          color: token.colorPrimary,
          transition: "color " + token.motionDurationMid
        }
      }, (0, _defineProperty2["default"])(_span, "a:not(" + componentCls + "-btn), > " + iconCls, {
        display: 'inline-block',
        width: '100%',
        color: token.colorTextDescription,
        lineHeight: token.fontSize * token.lineHeight + "px",
        transition: "color " + token.motionDurationMid,
        '&:hover': {
          color: token.colorPrimary
        }
      }), (0, _defineProperty2["default"])(_span, "> " + iconCls, {
        fontSize: cardActionsIconSize,
        lineHeight: cardActionsIconSize * token.lineHeight + "px"
      }), _span),
      '&:not(:last-child)': {
        borderInlineEnd: token.lineWidth + "px " + token.lineType + " " + colorBorderSecondary
      }
    }
  });
};
// ============================== Meta ==============================
var genCardMetaStyle = function genCardMetaStyle(token) {
  return (0, _extends5["default"])((0, _extends5["default"])({
    margin: "-" + token.marginXXS + "px 0",
    display: 'flex'
  }, (0, _style.clearFix)()), {
    '&-avatar': {
      paddingInlineEnd: token.padding
    },
    '&-detail': {
      overflow: 'hidden',
      '> div:not(:last-child)': {
        marginBottom: token.marginXS
      }
    },
    '&-title': (0, _extends5["default"])({
      color: token.colorTextHeading,
      fontWeight: token.fontWeightStrong,
      fontSize: token.fontSizeLG
    }, _style.textEllipsis),
    '&-description': {
      color: token.colorTextDescription
    }
  });
};
// ============================== Inner ==============================
var genCardTypeInnerStyle = function genCardTypeInnerStyle(token) {
  var _ref;
  var componentCls = token.componentCls,
    cardPaddingBase = token.cardPaddingBase,
    colorFillAlter = token.colorFillAlter,
    cardInnerHeadPadding = token.cardInnerHeadPadding;
  return _ref = {}, (0, _defineProperty2["default"])(_ref, componentCls + "-head", {
    padding: "0 " + cardPaddingBase + "px",
    background: colorFillAlter,
    '&-title': {
      padding: cardInnerHeadPadding + "px 0",
      fontSize: token.fontSize
    }
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-body", {
    padding: token.padding + "px " + cardPaddingBase + "px"
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-extra", {
    padding: cardInnerHeadPadding + 1.5 + "px 0"
  }), _ref;
};
// ============================== Loading ==============================
var genCardLoadingStyle = function genCardLoadingStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({
    overflow: 'hidden'
  }, componentCls + "-body", {
    userSelect: 'none'
  });
};
// ============================== Basic ==============================
var genCardStyle = function genCardStyle(token) {
  var _extends4, _ref4, _ref5, _ref7;
  var componentCls = token.componentCls,
    cardShadow = token.cardShadow,
    cardHeadHeight = token.cardHeadHeight,
    cardHeadPadding = token.cardHeadPadding,
    colorBorderSecondary = token.colorBorderSecondary,
    boxShadow = token.boxShadow,
    cardPaddingBase = token.cardPaddingBase;
  return _ref7 = {}, (0, _defineProperty2["default"])(_ref7, componentCls, (0, _extends5["default"])((0, _extends5["default"])({}, (0, _style.resetComponent)(token)), (_extends4 = {
    position: 'relative',
    background: token.colorBgContainer,
    borderRadius: token.borderRadiusLG
  }, (0, _defineProperty2["default"])(_extends4, "&:not(" + componentCls + "-bordered)", {
    boxShadow: boxShadow
  }), (0, _defineProperty2["default"])(_extends4, componentCls + "-head", genCardHeadStyle(token)), (0, _defineProperty2["default"])(_extends4, componentCls + "-extra", {
    // https://stackoverflow.com/a/22429853/3040605
    marginInlineStart: 'auto',
    padding: '',
    color: '',
    fontWeight: 'normal',
    fontSize: token.fontSize
  }), (0, _defineProperty2["default"])(_extends4, componentCls + "-body", (0, _extends5["default"])({
    padding: cardPaddingBase,
    borderRadius: " 0 0 " + token.borderRadiusLG + "px " + token.borderRadiusLG + "px"
  }, (0, _style.clearFix)())), (0, _defineProperty2["default"])(_extends4, componentCls + "-grid", genCardGridStyle(token)), (0, _defineProperty2["default"])(_extends4, componentCls + "-cover", {
    '> *': {
      display: 'block',
      width: '100%'
    },
    img: {
      borderRadius: token.borderRadiusLG + "px " + token.borderRadiusLG + "px 0 0"
    }
  }), (0, _defineProperty2["default"])(_extends4, componentCls + "-actions", genCardActionsStyle(token)), (0, _defineProperty2["default"])(_extends4, componentCls + "-meta", genCardMetaStyle(token)), _extends4))), (0, _defineProperty2["default"])(_ref7, componentCls + "-bordered", (0, _defineProperty2["default"])({
    border: token.lineWidth + "px " + token.lineType + " " + colorBorderSecondary
  }, componentCls + "-cover", {
    marginTop: -1,
    marginInlineStart: -1,
    marginInlineEnd: -1
  })), (0, _defineProperty2["default"])(_ref7, componentCls + "-hoverable", {
    cursor: 'pointer',
    transition: "box-shadow " + token.motionDurationMid + ", border-color " + token.motionDurationMid,
    '&:hover': {
      borderColor: 'transparent',
      boxShadow: cardShadow
    }
  }), (0, _defineProperty2["default"])(_ref7, componentCls + "-contain-grid", (_ref4 = {}, (0, _defineProperty2["default"])(_ref4, componentCls + "-body", {
    display: 'flex',
    flexWrap: 'wrap'
  }), (0, _defineProperty2["default"])(_ref4, "&:not(" + componentCls + "-loading) " + componentCls + "-body", {
    marginBlockStart: -token.lineWidth,
    marginInlineStart: -token.lineWidth,
    padding: 0
  }), _ref4)), (0, _defineProperty2["default"])(_ref7, componentCls + "-contain-tabs", (0, _defineProperty2["default"])({}, "> " + componentCls + "-head", (_ref5 = {}, (0, _defineProperty2["default"])(_ref5, componentCls + "-head-title", {
    minHeight: cardHeadHeight - cardHeadPadding,
    paddingBottom: 0
  }), (0, _defineProperty2["default"])(_ref5, componentCls + "-extra", {
    paddingBottom: 0
  }), _ref5))), (0, _defineProperty2["default"])(_ref7, componentCls + "-type-inner", genCardTypeInnerStyle(token)), (0, _defineProperty2["default"])(_ref7, componentCls + "-loading", genCardLoadingStyle(token)), (0, _defineProperty2["default"])(_ref7, componentCls + "-rtl", {
    direction: 'rtl'
  }), _ref7;
};
// ============================== Size ==============================
var genCardSizeStyle = function genCardSizeStyle(token) {
  var _ref8, _ref10;
  var componentCls = token.componentCls,
    cardPaddingSM = token.cardPaddingSM,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    cardHeaderHeightSM = token.cardHeaderHeightSM;
  var cardHeadPaddingSM = (cardHeaderHeightSM - fontSize * lineHeight) / 2;
  return (0, _defineProperty2["default"])({}, componentCls + "-small", (_ref10 = {}, (0, _defineProperty2["default"])(_ref10, "> " + componentCls + "-head", (0, _defineProperty2["default"])({
    minHeight: cardHeaderHeightSM,
    padding: "0 " + cardPaddingSM + "px",
    fontSize: token.fontSize
  }, "> " + componentCls + "-head-wrapper", (_ref8 = {}, (0, _defineProperty2["default"])(_ref8, "> " + componentCls + "-head-title", {
    padding: cardHeadPaddingSM + "px 0"
  }), (0, _defineProperty2["default"])(_ref8, "> " + componentCls + "-extra", {
    padding: cardHeadPaddingSM + "px 0",
    fontSize: token.fontSize
  }), _ref8))), (0, _defineProperty2["default"])(_ref10, "> " + componentCls + "-body", {
    padding: cardPaddingSM
  }), _ref10));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Card', function (token) {
  var cardToken = (0, _internal.mergeToken)(token, {
    cardShadow: token.boxShadowCard,
    cardHeaderHeight: token.fontSizeLG * token.lineHeightLG + token.padding * 2,
    cardHeaderHeightSM: token.fontSize * token.lineHeight + token.paddingXS * 2,
    cardHeadPadding: token.padding,
    cardPaddingBase: token.paddingLG,
    cardHeadTabsMarginBottom: -token.padding - token.lineWidth,
    cardInnerHeadPadding: token.paddingSM,
    cardActionsLiMargin: token.paddingSM + "px 0",
    cardActionsIconSize: token.fontSize,
    cardPaddingSM: 12 // Fixed padding.
  });

  return [
  // Style
  genCardStyle(cardToken),
  // Size
  genCardSizeStyle(cardToken)];
});
exports["default"] = _default;