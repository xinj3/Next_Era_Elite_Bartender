import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import classNames from 'classnames';
import RcDrawer from 'rc-drawer';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import { NoFormStyle } from '../form/context';
import { getTransitionName } from '../_util/motion';
import { tuple } from '../_util/type';
import warning from '../_util/warning';
import DrawerPanel from './DrawerPanel';
// CSSINJS
import useStyle from './style';
import { NoCompactStyle } from '../space/Compact';
var SizeTypes = tuple('default', 'large');
var defaultPushState = {
  distance: 180
};
function Drawer(props) {
  var rootClassName = props.rootClassName,
    width = props.width,
    height = props.height,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size,
    _props$mask = props.mask,
    mask = _props$mask === void 0 ? true : _props$mask,
    _props$push = props.push,
    push = _props$push === void 0 ? defaultPushState : _props$push,
    open = props.open,
    afterOpenChange = props.afterOpenChange,
    onClose = props.onClose,
    customizePrefixCls = props.prefixCls,
    customizeGetContainer = props.getContainer,
    visible = props.visible,
    afterVisibleChange = props.afterVisibleChange,
    rest = __rest(props, ["rootClassName", "width", "height", "size", "mask", "push", "open", "afterOpenChange", "onClose", "prefixCls", "getContainer", "visible", "afterVisibleChange"]);
  var _React$useContext = React.useContext(ConfigContext),
    getPopupContainer = _React$useContext.getPopupContainer,
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('drawer', customizePrefixCls);
  // Style
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var getContainer =
  // 有可能为 false，所以不能直接判断
  customizeGetContainer === undefined && getPopupContainer ? function () {
    return getPopupContainer(document.body);
  } : customizeGetContainer;
  var drawerClassName = classNames(_defineProperty({
    'no-mask': !mask
  }, prefixCls + "-rtl", direction === 'rtl'), rootClassName, hashId);
  // ========================== Warning ===========================
  if (process.env.NODE_ENV !== 'production') {
    [['visible', 'open'], ['afterVisibleChange', 'afterOpenChange']].forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        deprecatedName = _ref2[0],
        newName = _ref2[1];
      process.env.NODE_ENV !== "production" ? warning(!(deprecatedName in props), 'Drawer', "`" + deprecatedName + "` is deprecated, please use `" + newName + "` instead.") : void 0;
    });
  }
  // ============================ Size ============================
  var mergedWidth = React.useMemo(function () {
    return width !== null && width !== void 0 ? width : size === 'large' ? 736 : 378;
  }, [width, size]);
  var mergedHeight = React.useMemo(function () {
    return height !== null && height !== void 0 ? height : size === 'large' ? 736 : 378;
  }, [height, size]);
  // =========================== Motion ===========================
  var maskMotion = {
    motionName: getTransitionName(prefixCls, 'mask-motion'),
    motionAppear: true,
    motionEnter: true,
    motionLeave: true,
    motionDeadline: 500
  };
  var panelMotion = function panelMotion(motionPlacement) {
    return {
      motionName: getTransitionName(prefixCls, "panel-motion-" + motionPlacement),
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      motionDeadline: 500
    };
  };
  // =========================== Render ===========================
  return wrapSSR( /*#__PURE__*/React.createElement(NoCompactStyle, null, /*#__PURE__*/React.createElement(NoFormStyle, {
    status: true,
    override: true
  }, /*#__PURE__*/React.createElement(RcDrawer, _extends({
    prefixCls: prefixCls,
    onClose: onClose,
    maskMotion: maskMotion,
    motion: panelMotion
  }, rest, {
    open: open !== null && open !== void 0 ? open : visible,
    mask: mask,
    push: push,
    width: mergedWidth,
    height: mergedHeight,
    rootClassName: drawerClassName,
    getContainer: getContainer,
    afterOpenChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange
  }), /*#__PURE__*/React.createElement(DrawerPanel, _extends({
    prefixCls: prefixCls
  }, rest, {
    onClose: onClose
  }))))));
}
if (process.env.NODE_ENV !== 'production') {
  Drawer.displayName = 'Drawer';
}
function PurePanel(_a) {
  var customizePrefixCls = _a.prefixCls,
    style = _a.style,
    className = _a.className,
    _a$placement = _a.placement,
    placement = _a$placement === void 0 ? 'right' : _a$placement,
    restProps = __rest(_a, ["prefixCls", "style", "className", "placement"]);
  var _React$useContext2 = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext2.getPrefixCls;
  var prefixCls = getPrefixCls('drawer', customizePrefixCls);
  // Style
  var _useStyle3 = useStyle(prefixCls),
    _useStyle4 = _slicedToArray(_useStyle3, 2),
    wrapSSR = _useStyle4[0],
    hashId = _useStyle4[1];
  return wrapSSR( /*#__PURE__*/React.createElement("div", {
    className: classNames(prefixCls, prefixCls + "-pure", prefixCls + "-" + placement, hashId, className),
    style: style
  }, /*#__PURE__*/React.createElement(DrawerPanel, _extends({
    prefixCls: prefixCls
  }, restProps))));
}
Drawer._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
export default Drawer;