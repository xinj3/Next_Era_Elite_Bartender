"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _internal = require("../../theme/internal");
var _light = _interopRequireDefault(require("./light"));
var genLayoutStyle = function genLayoutStyle(token) {
  var _extends2;
  var antCls = token.antCls,
    componentCls = token.componentCls,
    colorText = token.colorText,
    colorTextLightSolid = token.colorTextLightSolid,
    colorBgHeader = token.colorBgHeader,
    colorBgBody = token.colorBgBody,
    colorBgTrigger = token.colorBgTrigger,
    layoutHeaderHeight = token.layoutHeaderHeight,
    layoutHeaderPaddingInline = token.layoutHeaderPaddingInline,
    layoutHeaderColor = token.layoutHeaderColor,
    layoutFooterPadding = token.layoutFooterPadding,
    layoutTriggerHeight = token.layoutTriggerHeight,
    layoutZeroTriggerSize = token.layoutZeroTriggerSize,
    motionDurationMid = token.motionDurationMid,
    motionDurationSlow = token.motionDurationSlow,
    fontSize = token.fontSize,
    borderRadius = token.borderRadius;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends3["default"])((0, _extends3["default"])((_extends2 = {
    display: 'flex',
    flex: 'auto',
    flexDirection: 'column',
    /* fix firefox can't set height smaller than content on flex item */
    minHeight: 0,
    background: colorBgBody,
    '&, *': {
      boxSizing: 'border-box'
    }
  }, (0, _defineProperty2["default"])(_extends2, "&" + componentCls + "-has-sider", (0, _defineProperty2["default"])({
    flexDirection: 'row'
  }, "> " + componentCls + ", > " + componentCls + "-content", {
    // https://segmentfault.com/a/1190000019498300
    width: 0
  })), (0, _defineProperty2["default"])(_extends2, componentCls + "-header, &" + componentCls + "-footer", {
    flex: '0 0 auto'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-header", (0, _defineProperty2["default"])({
    height: layoutHeaderHeight,
    paddingInline: layoutHeaderPaddingInline,
    color: layoutHeaderColor,
    lineHeight: layoutHeaderHeight + "px",
    background: colorBgHeader
  }, antCls + "-menu", {
    lineHeight: 'inherit'
  })), (0, _defineProperty2["default"])(_extends2, componentCls + "-footer", {
    padding: layoutFooterPadding,
    color: colorText,
    fontSize: fontSize,
    background: colorBgBody
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-content", {
    flex: 'auto',
    // fix firefox can't set height smaller than content on flex item
    minHeight: 0
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-sider", {
    position: 'relative',
    // fix firefox can't set width smaller than content on flex item
    minWidth: 0,
    background: colorBgHeader,
    transition: "all " + motionDurationMid,
    '&-children': (0, _defineProperty2["default"])({
      height: '100%',
      // Hack for fixing margin collapse bug
      // https://github.com/ant-design/ant-design/issues/7967
      // solution from https://stackoverflow.com/a/33132624/3040605
      marginTop: -0.1,
      paddingTop: 0.1
    }, antCls + "-menu" + antCls + "-menu-inline-collapsed", {
      width: 'auto'
    }),
    '&-has-trigger': {
      paddingBottom: layoutTriggerHeight
    },
    '&-right': {
      order: 1
    },
    '&-trigger': {
      position: 'fixed',
      bottom: 0,
      zIndex: 1,
      height: layoutTriggerHeight,
      color: colorTextLightSolid,
      lineHeight: layoutTriggerHeight + "px",
      textAlign: 'center',
      background: colorBgTrigger,
      cursor: 'pointer',
      transition: "all " + motionDurationMid
    },
    '&-zero-width': {
      '> *': {
        overflow: 'hidden'
      },
      '&-trigger': {
        position: 'absolute',
        top: layoutHeaderHeight,
        insetInlineEnd: -layoutZeroTriggerSize,
        zIndex: 1,
        width: layoutZeroTriggerSize,
        height: layoutZeroTriggerSize,
        color: colorTextLightSolid,
        fontSize: token.fontSizeXL,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: colorBgHeader,
        borderStartStartRadius: 0,
        borderStartEndRadius: borderRadius,
        borderEndEndRadius: borderRadius,
        borderEndStartRadius: 0,
        cursor: 'pointer',
        transition: "background " + motionDurationSlow + " ease",
        '&::after': {
          position: 'absolute',
          inset: 0,
          background: 'transparent',
          transition: "all " + motionDurationSlow,
          content: '""'
        },
        '&:hover::after': {
          // FIXME: Hardcode, but seems no need to create a token for this
          background: "rgba(255, 255, 255, 0.2)"
        },
        '&-right': {
          insetInlineStart: -layoutZeroTriggerSize,
          borderStartStartRadius: borderRadius,
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
          borderEndStartRadius: borderRadius
        }
      }
    }
  }), _extends2), (0, _light["default"])(token)), {
    // RTL
    '&-rtl': {
      direction: 'rtl'
    }
  }));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Layout', function (token) {
  var colorText = token.colorText,
    controlHeightSM = token.controlHeightSM,
    controlHeight = token.controlHeight,
    controlHeightLG = token.controlHeightLG,
    marginXXS = token.marginXXS;
  var layoutHeaderPaddingInline = controlHeightLG * 1.25;
  var layoutToken = (0, _internal.mergeToken)(token, {
    // Layout
    layoutHeaderHeight: controlHeight * 2,
    layoutHeaderPaddingInline: layoutHeaderPaddingInline,
    layoutHeaderColor: colorText,
    layoutFooterPadding: controlHeightSM + "px " + layoutHeaderPaddingInline + "px",
    layoutTriggerHeight: controlHeightLG + marginXXS * 2,
    layoutZeroTriggerSize: controlHeightLG
  });
  return [genLayoutStyle(layoutToken)];
}, function (token) {
  var colorBgLayout = token.colorBgLayout;
  return {
    colorBgHeader: '#001529',
    colorBgBody: colorBgLayout,
    colorBgTrigger: '#002140'
  };
});
exports["default"] = _default;