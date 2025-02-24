"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initPickerPanelToken = exports.genPanelStyle = exports["default"] = void 0;
var _extends5 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _tinycolor = require("@ctrl/tinycolor");
var _style = require("../../input/style");
var _motion = require("../../style/motion");
var _internal = require("../../theme/internal");
var _style2 = require("../../style");
var _compactItem = require("../../style/compact-item");
var genPikerPadding = function genPikerPadding(token, inputHeight, fontSize, paddingHorizontal) {
  var lineHeight = token.lineHeight;
  var fontHeight = Math.floor(fontSize * lineHeight) + 2;
  var paddingTop = Math.max((inputHeight - fontHeight) / 2, 0);
  var paddingBottom = Math.max(inputHeight - fontHeight - paddingTop, 0);
  return {
    padding: paddingTop + "px " + paddingHorizontal + "px " + paddingBottom + "px"
  };
};
var genPickerCellInnerStyle = function genPickerCellInnerStyle(token) {
  var _disabled, _ref;
  var componentCls = token.componentCls,
    pickerCellInnerCls = token.pickerCellInnerCls,
    pickerPanelCellHeight = token.pickerPanelCellHeight,
    motionDurationSlow = token.motionDurationSlow,
    borderRadiusSM = token.borderRadiusSM,
    motionDurationMid = token.motionDurationMid,
    controlItemBgHover = token.controlItemBgHover,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    colorPrimary = token.colorPrimary,
    controlItemBgActive = token.controlItemBgActive,
    colorTextLightSolid = token.colorTextLightSolid,
    controlHeightSM = token.controlHeightSM,
    pickerDateHoverRangeBorderColor = token.pickerDateHoverRangeBorderColor,
    pickerCellBorderGap = token.pickerCellBorderGap,
    pickerBasicCellHoverWithRangeColor = token.pickerBasicCellHoverWithRangeColor,
    pickerPanelCellWidth = token.pickerPanelCellWidth,
    colorTextDisabled = token.colorTextDisabled,
    colorBgContainerDisabled = token.colorBgContainerDisabled;
  return _ref = {
    '&::before': {
      position: 'absolute',
      top: '50%',
      insetInlineStart: 0,
      insetInlineEnd: 0,
      zIndex: 1,
      height: pickerPanelCellHeight,
      transform: 'translateY(-50%)',
      transition: "all " + motionDurationSlow,
      content: '""'
    }
  }, (0, _defineProperty2["default"])(_ref, pickerCellInnerCls, {
    position: 'relative',
    zIndex: 2,
    display: 'inline-block',
    minWidth: pickerPanelCellHeight,
    height: pickerPanelCellHeight,
    lineHeight: pickerPanelCellHeight + "px",
    borderRadius: borderRadiusSM,
    transition: "background " + motionDurationMid + ", border " + motionDurationMid
  }), (0, _defineProperty2["default"])(_ref, "&:hover:not(&-in-view),\n    &:hover:not(&-selected):not(&-range-start):not(&-range-end):not(&-range-hover-start):not(&-range-hover-end)", (0, _defineProperty2["default"])({}, pickerCellInnerCls, {
    background: controlItemBgHover
  })), (0, _defineProperty2["default"])(_ref, "&-in-view:is(&-today) " + pickerCellInnerCls, {
    '&::before': {
      position: 'absolute',
      top: 0,
      insetInlineEnd: 0,
      bottom: 0,
      insetInlineStart: 0,
      zIndex: 1,
      border: lineWidth + "px " + lineType + " " + colorPrimary,
      borderRadius: borderRadiusSM,
      content: '""'
    }
  }), (0, _defineProperty2["default"])(_ref, '&-in-view:is(&-in-range)', {
    position: 'relative',
    '&::before': {
      background: controlItemBgActive
    }
  }), (0, _defineProperty2["default"])(_ref, "&-in-view:is(&-selected) " + pickerCellInnerCls + ",\n    &-in-view:is(&-range-start) " + pickerCellInnerCls + ",\n    &-in-view:is(&-range-end) " + pickerCellInnerCls, {
    color: colorTextLightSolid,
    background: colorPrimary
  }), (0, _defineProperty2["default"])(_ref, "&-in-view:is(&-range-start):not(&-range-start-single),\n      &-in-view:is(&-range-end):not(&-range-end-single)", {
    '&::before': {
      background: controlItemBgActive
    }
  }), (0, _defineProperty2["default"])(_ref, '&-in-view:is(&-range-start)::before', {
    insetInlineStart: '50%'
  }), (0, _defineProperty2["default"])(_ref, '&-in-view:is(&-range-end)::before', {
    insetInlineEnd: '50%'
  }), (0, _defineProperty2["default"])(_ref, "&-in-view:is(&-range-hover-start):not(&-in-range):not(&-range-start):not(&-range-end),\n      &-in-view:is(&-range-hover-end):not(&-in-range):not(&-range-start):not(&-range-end),\n      &-in-view:is(&-range-hover-start):is(&-range-start-single),\n      &-in-view:is(&-range-hover-start):is(&-range-start):is(&-range-end):is(&-range-end-near-hover),\n      &-in-view:is(&-range-hover-end):is(&-range-start):is(&-range-end):is(&-range-start-near-hover),\n      &-in-view:is(&-range-hover-end):is(&-range-end-single),\n      &-in-view:is(&-range-hover):not(&-in-range)", {
    '&::after': {
      position: 'absolute',
      top: '50%',
      zIndex: 0,
      height: controlHeightSM,
      borderTop: lineWidth + "px dashed " + pickerDateHoverRangeBorderColor,
      borderBottom: lineWidth + "px dashed " + pickerDateHoverRangeBorderColor,
      transform: 'translateY(-50%)',
      transition: "all " + motionDurationSlow,
      content: '""'
    }
  }), (0, _defineProperty2["default"])(_ref, "&-range-hover-start::after,\n      &-range-hover-end::after,\n      &-range-hover::after", {
    insetInlineEnd: 0,
    insetInlineStart: pickerCellBorderGap
  }), (0, _defineProperty2["default"])(_ref, "&-in-view:is(&-in-range):is(&-range-hover)::before,\n      &-in-view:is(&-range-start):is(&-range-hover)::before,\n      &-in-view:is(&-range-end):is(&-range-hover)::before,\n      &-in-view:is(&-range-start):not(&-range-start-single):is(&-range-hover-start)::before,\n      &-in-view:is(&-range-end):not(&-range-end-single):is(&-range-hover-end)::before,\n      " + componentCls + "-panel\n      > :not(" + componentCls + "-date-panel)\n      &-in-view:is(&-in-range):is(&-range-hover-start)::before,\n      " + componentCls + "-panel\n      > :not(" + componentCls + "-date-panel)\n      &-in-view:is(&-in-range):is(&-range-hover-end)::before", {
    background: pickerBasicCellHoverWithRangeColor
  }), (0, _defineProperty2["default"])(_ref, "&-in-view:is(&-range-start):not(&-range-start-single):not(&-range-end) " + pickerCellInnerCls, {
    borderStartStartRadius: borderRadiusSM,
    borderEndStartRadius: borderRadiusSM,
    borderStartEndRadius: 0,
    borderEndEndRadius: 0
  }), (0, _defineProperty2["default"])(_ref, "&-in-view:is(&-range-end):not(&-range-end-single):not(&-range-start) " + pickerCellInnerCls, {
    borderStartStartRadius: 0,
    borderEndStartRadius: 0,
    borderStartEndRadius: borderRadiusSM,
    borderEndEndRadius: borderRadiusSM
  }), (0, _defineProperty2["default"])(_ref, '&-range-hover:is(&-range-end)::after', {
    insetInlineStart: '50%'
  }), (0, _defineProperty2["default"])(_ref, "tr > &-in-view:is(&-range-hover):first-child::after,\n      tr > &-in-view:is(&-range-hover-end):first-child::after,\n      &-in-view:is(&-start):is(&-range-hover-edge-start):is(&-range-hover-edge-start-near-range)::after,\n      &-in-view:is(&-range-hover-edge-start):not(&-range-hover-edge-start-near-range)::after,\n      &-in-view:is(&-range-hover-start)::after", {
    insetInlineStart: (pickerPanelCellWidth - pickerPanelCellHeight) / 2,
    borderInlineStart: lineWidth + "px dashed " + pickerDateHoverRangeBorderColor,
    borderStartStartRadius: lineWidth,
    borderEndStartRadius: lineWidth
  }), (0, _defineProperty2["default"])(_ref, "tr > &-in-view:is(&-range-hover):last-child::after,\n      tr > &-in-view:is(&-range-hover-start):last-child::after,\n      &-in-view:is(&-end):is(&-range-hover-edge-end):is(&-range-hover-edge-end-near-range)::after,\n      &-in-view:is(&-range-hover-edge-end):not(&-range-hover-edge-end-near-range)::after,\n      &-in-view:is(&-range-hover-end)::after", {
    insetInlineEnd: (pickerPanelCellWidth - pickerPanelCellHeight) / 2,
    borderInlineEnd: lineWidth + "px dashed " + pickerDateHoverRangeBorderColor,
    borderStartEndRadius: lineWidth,
    borderEndEndRadius: lineWidth
  }), (0, _defineProperty2["default"])(_ref, '&-disabled', (_disabled = {
    color: colorTextDisabled,
    pointerEvents: 'none'
  }, (0, _defineProperty2["default"])(_disabled, pickerCellInnerCls, {
    background: 'transparent'
  }), (0, _defineProperty2["default"])(_disabled, '&::before', {
    background: colorBgContainerDisabled
  }), _disabled)), (0, _defineProperty2["default"])(_ref, "&-disabled:is(&-today) " + pickerCellInnerCls + "::before", {
    borderColor: colorTextDisabled
  }), _ref;
};
var genPanelStyle = function genPanelStyle(token) {
  var _rtl, _decadePanel, _decadePanel2, _yearPanel, _selectedTd, _weekPanel, _datePanel, _datetimePanel, _ref5, _timePanel, _componentCls;
  var componentCls = token.componentCls,
    pickerCellInnerCls = token.pickerCellInnerCls,
    pickerYearMonthCellWidth = token.pickerYearMonthCellWidth,
    pickerControlIconSize = token.pickerControlIconSize,
    pickerPanelCellWidth = token.pickerPanelCellWidth,
    paddingSM = token.paddingSM,
    paddingXS = token.paddingXS,
    colorBgContainer = token.colorBgContainer,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    borderRadiusLG = token.borderRadiusLG,
    colorPrimary = token.colorPrimary,
    colorTextHeading = token.colorTextHeading,
    colorSplit = token.colorSplit,
    pickerControlIconBorderWidth = token.pickerControlIconBorderWidth,
    colorIcon = token.colorIcon,
    pickerTextHeight = token.pickerTextHeight,
    motionDurationMid = token.motionDurationMid,
    colorIconHover = token.colorIconHover,
    fontWeightStrong = token.fontWeightStrong,
    pickerPanelCellHeight = token.pickerPanelCellHeight,
    pickerCellPaddingVertical = token.pickerCellPaddingVertical,
    colorTextDisabled = token.colorTextDisabled,
    colorText = token.colorText,
    fontSize = token.fontSize,
    pickerBasicCellHoverWithRangeColor = token.pickerBasicCellHoverWithRangeColor,
    motionDurationSlow = token.motionDurationSlow,
    pickerPanelWithoutTimeCellHeight = token.pickerPanelWithoutTimeCellHeight,
    pickerQuarterPanelContentHeight = token.pickerQuarterPanelContentHeight,
    colorLink = token.colorLink,
    colorLinkActive = token.colorLinkActive,
    colorLinkHover = token.colorLinkHover,
    pickerDateHoverRangeBorderColor = token.pickerDateHoverRangeBorderColor,
    borderRadiusSM = token.borderRadiusSM,
    colorTextLightSolid = token.colorTextLightSolid,
    borderRadius = token.borderRadius,
    controlItemBgHover = token.controlItemBgHover,
    pickerTimePanelColumnHeight = token.pickerTimePanelColumnHeight,
    pickerTimePanelColumnWidth = token.pickerTimePanelColumnWidth,
    pickerTimePanelCellHeight = token.pickerTimePanelCellHeight,
    controlItemBgActive = token.controlItemBgActive,
    marginXXS = token.marginXXS;
  var pickerPanelWidth = pickerPanelCellWidth * 7 + paddingSM * 2 + 4;
  var hoverCellFixedDistance = (pickerPanelWidth - paddingXS * 2) / 3 - pickerYearMonthCellWidth / 2;
  return (0, _defineProperty2["default"])({}, componentCls, (_componentCls = {
    '&-panel': {
      display: 'inline-flex',
      flexDirection: 'column',
      textAlign: 'center',
      background: colorBgContainer,
      border: lineWidth + "px " + lineType + " " + colorSplit,
      borderRadius: borderRadiusLG,
      outline: 'none',
      '&-focused': {
        borderColor: colorPrimary
      },
      '&-rtl': (_rtl = {
        direction: 'rtl'
      }, (0, _defineProperty2["default"])(_rtl, componentCls + "-prev-icon,\n              " + componentCls + "-super-prev-icon", {
        transform: 'rotate(135deg)'
      }), (0, _defineProperty2["default"])(_rtl, componentCls + "-next-icon,\n              " + componentCls + "-super-next-icon", {
        transform: 'rotate(-45deg)'
      }), _rtl)
    }
  }, (0, _defineProperty2["default"])(_componentCls, "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel,\n        &-week-panel,\n        &-date-panel,\n        &-time-panel", {
    display: 'flex',
    flexDirection: 'column',
    width: pickerPanelWidth
  }), (0, _defineProperty2["default"])(_componentCls, '&-header', {
    display: 'flex',
    padding: "0 " + paddingXS + "px",
    color: colorTextHeading,
    borderBottom: lineWidth + "px " + lineType + " " + colorSplit,
    '> *': {
      flex: 'none'
    },
    button: {
      padding: 0,
      color: colorIcon,
      lineHeight: pickerTextHeight + "px",
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      transition: "color " + motionDurationMid
    },
    '> button': {
      minWidth: '1.6em',
      fontSize: fontSize,
      '&:hover': {
        color: colorIconHover
      }
    },
    '&-view': {
      flex: 'auto',
      fontWeight: fontWeightStrong,
      lineHeight: pickerTextHeight + "px",
      button: {
        color: 'inherit',
        fontWeight: 'inherit',
        verticalAlign: 'top',
        '&:not(:first-child)': {
          marginInlineStart: paddingXS
        },
        '&:hover': {
          color: colorPrimary
        }
      }
    }
  }), (0, _defineProperty2["default"])(_componentCls, "&-prev-icon,\n        &-next-icon,\n        &-super-prev-icon,\n        &-super-next-icon", {
    position: 'relative',
    display: 'inline-block',
    width: pickerControlIconSize,
    height: pickerControlIconSize,
    '&::before': {
      position: 'absolute',
      top: 0,
      insetInlineStart: 0,
      display: 'inline-block',
      width: pickerControlIconSize,
      height: pickerControlIconSize,
      border: "0 solid currentcolor",
      borderBlockStartWidth: pickerControlIconBorderWidth,
      borderBlockEndWidth: 0,
      borderInlineStartWidth: pickerControlIconBorderWidth,
      borderInlineEndWidth: 0,
      content: '""'
    }
  }), (0, _defineProperty2["default"])(_componentCls, "&-super-prev-icon,\n        &-super-next-icon", {
    '&::after': {
      position: 'absolute',
      top: Math.ceil(pickerControlIconSize / 2),
      insetInlineStart: Math.ceil(pickerControlIconSize / 2),
      display: 'inline-block',
      width: pickerControlIconSize,
      height: pickerControlIconSize,
      border: '0 solid currentcolor',
      borderBlockStartWidth: pickerControlIconBorderWidth,
      borderBlockEndWidth: 0,
      borderInlineStartWidth: pickerControlIconBorderWidth,
      borderInlineEndWidth: 0,
      content: '""'
    }
  }), (0, _defineProperty2["default"])(_componentCls, "&-prev-icon,\n        &-super-prev-icon", {
    transform: 'rotate(-45deg)'
  }), (0, _defineProperty2["default"])(_componentCls, "&-next-icon,\n        &-super-next-icon", {
    transform: 'rotate(135deg)'
  }), (0, _defineProperty2["default"])(_componentCls, '&-content', {
    width: '100%',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    'th, td': {
      position: 'relative',
      minWidth: pickerPanelCellHeight,
      fontWeight: 'normal'
    },
    th: {
      height: pickerPanelCellHeight + pickerCellPaddingVertical * 2,
      color: colorText,
      verticalAlign: 'middle'
    }
  }), (0, _defineProperty2["default"])(_componentCls, '&-cell', (0, _extends5["default"])({
    padding: pickerCellPaddingVertical + "px 0",
    color: colorTextDisabled,
    cursor: 'pointer',
    // In view
    '&-in-view': {
      color: colorText
    }
  }, genPickerCellInnerStyle(token))), (0, _defineProperty2["default"])(_componentCls, "&-date-panel " + componentCls + "-cell-in-view" + componentCls + "-cell-in-range" + componentCls + "-cell-range-hover-start " + pickerCellInnerCls + ",\n        &-date-panel " + componentCls + "-cell-in-view" + componentCls + "-cell-in-range" + componentCls + "-cell-range-hover-end " + pickerCellInnerCls, {
    '&::after': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      zIndex: -1,
      background: pickerBasicCellHoverWithRangeColor,
      transition: "all " + motionDurationSlow,
      content: '""'
    }
  }), (0, _defineProperty2["default"])(_componentCls, "&-date-panel\n        " + componentCls + "-cell-in-view" + componentCls + "-cell-in-range" + componentCls + "-cell-range-hover-start\n        " + pickerCellInnerCls + "::after", {
    insetInlineEnd: (pickerPanelCellWidth - pickerPanelCellHeight) / 2,
    insetInlineStart: 0
  }), (0, _defineProperty2["default"])(_componentCls, "&-date-panel " + componentCls + "-cell-in-view" + componentCls + "-cell-in-range" + componentCls + "-cell-range-hover-end " + pickerCellInnerCls + "::after", {
    insetInlineEnd: 0,
    insetInlineStart: (pickerPanelCellWidth - pickerPanelCellHeight) / 2
  }), (0, _defineProperty2["default"])(_componentCls, '&-range-hover:is(&-range-start)::after', {
    insetInlineEnd: '50%'
  }), (0, _defineProperty2["default"])(_componentCls, "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel", (_decadePanel = {}, (0, _defineProperty2["default"])(_decadePanel, componentCls + "-content", {
    height: pickerPanelWithoutTimeCellHeight * 4
  }), (0, _defineProperty2["default"])(_decadePanel, pickerCellInnerCls, {
    padding: "0 " + paddingXS + "px"
  }), _decadePanel)), (0, _defineProperty2["default"])(_componentCls, '&-quarter-panel', (0, _defineProperty2["default"])({}, componentCls + "-content", {
    height: pickerQuarterPanelContentHeight
  })), (0, _defineProperty2["default"])(_componentCls, "&-panel " + componentCls + "-footer", {
    borderTop: lineWidth + "px " + lineType + " " + colorSplit
  }), (0, _defineProperty2["default"])(_componentCls, '&-footer', {
    width: 'min-content',
    minWidth: '100%',
    lineHeight: pickerTextHeight - 2 * lineWidth + "px",
    textAlign: 'center',
    '&-extra': {
      padding: "0 " + paddingSM,
      lineHeight: pickerTextHeight - 2 * lineWidth + "px",
      textAlign: 'start',
      '&:not(:last-child)': {
        borderBottom: lineWidth + "px " + lineType + " " + colorSplit
      }
    }
  }), (0, _defineProperty2["default"])(_componentCls, '&-now', {
    textAlign: 'start'
  }), (0, _defineProperty2["default"])(_componentCls, '&-today-btn', {
    color: colorLink,
    '&:hover': {
      color: colorLinkHover
    },
    '&:active': {
      color: colorLinkActive
    },
    '&:is(&-disabled)': {
      color: colorTextDisabled,
      cursor: 'not-allowed'
    }
  }), (0, _defineProperty2["default"])(_componentCls, '&-decade-panel', (_decadePanel2 = {}, (0, _defineProperty2["default"])(_decadePanel2, pickerCellInnerCls, {
    padding: "0 " + paddingXS / 2 + "px"
  }), (0, _defineProperty2["default"])(_decadePanel2, componentCls + "-cell::before", {
    display: 'none'
  }), _decadePanel2)), (0, _defineProperty2["default"])(_componentCls, "&-year-panel,\n        &-quarter-panel,\n        &-month-panel", (_yearPanel = {}, (0, _defineProperty2["default"])(_yearPanel, componentCls + "-body", {
    padding: "0 " + paddingXS + "px"
  }), (0, _defineProperty2["default"])(_yearPanel, pickerCellInnerCls, {
    width: pickerYearMonthCellWidth
  }), (0, _defineProperty2["default"])(_yearPanel, componentCls + "-cell-range-hover-start::after", (0, _defineProperty2["default"])({
    insetInlineStart: hoverCellFixedDistance,
    borderInlineStart: lineWidth + "px dashed " + pickerDateHoverRangeBorderColor,
    borderStartStartRadius: borderRadiusSM,
    borderBottomStartRadius: borderRadiusSM,
    borderStartEndRadius: 0,
    borderBottomEndRadius: 0
  }, componentCls + "-panel-rtl &", {
    insetInlineEnd: hoverCellFixedDistance,
    borderInlineEnd: lineWidth + "px dashed " + pickerDateHoverRangeBorderColor,
    borderStartStartRadius: 0,
    borderBottomStartRadius: 0,
    borderStartEndRadius: borderRadiusSM,
    borderBottomEndRadius: borderRadiusSM
  })), (0, _defineProperty2["default"])(_yearPanel, componentCls + "-cell-range-hover-end::after", (0, _defineProperty2["default"])({
    insetInlineEnd: hoverCellFixedDistance,
    borderInlineEnd: lineWidth + "px dashed " + pickerDateHoverRangeBorderColor,
    borderStartStartRadius: 0,
    borderBottomStartRadius: 0,
    borderStartEndRadius: borderRadius,
    borderBottomEndRadius: borderRadius
  }, componentCls + "-panel-rtl &", {
    insetInlineStart: hoverCellFixedDistance,
    borderInlineStart: lineWidth + "px dashed " + pickerDateHoverRangeBorderColor,
    borderStartStartRadius: borderRadius,
    borderBottomStartRadius: borderRadius,
    borderStartEndRadius: 0,
    borderBottomEndRadius: 0
  })), _yearPanel)), (0, _defineProperty2["default"])(_componentCls, '&-week-panel', (_weekPanel = {}, (0, _defineProperty2["default"])(_weekPanel, componentCls + "-body", {
    padding: paddingXS + "px " + paddingSM + "px"
  }), (0, _defineProperty2["default"])(_weekPanel, componentCls + "-cell", (0, _defineProperty2["default"])({}, "&:hover " + pickerCellInnerCls + ",\n      &-selected " + pickerCellInnerCls + ",\n      " + pickerCellInnerCls, {
    background: 'transparent !important'
  })), (0, _defineProperty2["default"])(_weekPanel, '&-row', (0, _defineProperty2["default"])({
    td: {
      transition: "background " + motionDurationMid,
      '&:first-child': {
        borderStartStartRadius: borderRadiusSM,
        borderEndStartRadius: borderRadiusSM
      },
      '&:last-child': {
        borderStartEndRadius: borderRadiusSM,
        borderEndEndRadius: borderRadiusSM
      }
    },
    '&:hover td': {
      background: controlItemBgHover
    }
  }, "&-selected td,\n            &-selected:hover td", (_selectedTd = {
    background: colorPrimary
  }, (0, _defineProperty2["default"])(_selectedTd, "&" + componentCls + "-cell-week", {
    color: new _tinycolor.TinyColor(colorTextLightSolid).setAlpha(0.5).toHexString()
  }), (0, _defineProperty2["default"])(_selectedTd, "&" + componentCls + "-cell-today " + pickerCellInnerCls + "::before", {
    borderColor: colorTextLightSolid
  }), (0, _defineProperty2["default"])(_selectedTd, pickerCellInnerCls, {
    color: colorTextLightSolid
  }), _selectedTd))), _weekPanel)), (0, _defineProperty2["default"])(_componentCls, '&-date-panel', (_datePanel = {}, (0, _defineProperty2["default"])(_datePanel, componentCls + "-body", {
    padding: paddingXS + "px " + paddingSM + "px"
  }), (0, _defineProperty2["default"])(_datePanel, componentCls + "-content", {
    width: pickerPanelCellWidth * 7,
    th: {
      width: pickerPanelCellWidth
    }
  }), _datePanel)), (0, _defineProperty2["default"])(_componentCls, '&-datetime-panel', (_datetimePanel = {
    display: 'flex'
  }, (0, _defineProperty2["default"])(_datetimePanel, componentCls + "-time-panel", {
    borderInlineStart: lineWidth + "px " + lineType + " " + colorSplit
  }), (0, _defineProperty2["default"])(_datetimePanel, componentCls + "-date-panel,\n          " + componentCls + "-time-panel", {
    transition: "opacity " + motionDurationSlow
  }), (0, _defineProperty2["default"])(_datetimePanel, '&-active', (0, _defineProperty2["default"])({}, componentCls + "-date-panel,\n            " + componentCls + "-time-panel", {
    opacity: 0.3,
    '&-active': {
      opacity: 1
    }
  })), _datetimePanel)), (0, _defineProperty2["default"])(_componentCls, '&-time-panel', (_timePanel = {
    width: 'auto',
    minWidth: 'auto',
    direction: 'ltr'
  }, (0, _defineProperty2["default"])(_timePanel, componentCls + "-content", {
    display: 'flex',
    flex: 'auto',
    height: pickerTimePanelColumnHeight
  }), (0, _defineProperty2["default"])(_timePanel, '&-column', {
    flex: '1 0 auto',
    width: pickerTimePanelColumnWidth,
    margin: 0,
    padding: 0,
    overflowY: 'hidden',
    textAlign: 'start',
    listStyle: 'none',
    transition: "background " + motionDurationMid,
    overflowX: 'hidden',
    '&::after': (0, _defineProperty2["default"])({
      display: 'block',
      height: pickerTimePanelColumnHeight - pickerTimePanelCellHeight,
      content: '""'
    }, componentCls + "-datetime-panel &", {
      height: pickerTimePanelColumnHeight - pickerPanelWithoutTimeCellHeight + 2 * lineWidth
    }),
    '&:not(:first-child)': {
      borderInlineStart: lineWidth + "px " + lineType + " " + colorSplit
    },
    '&-active': {
      background: new _tinycolor.TinyColor(controlItemBgActive).setAlpha(0.2).toHexString()
    },
    '&:hover': {
      overflowY: 'auto'
    },
    '> li': (0, _defineProperty2["default"])({
      margin: 0,
      padding: 0
    }, "&" + componentCls + "-time-panel-cell", (_ref5 = {
      marginInline: marginXXS
    }, (0, _defineProperty2["default"])(_ref5, componentCls + "-time-panel-cell-inner", {
      display: 'block',
      width: pickerTimePanelColumnWidth - 2 * marginXXS,
      height: pickerTimePanelCellHeight,
      margin: 0,
      paddingBlock: 0,
      paddingInlineEnd: 0,
      paddingInlineStart: (pickerTimePanelColumnWidth - pickerTimePanelCellHeight) / 2,
      color: colorText,
      lineHeight: pickerTimePanelCellHeight + "px",
      borderRadius: borderRadiusSM,
      cursor: 'pointer',
      transition: "background " + motionDurationMid,
      '&:hover': {
        background: controlItemBgHover
      }
    }), (0, _defineProperty2["default"])(_ref5, '&-selected', (0, _defineProperty2["default"])({}, componentCls + "-time-panel-cell-inner", {
      background: controlItemBgActive
    })), (0, _defineProperty2["default"])(_ref5, '&-disabled', (0, _defineProperty2["default"])({}, componentCls + "-time-panel-cell-inner", {
      color: colorTextDisabled,
      background: 'transparent',
      cursor: 'not-allowed'
    })), _ref5))
  }), _timePanel)), _componentCls));
};
exports.genPanelStyle = genPanelStyle;
var genPickerStatusStyle = function genPickerStatusStyle(token) {
  var componentCls = token.componentCls,
    colorBgContainer = token.colorBgContainer,
    colorError = token.colorError,
    colorErrorOutline = token.colorErrorOutline,
    colorWarning = token.colorWarning,
    colorWarningOutline = token.colorWarningOutline;
  return (0, _defineProperty2["default"])({}, componentCls, {
    '&-status-error&': (0, _defineProperty2["default"])({
      '&, &:not([disabled]):hover': {
        backgroundColor: colorBgContainer,
        borderColor: colorError
      },
      '&-focused, &:focus': (0, _extends5["default"])({}, (0, _style.genActiveStyle)((0, _internal.mergeToken)(token, {
        inputBorderActiveColor: colorError,
        inputBorderHoverColor: colorError,
        controlOutline: colorErrorOutline
      })))
    }, componentCls + "-active-bar", {
      background: colorError
    }),
    '&-status-warning&': (0, _defineProperty2["default"])({
      '&, &:not([disabled]):hover': {
        backgroundColor: colorBgContainer,
        borderColor: colorWarning
      },
      '&-focused, &:focus': (0, _extends5["default"])({}, (0, _style.genActiveStyle)((0, _internal.mergeToken)(token, {
        inputBorderActiveColor: colorWarning,
        inputBorderHoverColor: colorWarning,
        controlOutline: colorWarningOutline
      })))
    }, componentCls + "-active-bar", {
      background: colorWarning
    })
  });
};
var genPickerStyle = function genPickerStyle(token) {
  var _ref9, _ref11, _range, _ref12, _ref13, _ref14, _ref15, _extends3, _rtl2, _extends4;
  var componentCls = token.componentCls,
    antCls = token.antCls,
    boxShadowPopoverArrow = token.boxShadowPopoverArrow,
    controlHeight = token.controlHeight,
    fontSize = token.fontSize,
    inputPaddingHorizontal = token.inputPaddingHorizontal,
    colorBgContainer = token.colorBgContainer,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    colorBorder = token.colorBorder,
    borderRadius = token.borderRadius,
    motionDurationMid = token.motionDurationMid,
    colorBgContainerDisabled = token.colorBgContainerDisabled,
    colorTextDisabled = token.colorTextDisabled,
    colorTextPlaceholder = token.colorTextPlaceholder,
    controlHeightLG = token.controlHeightLG,
    fontSizeLG = token.fontSizeLG,
    controlHeightSM = token.controlHeightSM,
    inputPaddingHorizontalSM = token.inputPaddingHorizontalSM,
    paddingXS = token.paddingXS,
    marginXS = token.marginXS,
    colorTextDescription = token.colorTextDescription,
    lineWidthBold = token.lineWidthBold,
    lineHeight = token.lineHeight,
    colorPrimary = token.colorPrimary,
    motionDurationSlow = token.motionDurationSlow,
    zIndexPopup = token.zIndexPopup,
    paddingXXS = token.paddingXXS,
    paddingSM = token.paddingSM,
    pickerTextHeight = token.pickerTextHeight,
    controlItemBgActive = token.controlItemBgActive,
    colorPrimaryBorder = token.colorPrimaryBorder,
    sizePopupArrow = token.sizePopupArrow,
    borderRadiusXS = token.borderRadiusXS,
    borderRadiusOuter = token.borderRadiusOuter,
    colorBgElevated = token.colorBgElevated,
    borderRadiusLG = token.borderRadiusLG,
    boxShadowSecondary = token.boxShadowSecondary,
    borderRadiusSM = token.borderRadiusSM,
    colorSplit = token.colorSplit,
    controlItemBgHover = token.controlItemBgHover,
    presetsWidth = token.presetsWidth,
    presetsMaxWidth = token.presetsMaxWidth;
  return [(0, _defineProperty2["default"])({}, componentCls, (0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])({}, (0, _style2.resetComponent)(token)), genPikerPadding(token, controlHeight, fontSize, inputPaddingHorizontal)), {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    background: colorBgContainer,
    border: lineWidth + "px " + lineType + " " + colorBorder,
    borderRadius: borderRadius,
    transition: "border " + motionDurationMid + ", box-shadow " + motionDurationMid
  }), (0, _compactItem.genCompactItemStyle)(token, componentCls, '', componentCls + "-focused")), (_extends4 = {
    '&:hover, &-focused': (0, _extends5["default"])({}, (0, _style.genHoverStyle)(token)),
    '&-focused': (0, _extends5["default"])({}, (0, _style.genActiveStyle)(token)),
    '&&-disabled': (0, _defineProperty2["default"])({
      background: colorBgContainerDisabled,
      borderColor: colorBorder,
      cursor: 'not-allowed'
    }, componentCls + "-suffix", {
      color: colorTextDisabled
    }),
    '&&-borderless': {
      backgroundColor: 'transparent !important',
      borderColor: 'transparent !important',
      boxShadow: 'none !important'
    }
  }, (0, _defineProperty2["default"])(_extends4, componentCls + "-input", {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    '> input': (0, _extends5["default"])((0, _extends5["default"])({}, (0, _style.genBasicInputStyle)(token)), {
      flex: 'auto',
      // Fix Firefox flex not correct:
      // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
      minWidth: 1,
      height: 'auto',
      padding: 0,
      background: 'transparent',
      border: 0,
      '&:focus': {
        boxShadow: 'none'
      },
      '&[disabled]': {
        background: 'transparent'
      }
    }),
    '&:hover': (0, _defineProperty2["default"])({}, componentCls + "-clear", {
      opacity: 1
    }),
    '&-placeholder': {
      '> input': {
        color: colorTextPlaceholder
      }
    }
  }), (0, _defineProperty2["default"])(_extends4, '&-large', (0, _extends5["default"])((0, _extends5["default"])({}, genPikerPadding(token, controlHeightLG, fontSizeLG, inputPaddingHorizontal)), (0, _defineProperty2["default"])({}, componentCls + "-input > input", {
    fontSize: fontSizeLG
  }))), (0, _defineProperty2["default"])(_extends4, '&-small', (0, _extends5["default"])({}, genPikerPadding(token, controlHeightSM, fontSize, inputPaddingHorizontalSM))), (0, _defineProperty2["default"])(_extends4, componentCls + "-suffix", {
    display: 'flex',
    flex: 'none',
    alignSelf: 'center',
    marginInlineStart: paddingXS / 2,
    color: colorTextDisabled,
    lineHeight: 1,
    pointerEvents: 'none',
    '> *': {
      verticalAlign: 'top',
      '&:not(:last-child)': {
        marginInlineEnd: marginXS
      }
    }
  }), (0, _defineProperty2["default"])(_extends4, componentCls + "-clear", {
    position: 'absolute',
    top: '50%',
    insetInlineEnd: 0,
    color: colorTextDisabled,
    lineHeight: 1,
    background: colorBgContainer,
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    opacity: 0,
    transition: "opacity " + motionDurationMid + ", color " + motionDurationMid,
    '> *': {
      verticalAlign: 'top'
    },
    '&:hover': {
      color: colorTextDescription
    }
  }), (0, _defineProperty2["default"])(_extends4, componentCls + "-separator", (_ref9 = {
    position: 'relative',
    display: 'inline-block',
    width: '1em',
    height: fontSizeLG,
    color: colorTextDisabled,
    fontSize: fontSizeLG,
    verticalAlign: 'top',
    cursor: 'default'
  }, (0, _defineProperty2["default"])(_ref9, componentCls + "-focused &", {
    color: colorTextDescription
  }), (0, _defineProperty2["default"])(_ref9, componentCls + "-range-separator &", (0, _defineProperty2["default"])({}, componentCls + "-disabled &", {
    cursor: 'not-allowed'
  })), _ref9)), (0, _defineProperty2["default"])(_extends4, '&-range', (_range = {
    position: 'relative',
    display: 'inline-flex'
  }, (0, _defineProperty2["default"])(_range, componentCls + "-clear", {
    insetInlineEnd: inputPaddingHorizontal
  }), (0, _defineProperty2["default"])(_range, '&:hover', (0, _defineProperty2["default"])({}, componentCls + "-clear", {
    opacity: 1
  })), (0, _defineProperty2["default"])(_range, componentCls + "-active-bar", {
    bottom: -lineWidth,
    height: lineWidthBold,
    marginInlineStart: inputPaddingHorizontal,
    background: colorPrimary,
    opacity: 0,
    transition: "all " + motionDurationSlow + " ease-out",
    pointerEvents: 'none'
  }), (0, _defineProperty2["default"])(_range, "&" + componentCls + "-focused", (0, _defineProperty2["default"])({}, componentCls + "-active-bar", {
    opacity: 1
  })), (0, _defineProperty2["default"])(_range, componentCls + "-range-separator", {
    alignItems: 'center',
    padding: "0 " + paddingXS + "px",
    lineHeight: 1
  }), (0, _defineProperty2["default"])(_range, "&" + componentCls + "-small", (_ref11 = {}, (0, _defineProperty2["default"])(_ref11, componentCls + "-clear", {
    insetInlineEnd: inputPaddingHorizontalSM
  }), (0, _defineProperty2["default"])(_ref11, componentCls + "-active-bar", {
    marginInlineStart: inputPaddingHorizontalSM
  }), _ref11)), _range)), (0, _defineProperty2["default"])(_extends4, '&-dropdown', (0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])({}, (0, _style2.resetComponent)(token)), genPanelStyle(token)), (_extends3 = {
    position: 'absolute',
    // Fix incorrect position of picker popup
    // https://github.com/ant-design/ant-design/issues/35590
    top: -9999,
    left: {
      _skip_check_: true,
      value: -9999
    },
    zIndex: zIndexPopup,
    '&&-hidden': {
      display: 'none'
    },
    '&&-placement-bottomLeft': (0, _defineProperty2["default"])({}, componentCls + "-range-arrow", {
      top: 0,
      display: 'block',
      transform: 'translateY(-100%)'
    }),
    '&&-placement-topLeft': (0, _defineProperty2["default"])({}, componentCls + "-range-arrow", {
      bottom: 0,
      display: 'block',
      transform: 'translateY(100%) rotate(180deg)'
    })
  }, (0, _defineProperty2["default"])(_extends3, "&" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-topLeft,\n          &" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-topRight,\n          &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-topLeft,\n          &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-topRight", {
    animationName: _motion.slideDownIn
  }), (0, _defineProperty2["default"])(_extends3, "&" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-bottomLeft,\n          &" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-bottomRight,\n          &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-bottomLeft,\n          &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-bottomRight", {
    animationName: _motion.slideUpIn
  }), (0, _defineProperty2["default"])(_extends3, "&" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-topLeft,\n          &" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-topRight", {
    animationName: _motion.slideDownOut
  }), (0, _defineProperty2["default"])(_extends3, "&" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-bottomLeft,\n          &" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-bottomRight", {
    animationName: _motion.slideUpOut
  }), (0, _defineProperty2["default"])(_extends3, componentCls + "-panel > " + componentCls + "-time-panel", {
    paddingTop: paddingXXS
  }), (0, _defineProperty2["default"])(_extends3, componentCls + "-ranges", (_ref12 = {
    marginBottom: 0,
    padding: paddingXXS + "px " + paddingSM + "px",
    overflow: 'hidden',
    lineHeight: pickerTextHeight - 2 * lineWidth - paddingXS / 2 + "px",
    textAlign: 'start',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    '> li': {
      display: 'inline-block'
    }
  }, (0, _defineProperty2["default"])(_ref12, componentCls + "-preset > " + antCls + "-tag-blue", {
    color: colorPrimary,
    background: controlItemBgActive,
    borderColor: colorPrimaryBorder,
    cursor: 'pointer'
  }), (0, _defineProperty2["default"])(_ref12, componentCls + "-ok", {
    marginInlineStart: 'auto'
  }), _ref12)), (0, _defineProperty2["default"])(_extends3, componentCls + "-range-wrapper", {
    display: 'flex',
    position: 'relative'
  }), (0, _defineProperty2["default"])(_extends3, componentCls + "-range-arrow", (0, _extends5["default"])({
    position: 'absolute',
    zIndex: 1,
    display: 'none',
    marginInlineStart: inputPaddingHorizontal * 1.5,
    transition: "left " + motionDurationSlow + " ease-out"
  }, (0, _style2.roundedArrow)(sizePopupArrow, borderRadiusXS, borderRadiusOuter, colorBgElevated, boxShadowPopoverArrow))), (0, _defineProperty2["default"])(_extends3, componentCls + "-panel-container", (_ref15 = {
    overflow: 'hidden',
    verticalAlign: 'top',
    background: colorBgElevated,
    borderRadius: borderRadiusLG,
    boxShadow: boxShadowSecondary,
    transition: "margin " + motionDurationSlow
  }, (0, _defineProperty2["default"])(_ref15, componentCls + "-panel-layout", {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'stretch'
  }), (0, _defineProperty2["default"])(_ref15, componentCls + "-presets", {
    display: 'flex',
    flexDirection: 'column',
    minWidth: presetsWidth,
    maxWidth: presetsMaxWidth,
    ul: {
      height: 0,
      flex: 'auto',
      listStyle: 'none',
      overflow: 'auto',
      margin: 0,
      padding: paddingXS,
      borderInlineEnd: lineWidth + "px " + lineType + " " + colorSplit,
      li: (0, _extends5["default"])((0, _extends5["default"])({}, _style2.textEllipsis), {
        borderRadius: borderRadiusSM,
        paddingInline: paddingXS,
        paddingBlock: (controlHeightSM - Math.round(fontSize * lineHeight)) / 2,
        cursor: 'pointer',
        transition: "all " + motionDurationSlow,
        '+ li': {
          marginTop: marginXS
        },
        '&:hover': {
          background: controlItemBgHover
        }
      })
    }
  }), (0, _defineProperty2["default"])(_ref15, componentCls + "-panels", (_ref13 = {
    display: 'inline-flex',
    flexWrap: 'nowrap',
    direction: 'ltr'
  }, (0, _defineProperty2["default"])(_ref13, componentCls + "-panel", {
    borderWidth: "0 0 " + lineWidth + "px"
  }), (0, _defineProperty2["default"])(_ref13, '&:last-child', (0, _defineProperty2["default"])({}, componentCls + "-panel", {
    borderWidth: 0
  })), _ref13)), (0, _defineProperty2["default"])(_ref15, componentCls + "-panel", (_ref14 = {
    verticalAlign: 'top',
    background: 'transparent',
    borderRadius: 0,
    borderWidth: 0
  }, (0, _defineProperty2["default"])(_ref14, componentCls + "-content,\n            table", {
    textAlign: 'center'
  }), (0, _defineProperty2["default"])(_ref14, '&-focused', {
    borderColor: colorBorder
  }), _ref14)), _ref15)), _extends3))), (0, _defineProperty2["default"])(_extends4, '&-dropdown-range', {
    padding: sizePopupArrow * 2 / 3 + "px 0",
    '&-hidden': {
      display: 'none'
    }
  }), (0, _defineProperty2["default"])(_extends4, '&-rtl', (_rtl2 = {
    direction: 'rtl'
  }, (0, _defineProperty2["default"])(_rtl2, componentCls + "-separator", {
    transform: 'rotate(180deg)'
  }), (0, _defineProperty2["default"])(_rtl2, componentCls + "-footer", {
    '&-extra': {
      direction: 'rtl'
    }
  }), _rtl2)), _extends4))),
  // Follow code may reuse in other components
  (0, _motion.initSlideMotion)(token, 'slide-up'), (0, _motion.initSlideMotion)(token, 'slide-down'), (0, _motion.initMoveMotion)(token, 'move-up'), (0, _motion.initMoveMotion)(token, 'move-down')];
};
var initPickerPanelToken = function initPickerPanelToken(token) {
  var pickerTimePanelCellHeight = 28;
  var componentCls = token.componentCls,
    controlHeightLG = token.controlHeightLG,
    controlHeightSM = token.controlHeightSM,
    colorPrimary = token.colorPrimary,
    paddingXXS = token.paddingXXS;
  return {
    pickerCellInnerCls: componentCls + "-cell-inner",
    pickerTextHeight: controlHeightLG,
    pickerPanelCellWidth: controlHeightSM * 1.5,
    pickerPanelCellHeight: controlHeightSM,
    pickerDateHoverRangeBorderColor: new _tinycolor.TinyColor(colorPrimary).lighten(20).toHexString(),
    pickerBasicCellHoverWithRangeColor: new _tinycolor.TinyColor(colorPrimary).lighten(35).toHexString(),
    pickerPanelWithoutTimeCellHeight: controlHeightLG * 1.65,
    pickerYearMonthCellWidth: controlHeightLG * 1.5,
    pickerTimePanelColumnHeight: pickerTimePanelCellHeight * 8,
    pickerTimePanelColumnWidth: controlHeightLG * 1.4,
    pickerTimePanelCellHeight: pickerTimePanelCellHeight,
    pickerQuarterPanelContentHeight: controlHeightLG * 1.4,
    pickerCellPaddingVertical: paddingXXS,
    pickerCellBorderGap: 2,
    pickerControlIconSize: 7,
    pickerControlIconBorderWidth: 1.5
  };
};
// ============================== Export ==============================
exports.initPickerPanelToken = initPickerPanelToken;
var _default = (0, _internal.genComponentStyleHook)('DatePicker', function (token) {
  var pickerToken = (0, _internal.mergeToken)((0, _style.initInputToken)(token), initPickerPanelToken(token));
  return [genPickerStyle(pickerToken), genPickerStatusStyle(pickerToken)];
}, function (token) {
  return {
    presetsWidth: 120,
    presetsMaxWidth: 200,
    zIndexPopup: token.zIndexPopupBase + 50
  };
});
exports["default"] = _default;