"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genPictureStyle = exports.genPictureCardStyle = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _tinycolor = require("@ctrl/tinycolor");
var _style = require("../../style");
var genPictureStyle = function genPictureStyle(token) {
  var _extends2, _itemCls, _ref, _ref4;
  var componentCls = token.componentCls,
    iconCls = token.iconCls,
    uploadThumbnailSize = token.uploadThumbnailSize,
    uploadProgressOffset = token.uploadProgressOffset;
  var listCls = componentCls + "-list";
  var itemCls = listCls + "-item";
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (0, _defineProperty2["default"])({}, "" + listCls + listCls + "-picture, " + listCls + listCls + "-picture-card", (_ref4 = {}, (0, _defineProperty2["default"])(_ref4, itemCls, (_itemCls = {
    position: 'relative',
    height: uploadThumbnailSize + token.lineWidth * 2 + token.paddingXS * 2,
    padding: token.paddingXS,
    border: token.lineWidth + "px " + token.lineType + " " + token.colorBorder,
    borderRadius: token.borderRadiusLG,
    '&:hover': {
      background: 'transparent'
    }
  }, (0, _defineProperty2["default"])(_itemCls, itemCls + "-thumbnail", (0, _extends4["default"])((0, _extends4["default"])({}, _style.textEllipsis), (_extends2 = {
    width: uploadThumbnailSize,
    height: uploadThumbnailSize,
    lineHeight: uploadThumbnailSize + token.paddingSM + "px",
    textAlign: 'center',
    flex: 'none'
  }, (0, _defineProperty2["default"])(_extends2, iconCls, {
    fontSize: token.fontSizeHeading2
  }), (0, _defineProperty2["default"])(_extends2, "img", {
    display: 'block',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }), _extends2))), (0, _defineProperty2["default"])(_itemCls, itemCls + "-progress", {
    bottom: uploadProgressOffset,
    width: "calc(100% - " + token.paddingSM * 2 + "px)",
    marginTop: 0,
    paddingInlineStart: uploadThumbnailSize + token.paddingXS
  }), _itemCls)), (0, _defineProperty2["default"])(_ref4, itemCls + "-error", (0, _defineProperty2["default"])({
    borderColor: token.colorError
  }, itemCls + "-thumbnail " + iconCls, (_ref = {}, (0, _defineProperty2["default"])(_ref, "svg path[fill='#e6f7ff']", {
    fill: token.colorErrorBg
  }), (0, _defineProperty2["default"])(_ref, "svg path[fill='#1890ff']", {
    fill: token.colorError
  }), _ref))), (0, _defineProperty2["default"])(_ref4, itemCls + "-uploading", (0, _defineProperty2["default"])({
    borderStyle: 'dashed'
  }, itemCls + "-name", {
    marginBottom: uploadProgressOffset
  })), _ref4)));
};
exports.genPictureStyle = genPictureStyle;
var genPictureCardStyle = function genPictureCardStyle(token) {
  var _ref7, _ref11, _ref12, _extends3;
  var componentCls = token.componentCls,
    iconCls = token.iconCls,
    fontSizeLG = token.fontSizeLG,
    colorTextLightSolid = token.colorTextLightSolid;
  var listCls = componentCls + "-list";
  var itemCls = listCls + "-item";
  var uploadPictureCardSize = token.uploadPicCardSize;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper" + componentCls + "-picture-card-wrapper", (0, _extends4["default"])((0, _extends4["default"])({}, (0, _style.clearFix)()), (_extends3 = {
    display: 'inline-block',
    width: '100%'
  }, (0, _defineProperty2["default"])(_extends3, "" + componentCls + componentCls + "-select", (_ref7 = {
    width: uploadPictureCardSize,
    height: uploadPictureCardSize,
    marginInlineEnd: token.marginXS,
    marginBottom: token.marginXS,
    textAlign: 'center',
    verticalAlign: 'top',
    backgroundColor: token.colorFillAlter,
    border: token.lineWidth + "px dashed " + token.colorBorder,
    borderRadius: token.borderRadiusLG,
    cursor: 'pointer',
    transition: "border-color " + token.motionDurationSlow
  }, (0, _defineProperty2["default"])(_ref7, "> " + componentCls, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center'
  }), (0, _defineProperty2["default"])(_ref7, "&:not(" + componentCls + "-disabled):hover", {
    borderColor: token.colorPrimary
  }), _ref7)), (0, _defineProperty2["default"])(_extends3, "" + listCls + listCls + "-picture-card", (_ref12 = {}, (0, _defineProperty2["default"])(_ref12, listCls + "-item-container", {
    display: 'inline-block',
    width: uploadPictureCardSize,
    height: uploadPictureCardSize,
    marginBlock: "0 " + token.marginXS + "px",
    marginInline: "0 " + token.marginXS + "px",
    verticalAlign: 'top'
  }), (0, _defineProperty2["default"])(_ref12, '&::after', {
    display: 'none'
  }), (0, _defineProperty2["default"])(_ref12, itemCls, {
    height: '100%',
    margin: 0,
    '&::before': {
      position: 'absolute',
      zIndex: 1,
      width: "calc(100% - " + token.paddingXS * 2 + "px)",
      height: "calc(100% - " + token.paddingXS * 2 + "px)",
      backgroundColor: token.colorBgMask,
      opacity: 0,
      transition: "all " + token.motionDurationSlow,
      content: '" "'
    }
  }), (0, _defineProperty2["default"])(_ref12, itemCls + ":hover", (0, _defineProperty2["default"])({}, "&::before, " + itemCls + "-actions", {
    opacity: 1
  })), (0, _defineProperty2["default"])(_ref12, itemCls + "-actions", (0, _defineProperty2["default"])({
    position: 'absolute',
    insetInlineStart: 0,
    zIndex: 10,
    width: '100%',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    opacity: 0,
    transition: "all " + token.motionDurationSlow
  }, iconCls + "-eye, " + iconCls + "-download, " + iconCls + "-delete", {
    zIndex: 10,
    width: fontSizeLG,
    margin: "0 " + token.marginXXS + "px",
    fontSize: fontSizeLG,
    cursor: 'pointer',
    transition: "all " + token.motionDurationSlow
  })), (0, _defineProperty2["default"])(_ref12, itemCls + "-actions, " + itemCls + "-actions:hover", (0, _defineProperty2["default"])({}, iconCls + "-eye, " + iconCls + "-download, " + iconCls + "-delete", {
    color: new _tinycolor.TinyColor(colorTextLightSolid).setAlpha(0.65).toRgbString(),
    '&:hover': {
      color: colorTextLightSolid
    }
  })), (0, _defineProperty2["default"])(_ref12, itemCls + "-thumbnail, " + itemCls + "-thumbnail img", {
    position: 'static',
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }), (0, _defineProperty2["default"])(_ref12, itemCls + "-name", {
    display: 'none',
    textAlign: 'center'
  }), (0, _defineProperty2["default"])(_ref12, itemCls + "-file + " + itemCls + "-name", {
    position: 'absolute',
    bottom: token.margin,
    display: 'block',
    width: "calc(100% - " + token.paddingXS * 2 + "px)"
  }), (0, _defineProperty2["default"])(_ref12, itemCls + "-uploading", (_ref11 = {}, (0, _defineProperty2["default"])(_ref11, "&" + itemCls, {
    backgroundColor: token.colorFillAlter
  }), (0, _defineProperty2["default"])(_ref11, "&::before, " + iconCls + "-eye, " + iconCls + "-download, " + iconCls + "-delete", {
    display: 'none'
  }), _ref11)), (0, _defineProperty2["default"])(_ref12, itemCls + "-progress", {
    bottom: token.marginXL,
    width: "calc(100% - " + token.paddingXS * 2 + "px)",
    paddingInlineStart: 0
  }), _ref12)), _extends3)));
};
exports.genPictureCardStyle = genPictureCardStyle;