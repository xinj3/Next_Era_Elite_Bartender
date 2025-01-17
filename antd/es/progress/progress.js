import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
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
import CheckCircleFilled from "@ant-design/icons/es/icons/CheckCircleFilled";
import CheckOutlined from "@ant-design/icons/es/icons/CheckOutlined";
import CloseCircleFilled from "@ant-design/icons/es/icons/CloseCircleFilled";
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import classNames from 'classnames';
import omit from "rc-util/es/omit";
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import { tuple } from '../_util/type';
import warning from '../_util/warning';
import Circle from './Circle';
import Line from './Line';
import Steps from './Steps';
import { getSuccessPercent, validProgress } from './utils';
import useStyle from './style';
var ProgressTypes = tuple('line', 'circle', 'dashboard');
var ProgressStatuses = tuple('normal', 'exception', 'active', 'success');
var Progress = function Progress(props) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    steps = props.steps,
    strokeColor = props.strokeColor,
    _props$percent = props.percent,
    percent = _props$percent === void 0 ? 0 : _props$percent,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size,
    _props$showInfo = props.showInfo,
    showInfo = _props$showInfo === void 0 ? true : _props$showInfo,
    _props$type = props.type,
    type = _props$type === void 0 ? 'line' : _props$type,
    status = props.status,
    format = props.format,
    restProps = __rest(props, ["prefixCls", "className", "steps", "strokeColor", "percent", "size", "showInfo", "type", "status", "format"]);
  var percentNumber = React.useMemo(function () {
    var successPercent = getSuccessPercent(props);
    return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
  }, [percent, props.success, props.successPercent]);
  var progressStatus = React.useMemo(function () {
    if (!ProgressStatuses.includes(status) && percentNumber >= 100) {
      return 'success';
    }
    return status || 'normal';
  }, [status, percentNumber]);
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('progress', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var progressInfo = React.useMemo(function () {
    if (!showInfo) {
      return null;
    }
    var successPercent = getSuccessPercent(props);
    var text;
    var textFormatter = format || function (number) {
      return number + "%";
    };
    var isLineType = type === 'line';
    if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
      text = textFormatter(validProgress(percent), validProgress(successPercent));
    } else if (progressStatus === 'exception') {
      text = isLineType ? /*#__PURE__*/React.createElement(CloseCircleFilled, null) : /*#__PURE__*/React.createElement(CloseOutlined, null);
    } else if (progressStatus === 'success') {
      text = isLineType ? /*#__PURE__*/React.createElement(CheckCircleFilled, null) : /*#__PURE__*/React.createElement(CheckOutlined, null);
    }
    return /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-text",
      title: typeof text === 'string' ? text : undefined
    }, text);
  }, [showInfo, percentNumber, progressStatus, type, prefixCls, format]);
  process.env.NODE_ENV !== "production" ? warning(!('successPercent' in props), 'Progress', '`successPercent` is deprecated. Please use `success.percent` instead.') : void 0;
  var strokeColorNotArray = Array.isArray(strokeColor) ? strokeColor[0] : strokeColor;
  var strokeColorNotGradient = typeof strokeColor === 'string' || Array.isArray(strokeColor) ? strokeColor : undefined;
  var progress;
  // Render progress shape
  if (type === 'line') {
    progress = steps ? /*#__PURE__*/React.createElement(Steps, _extends({}, props, {
      strokeColor: strokeColorNotGradient,
      prefixCls: prefixCls,
      steps: steps
    }), progressInfo) : /*#__PURE__*/React.createElement(Line, _extends({}, props, {
      strokeColor: strokeColorNotArray,
      prefixCls: prefixCls,
      direction: direction
    }), progressInfo);
  } else if (type === 'circle' || type === 'dashboard') {
    progress = /*#__PURE__*/React.createElement(Circle, _extends({}, props, {
      strokeColor: strokeColorNotArray,
      prefixCls: prefixCls,
      progressStatus: progressStatus
    }), progressInfo);
  }
  var classString = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-inline-circle", type === 'circle' && props.width <= 20), _defineProperty(_classNames, prefixCls + "-" + (type === 'dashboard' && 'circle' || steps && 'steps' || type), true), _defineProperty(_classNames, prefixCls + "-status-" + progressStatus, true), _defineProperty(_classNames, prefixCls + "-show-info", showInfo), _defineProperty(_classNames, prefixCls + "-" + size, size), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _classNames), className, hashId);
  return wrapSSR( /*#__PURE__*/React.createElement("div", _extends({
    className: classString,
    role: "progressbar"
  }, omit(restProps, ['trailColor', 'strokeWidth', 'width', 'gapDegree', 'gapPosition', 'strokeLinecap', 'success', 'successPercent'])), progress));
};
export default Progress;