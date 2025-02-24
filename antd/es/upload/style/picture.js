import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { TinyColor } from '@ctrl/tinycolor';
import { clearFix, textEllipsis } from '../../style';
var genPictureStyle = function genPictureStyle(token) {
  var _extends2, _itemCls, _ref, _ref4;
  var componentCls = token.componentCls,
    iconCls = token.iconCls,
    uploadThumbnailSize = token.uploadThumbnailSize,
    uploadProgressOffset = token.uploadProgressOffset;
  var listCls = componentCls + "-list";
  var itemCls = listCls + "-item";
  return _defineProperty({}, componentCls + "-wrapper", _defineProperty({}, "" + listCls + listCls + "-picture, " + listCls + listCls + "-picture-card", (_ref4 = {}, _defineProperty(_ref4, itemCls, (_itemCls = {
    position: 'relative',
    height: uploadThumbnailSize + token.lineWidth * 2 + token.paddingXS * 2,
    padding: token.paddingXS,
    border: token.lineWidth + "px " + token.lineType + " " + token.colorBorder,
    borderRadius: token.borderRadiusLG,
    '&:hover': {
      background: 'transparent'
    }
  }, _defineProperty(_itemCls, itemCls + "-thumbnail", _extends(_extends({}, textEllipsis), (_extends2 = {
    width: uploadThumbnailSize,
    height: uploadThumbnailSize,
    lineHeight: uploadThumbnailSize + token.paddingSM + "px",
    textAlign: 'center',
    flex: 'none'
  }, _defineProperty(_extends2, iconCls, {
    fontSize: token.fontSizeHeading2
  }), _defineProperty(_extends2, "img", {
    display: 'block',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }), _extends2))), _defineProperty(_itemCls, itemCls + "-progress", {
    bottom: uploadProgressOffset,
    width: "calc(100% - " + token.paddingSM * 2 + "px)",
    marginTop: 0,
    paddingInlineStart: uploadThumbnailSize + token.paddingXS
  }), _itemCls)), _defineProperty(_ref4, itemCls + "-error", _defineProperty({
    borderColor: token.colorError
  }, itemCls + "-thumbnail " + iconCls, (_ref = {}, _defineProperty(_ref, "svg path[fill='#e6f7ff']", {
    fill: token.colorErrorBg
  }), _defineProperty(_ref, "svg path[fill='#1890ff']", {
    fill: token.colorError
  }), _ref))), _defineProperty(_ref4, itemCls + "-uploading", _defineProperty({
    borderStyle: 'dashed'
  }, itemCls + "-name", {
    marginBottom: uploadProgressOffset
  })), _ref4)));
};
var genPictureCardStyle = function genPictureCardStyle(token) {
  var _ref7, _ref11, _ref12, _extends3;
  var componentCls = token.componentCls,
    iconCls = token.iconCls,
    fontSizeLG = token.fontSizeLG,
    colorTextLightSolid = token.colorTextLightSolid;
  var listCls = componentCls + "-list";
  var itemCls = listCls + "-item";
  var uploadPictureCardSize = token.uploadPicCardSize;
  return _defineProperty({}, componentCls + "-wrapper" + componentCls + "-picture-card-wrapper", _extends(_extends({}, clearFix()), (_extends3 = {
    display: 'inline-block',
    width: '100%'
  }, _defineProperty(_extends3, "" + componentCls + componentCls + "-select", (_ref7 = {
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
  }, _defineProperty(_ref7, "> " + componentCls, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center'
  }), _defineProperty(_ref7, "&:not(" + componentCls + "-disabled):hover", {
    borderColor: token.colorPrimary
  }), _ref7)), _defineProperty(_extends3, "" + listCls + listCls + "-picture-card", (_ref12 = {}, _defineProperty(_ref12, listCls + "-item-container", {
    display: 'inline-block',
    width: uploadPictureCardSize,
    height: uploadPictureCardSize,
    marginBlock: "0 " + token.marginXS + "px",
    marginInline: "0 " + token.marginXS + "px",
    verticalAlign: 'top'
  }), _defineProperty(_ref12, '&::after', {
    display: 'none'
  }), _defineProperty(_ref12, itemCls, {
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
  }), _defineProperty(_ref12, itemCls + ":hover", _defineProperty({}, "&::before, " + itemCls + "-actions", {
    opacity: 1
  })), _defineProperty(_ref12, itemCls + "-actions", _defineProperty({
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
  })), _defineProperty(_ref12, itemCls + "-actions, " + itemCls + "-actions:hover", _defineProperty({}, iconCls + "-eye, " + iconCls + "-download, " + iconCls + "-delete", {
    color: new TinyColor(colorTextLightSolid).setAlpha(0.65).toRgbString(),
    '&:hover': {
      color: colorTextLightSolid
    }
  })), _defineProperty(_ref12, itemCls + "-thumbnail, " + itemCls + "-thumbnail img", {
    position: 'static',
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }), _defineProperty(_ref12, itemCls + "-name", {
    display: 'none',
    textAlign: 'center'
  }), _defineProperty(_ref12, itemCls + "-file + " + itemCls + "-name", {
    position: 'absolute',
    bottom: token.margin,
    display: 'block',
    width: "calc(100% - " + token.paddingXS * 2 + "px)"
  }), _defineProperty(_ref12, itemCls + "-uploading", (_ref11 = {}, _defineProperty(_ref11, "&" + itemCls, {
    backgroundColor: token.colorFillAlter
  }), _defineProperty(_ref11, "&::before, " + iconCls + "-eye, " + iconCls + "-download, " + iconCls + "-delete", {
    display: 'none'
  }), _ref11)), _defineProperty(_ref12, itemCls + "-progress", {
    bottom: token.marginXL,
    width: "calc(100% - " + token.paddingXS * 2 + "px)",
    paddingInlineStart: 0
  }), _ref12)), _extends3)));
};
export { genPictureStyle, genPictureCardStyle };