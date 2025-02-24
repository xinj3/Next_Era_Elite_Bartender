import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { initFadeMotion, initZoomMotion } from '../../style/motion';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { clearFix, genFocusStyle, resetComponent } from '../../style';
function box(position) {
  return {
    position: position,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
export var genModalMaskStyle = function genModalMaskStyle(token) {
  var _ref;
  var componentCls = token.componentCls;
  return [_defineProperty({}, componentCls + "-root", (_ref = {}, _defineProperty(_ref, "" + componentCls + token.antCls + "-zoom-enter, " + componentCls + token.antCls + "-zoom-appear", {
    // reset scale avoid mousePosition bug
    transform: 'none',
    opacity: 0,
    animationDuration: token.motionDurationSlow,
    // https://github.com/ant-design/ant-design/issues/11777
    userSelect: 'none'
  }), _defineProperty(_ref, componentCls + "-mask", _extends(_extends({}, box('fixed')), _defineProperty({
    zIndex: token.zIndexPopupBase,
    height: '100%',
    backgroundColor: token.colorBgMask
  }, componentCls + "-hidden", {
    display: 'none'
  }))), _defineProperty(_ref, componentCls + "-wrap", _extends(_extends({}, box('fixed')), {
    overflow: 'auto',
    outline: 0,
    WebkitOverflowScrolling: 'touch'
  })), _ref)), _defineProperty({}, componentCls + "-root", initFadeMotion(token))];
};
var genModalStyle = function genModalStyle(token) {
  var _ref6, _ref7, _extends3, _ref11;
  var componentCls = token.componentCls;
  return [// ======================== Root =========================
  _defineProperty({}, componentCls + "-root", (_ref7 = {}, _defineProperty(_ref7, componentCls + "-wrap", {
    zIndex: token.zIndexPopupBase,
    position: 'fixed',
    inset: 0,
    overflow: 'auto',
    outline: 0,
    WebkitOverflowScrolling: 'touch'
  }), _defineProperty(_ref7, componentCls + "-wrap-rtl", {
    direction: 'rtl'
  }), _defineProperty(_ref7, componentCls + "-centered", _defineProperty({
    textAlign: 'center',
    '&::before': {
      display: 'inline-block',
      width: 0,
      height: '100%',
      verticalAlign: 'middle',
      content: '""'
    }
  }, componentCls, {
    top: 0,
    display: 'inline-block',
    paddingBottom: 0,
    textAlign: 'start',
    verticalAlign: 'middle'
  })), _defineProperty(_ref7, "@media (max-width: " + token.screenSMMax + ")", (_ref6 = {}, _defineProperty(_ref6, componentCls, {
    maxWidth: 'calc(100vw - 16px)',
    margin: token.marginXS + " auto"
  }), _defineProperty(_ref6, componentCls + "-centered", _defineProperty({}, componentCls, {
    flex: 1
  })), _ref6)), _ref7)), // ======================== Modal ========================
  _defineProperty({}, componentCls, _extends(_extends({}, resetComponent(token)), (_extends3 = {
    pointerEvents: 'none',
    position: 'relative',
    top: 100,
    width: 'auto',
    maxWidth: "calc(100vw - " + token.margin * 2 + "px)",
    margin: '0 auto',
    paddingBottom: token.paddingLG
  }, _defineProperty(_extends3, componentCls + "-title", {
    margin: 0,
    color: token.modalHeadingColor,
    fontWeight: token.fontWeightStrong,
    fontSize: token.modalHeaderTitleFontSize,
    lineHeight: token.modalHeaderTitleLineHeight,
    wordWrap: 'break-word'
  }), _defineProperty(_extends3, componentCls + "-content", {
    position: 'relative',
    backgroundColor: token.modalContentBg,
    backgroundClip: 'padding-box',
    border: 0,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
    pointerEvents: 'auto',
    padding: token.paddingMD + "px " + token.paddingContentHorizontalLG + "px"
  }), _defineProperty(_extends3, componentCls + "-close", _extends({
    position: 'absolute',
    top: (token.modalHeaderCloseSize - token.modalCloseBtnSize) / 2,
    insetInlineEnd: (token.modalHeaderCloseSize - token.modalCloseBtnSize) / 2,
    zIndex: token.zIndexPopupBase + 10,
    padding: 0,
    color: token.modalCloseColor,
    fontWeight: token.fontWeightStrong,
    lineHeight: 1,
    textDecoration: 'none',
    background: 'transparent',
    borderRadius: token.borderRadiusSM,
    width: token.modalConfirmIconSize,
    height: token.modalConfirmIconSize,
    border: 0,
    outline: 0,
    cursor: 'pointer',
    transition: "color " + token.motionDurationMid + ", background-color " + token.motionDurationMid,
    '&-x': {
      display: 'block',
      fontSize: token.fontSizeLG,
      fontStyle: 'normal',
      lineHeight: token.modalCloseBtnSize + "px",
      textAlign: 'center',
      textTransform: 'none',
      textRendering: 'auto'
    },
    '&:hover': {
      color: token.modalIconHoverColor,
      backgroundColor: token.wireframe ? 'transparent' : token.colorFillContent,
      textDecoration: 'none'
    },
    '&:active': {
      backgroundColor: token.wireframe ? 'transparent' : token.colorFillContentHover
    }
  }, genFocusStyle(token))), _defineProperty(_extends3, componentCls + "-header", {
    color: token.colorText,
    background: token.modalHeaderBg,
    borderRadius: token.borderRadiusLG + "px " + token.borderRadiusLG + "px 0 0",
    marginBottom: token.marginXS
  }), _defineProperty(_extends3, componentCls + "-body", {
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    wordWrap: 'break-word'
  }), _defineProperty(_extends3, componentCls + "-footer", _defineProperty({
    textAlign: 'end',
    background: token.modalFooterBg,
    marginTop: token.marginSM
  }, token.antCls + "-btn + " + token.antCls + "-btn:not(" + token.antCls + "-dropdown-trigger)", {
    marginBottom: 0,
    marginInlineStart: token.marginXS
  })), _defineProperty(_extends3, componentCls + "-open", {
    overflow: 'hidden'
  }), _extends3))), // ======================== Pure =========================
  _defineProperty({}, componentCls + "-pure-panel", (_ref11 = {
    top: 'auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'column'
  }, _defineProperty(_ref11, componentCls + "-content,\n          " + componentCls + "-body,\n          " + componentCls + "-confirm-body-wrapper", {
    display: 'flex',
    flexDirection: 'column',
    flex: 'auto'
  }), _defineProperty(_ref11, componentCls + "-confirm-body", {
    marginBottom: 'auto'
  }), _ref11))];
};
var genModalConfirmStyle = function genModalConfirmStyle(token) {
  var _ref14, _ref15, _confirmComponentCls, _ref17;
  var componentCls = token.componentCls;
  var confirmComponentCls = componentCls + "-confirm";
  return _ref17 = {}, _defineProperty(_ref17, confirmComponentCls, (_confirmComponentCls = {
    '&-rtl': {
      direction: 'rtl'
    }
  }, _defineProperty(_confirmComponentCls, token.antCls + "-modal-header", {
    display: 'none'
  }), _defineProperty(_confirmComponentCls, confirmComponentCls + "-body-wrapper", _extends({}, clearFix())), _defineProperty(_confirmComponentCls, confirmComponentCls + "-body", (_ref15 = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  }, _defineProperty(_ref15, confirmComponentCls + "-title", _defineProperty({
    flex: '0 0 100%',
    display: 'block',
    // create BFC to avoid
    // https://user-images.githubusercontent.com/507615/37702510-ba844e06-2d2d-11e8-9b67-8e19be57f445.png
    overflow: 'hidden',
    color: token.colorTextHeading,
    fontWeight: token.fontWeightStrong,
    fontSize: token.modalHeaderTitleFontSize,
    lineHeight: token.modalHeaderTitleLineHeight
  }, "+ " + confirmComponentCls + "-content", {
    marginBlockStart: token.marginXS
  })), _defineProperty(_ref15, confirmComponentCls + "-content", {
    color: token.colorText,
    fontSize: token.fontSize
  }), _defineProperty(_ref15, "> " + token.iconCls, (_ref14 = {
    flex: 'none',
    marginInlineEnd: token.marginSM,
    fontSize: token.modalConfirmIconSize
  }, _defineProperty(_ref14, "+ " + confirmComponentCls + "-title", {
    flex: 1
  }), _defineProperty(_ref14, "+ " + confirmComponentCls + "-title + " + confirmComponentCls + "-content", {
    marginInlineStart: token.modalConfirmIconSize + token.marginSM,
    flexBasis: '100%'
  }), _ref14)), _ref15)), _defineProperty(_confirmComponentCls, confirmComponentCls + "-btns", _defineProperty({
    textAlign: 'end',
    marginTop: token.marginSM
  }, token.antCls + "-btn + " + token.antCls + "-btn", {
    marginBottom: 0,
    marginInlineStart: token.marginXS
  })), _confirmComponentCls)), _defineProperty(_ref17, confirmComponentCls + "-error " + confirmComponentCls + "-body > " + token.iconCls, {
    color: token.colorError
  }), _defineProperty(_ref17, confirmComponentCls + "-warning " + confirmComponentCls + "-body > " + token.iconCls + ",\n        " + confirmComponentCls + "-confirm " + confirmComponentCls + "-body > " + token.iconCls, {
    color: token.colorWarning
  }), _defineProperty(_ref17, confirmComponentCls + "-info " + confirmComponentCls + "-body > " + token.iconCls, {
    color: token.colorInfo
  }), _defineProperty(_ref17, confirmComponentCls + "-success " + confirmComponentCls + "-body > " + token.iconCls, {
    color: token.colorSuccess
  }), _defineProperty(_ref17, componentCls + "-zoom-leave " + componentCls + "-btns", {
    pointerEvents: 'none'
  }), _ref17;
};
var genRTLStyle = function genRTLStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls + "-root", _defineProperty({}, componentCls + "-wrap-rtl", _defineProperty({
    direction: 'rtl'
  }, componentCls + "-confirm-body", {
    direction: 'rtl'
  })));
};
var genWireframeStyle = function genWireframeStyle(token) {
  var _componentCls, _confirmComponentCls2, _ref23;
  var componentCls = token.componentCls,
    antCls = token.antCls;
  var confirmComponentCls = componentCls + "-confirm";
  return _ref23 = {}, _defineProperty(_ref23, componentCls, (_componentCls = {}, _defineProperty(_componentCls, componentCls + "-content", {
    padding: 0
  }), _defineProperty(_componentCls, componentCls + "-header", {
    padding: token.modalHeaderPadding,
    borderBottom: token.modalHeaderBorderWidth + "px " + token.modalHeaderBorderStyle + " " + token.modalHeaderBorderColorSplit,
    marginBottom: 0
  }), _defineProperty(_componentCls, componentCls + "-body", {
    padding: token.modalBodyPadding
  }), _defineProperty(_componentCls, componentCls + "-footer", {
    padding: token.modalFooterPaddingVertical + "px " + token.modalFooterPaddingHorizontal + "px",
    borderTop: token.modalFooterBorderWidth + "px " + token.modalFooterBorderStyle + " " + token.modalFooterBorderColorSplit,
    borderRadius: "0 0 " + token.borderRadiusLG + "px " + token.borderRadiusLG + "px",
    marginTop: 0
  }), _componentCls)), _defineProperty(_ref23, confirmComponentCls, (_confirmComponentCls2 = {}, _defineProperty(_confirmComponentCls2, antCls + "-modal-body", {
    padding: token.padding * 2 + "px " + token.padding * 2 + "px " + token.paddingLG + "px"
  }), _defineProperty(_confirmComponentCls2, confirmComponentCls + "-body", _defineProperty({}, "> " + token.iconCls, _defineProperty({
    marginInlineEnd: token.margin
  }, "+ " + confirmComponentCls + "-title + " + confirmComponentCls + "-content", {
    marginInlineStart: token.modalConfirmIconSize + token.margin
  }))), _defineProperty(_confirmComponentCls2, confirmComponentCls + "-btns", {
    marginTop: token.marginLG
  }), _confirmComponentCls2)), _ref23;
};
// ============================== Export ==============================
export default genComponentStyleHook('Modal', function (token) {
  var headerPaddingVertical = token.padding;
  var headerFontSize = token.fontSizeHeading5;
  var headerLineHeight = token.lineHeightHeading5;
  var modalToken = mergeToken(token, {
    modalBodyPadding: token.paddingLG,
    modalHeaderBg: token.colorBgElevated,
    modalHeaderPadding: headerPaddingVertical + "px " + token.paddingLG + "px",
    modalHeaderBorderWidth: token.lineWidth,
    modalHeaderBorderStyle: token.lineType,
    modalHeaderTitleLineHeight: headerLineHeight,
    modalHeaderTitleFontSize: headerFontSize,
    modalHeaderBorderColorSplit: token.colorSplit,
    modalHeaderCloseSize: headerLineHeight * headerFontSize + headerPaddingVertical * 2,
    modalContentBg: token.colorBgElevated,
    modalHeadingColor: token.colorTextHeading,
    modalCloseColor: token.colorTextDescription,
    modalFooterBg: 'transparent',
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterPaddingVertical: token.paddingXS,
    modalFooterPaddingHorizontal: token.padding,
    modalFooterBorderWidth: token.lineWidth,
    modalConfirmTitleFontSize: token.fontSizeLG,
    modalIconHoverColor: token.colorIconHover,
    modalConfirmIconSize: token.fontSize * token.lineHeight,
    modalCloseBtnSize: token.controlHeightLG * 0.55
  });
  return [genModalStyle(modalToken), genModalConfirmStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), token.wireframe && genWireframeStyle(modalToken), initZoomMotion(modalToken, 'zoom')];
});