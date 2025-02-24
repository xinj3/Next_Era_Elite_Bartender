import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { TinyColor } from '@ctrl/tinycolor';
import { genActiveStyle, genBasicInputStyle, genHoverStyle, initInputToken } from '../../input/style';
import { initSlideMotion, initMoveMotion, slideDownIn, slideDownOut, slideUpIn, slideUpOut } from '../../style/motion';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent, roundedArrow, textEllipsis } from '../../style';
import { genCompactItemStyle } from '../../style/compact-item';
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
  }, _defineProperty(_ref, pickerCellInnerCls, {
    position: 'relative',
    zIndex: 2,
    display: 'inline-block',
    minWidth: pickerPanelCellHeight,
    height: pickerPanelCellHeight,
    lineHeight: pickerPanelCellHeight + "px",
    borderRadius: borderRadiusSM,
    transition: "background " + motionDurationMid + ", border " + motionDurationMid
  }), _defineProperty(_ref, "&:hover:not(&-in-view),\n    &:hover:not(&-selected):not(&-range-start):not(&-range-end):not(&-range-hover-start):not(&-range-hover-end)", _defineProperty({}, pickerCellInnerCls, {
    background: controlItemBgHover
  })), _defineProperty(_ref, "&-in-view:is(&-today) " + pickerCellInnerCls, {
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
  }), _defineProperty(_ref, '&-in-view:is(&-in-range)', {
    position: 'relative',
    '&::before': {
      background: controlItemBgActive
    }
  }), _defineProperty(_ref, "&-in-view:is(&-selected) " + pickerCellInnerCls + ",\n    &-in-view:is(&-range-start) " + pickerCellInnerCls + ",\n    &-in-view:is(&-range-end) " + pickerCellInnerCls, {
    color: colorTextLightSolid,
    background: colorPrimary
  }), _defineProperty(_ref, "&-in-view:is(&-range-start):not(&-range-start-single),\n      &-in-view:is(&-range-end):not(&-range-end-single)", {
    '&::before': {
      background: controlItemBgActive
    }
  }), _defineProperty(_ref, '&-in-view:is(&-range-start)::before', {
    insetInlineStart: '50%'
  }), _defineProperty(_ref, '&-in-view:is(&-range-end)::before', {
    insetInlineEnd: '50%'
  }), _defineProperty(_ref, "&-in-view:is(&-range-hover-start):not(&-in-range):not(&-range-start):not(&-range-end),\n      &-in-view:is(&-range-hover-end):not(&-in-range):not(&-range-start):not(&-range-end),\n      &-in-view:is(&-range-hover-start):is(&-range-start-single),\n      &-in-view:is(&-range-hover-start):is(&-range-start):is(&-range-end):is(&-range-end-near-hover),\n      &-in-view:is(&-range-hover-end):is(&-range-start):is(&-range-end):is(&-range-start-near-hover),\n      &-in-view:is(&-range-hover-end):is(&-range-end-single),\n      &-in-view:is(&-range-hover):not(&-in-range)", {
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
  }), _defineProperty(_ref, "&-range-hover-start::after,\n      &-range-hover-end::after,\n      &-range-hover::after", {
    insetInlineEnd: 0,
    insetInlineStart: pickerCellBorderGap
  }), _defineProperty(_ref, "&-in-view:is(&-in-range):is(&-range-hover)::before,\n      &-in-view:is(&-range-start):is(&-range-hover)::before,\n      &-in-view:is(&-range-end):is(&-range-hover)::before,\n      &-in-view:is(&-range-start):not(&-range-start-single):is(&-range-hover-start)::before,\n      &-in-view:is(&-range-end):not(&-range-end-single):is(&-range-hover-end)::before,\n      " + componentCls + "-panel\n      > :not(" + componentCls + "-date-panel)\n      &-in-view:is(&-in-range):is(&-range-hover-start)::before,\n      " + componentCls + "-panel\n      > :not(" + componentCls + "-date-panel)\n      &-in-view:is(&-in-range):is(&-range-hover-end)::before", {
    background: pickerBasicCellHoverWithRangeColor
  }), _defineProperty(_ref, "&-in-view:is(&-range-start):not(&-range-start-single):not(&-range-end) " + pickerCellInnerCls, {
    borderStartStartRadius: borderRadiusSM,
    borderEndStartRadius: borderRadiusSM,
    borderStartEndRadius: 0,
    borderEndEndRadius: 0
  }), _defineProperty(_ref, "&-in-view:is(&-range-end):not(&-range-end-single):not(&-range-start) " + pickerCellInnerCls, {
    borderStartStartRadius: 0,
    borderEndStartRadius: 0,
    borderStartEndRadius: borderRadiusSM,
    borderEndEndRadius: borderRadiusSM
  }), _defineProperty(_ref, '&-range-hover:is(&-range-end)::after', {
    insetInlineStart: '50%'
  }), _defineProperty(_ref, "tr > &-in-view:is(&-range-hover):first-child::after,\n      tr > &-in-view:is(&-range-hover-end):first-child::after,\n      &-in-view:is(&-start):is(&-range-hover-edge-start):is(&-range-hover-edge-start-near-range)::after,\n      &-in-view:is(&-range-hover-edge-start):not(&-range-hover-edge-start-near-range)::after,\n      &-in-view:is(&-range-hover-start)::after", {
    insetInlineStart: (pickerPanelCellWidth - pickerPanelCellHeight) / 2,
    borderInlineStart: lineWidth + "px dashed " + pickerDateHoverRangeBorderColor,
    borderStartStartRadius: lineWidth,
    borderEndStartRadius: lineWidth
  }), _defineProperty(_ref, "tr > &-in-view:is(&-range-hover):last-child::after,\n      tr > &-in-view:is(&-range-hover-start):last-child::after,\n      &-in-view:is(&-end):is(&-range-hover-edge-end):is(&-range-hover-edge-end-near-range)::after,\n      &-in-view:is(&-range-hover-edge-end):not(&-range-hover-edge-end-near-range)::after,\n      &-in-view:is(&-range-hover-end)::after", {
    insetInlineEnd: (pickerPanelCellWidth - pickerPanelCellHeight) / 2,
    borderInlineEnd: lineWidth + "px dashed " + pickerDateHoverRangeBorderColor,
    borderStartEndRadius: lineWidth,
    borderEndEndRadius: lineWidth
  }), _defineProperty(_ref, '&-disabled', (_disabled = {
    color: colorTextDisabled,
    pointerEvents: 'none'
  }, _defineProperty(_disabled, pickerCellInnerCls, {
    background: 'transparent'
  }), _defineProperty(_disabled, '&::before', {
    background: colorBgContainerDisabled
  }), _disabled)), _defineProperty(_ref, "&-disabled:is(&-today) " + pickerCellInnerCls + "::before", {
    borderColor: colorTextDisabled
  }), _ref;
};
export var genPanelStyle = function genPanelStyle(token) {
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
  return _defineProperty({}, componentCls, (_componentCls = {
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
      }, _defineProperty(_rtl, componentCls + "-prev-icon,\n              " + componentCls + "-super-prev-icon", {
        transform: 'rotate(135deg)'
      }), _defineProperty(_rtl, componentCls + "-next-icon,\n              " + componentCls + "-super-next-icon", {
        transform: 'rotate(-45deg)'
      }), _rtl)
    }
  }, _defineProperty(_componentCls, "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel,\n        &-week-panel,\n        &-date-panel,\n        &-time-panel", {
    display: 'flex',
    flexDirection: 'column',
    width: pickerPanelWidth
  }), _defineProperty(_componentCls, '&-header', {
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
  }), _defineProperty(_componentCls, "&-prev-icon,\n        &-next-icon,\n        &-super-prev-icon,\n        &-super-next-icon", {
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
  }), _defineProperty(_componentCls, "&-super-prev-icon,\n        &-super-next-icon", {
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
  }), _defineProperty(_componentCls, "&-prev-icon,\n        &-super-prev-icon", {
    transform: 'rotate(-45deg)'
  }), _defineProperty(_componentCls, "&-next-icon,\n        &-super-next-icon", {
    transform: 'rotate(135deg)'
  }), _defineProperty(_componentCls, '&-content', {
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
  }), _defineProperty(_componentCls, '&-cell', _extends({
    padding: pickerCellPaddingVertical + "px 0",
    color: colorTextDisabled,
    cursor: 'pointer',
    // In view
    '&-in-view': {
      color: colorText
    }
  }, genPickerCellInnerStyle(token))), _defineProperty(_componentCls, "&-date-panel " + componentCls + "-cell-in-view" + componentCls + "-cell-in-range" + componentCls + "-cell-range-hover-start " + pickerCellInnerCls + ",\n        &-date-panel " + componentCls + "-cell-in-view" + componentCls + "-cell-in-range" + componentCls + "-cell-range-hover-end " + pickerCellInnerCls, {
    '&::after': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      zIndex: -1,
      background: pickerBasicCellHoverWithRangeColor,
      transition: "all " + motionDurationSlow,
      content: '""'
    }
  }), _defineProperty(_componentCls, "&-date-panel\n        " + componentCls + "-cell-in-view" + componentCls + "-cell-in-range" + componentCls + "-cell-range-hover-start\n        " + pickerCellInnerCls + "::after", {
    insetInlineEnd: (pickerPanelCellWidth - pickerPanelCellHeight) / 2,
    insetInlineStart: 0
  }), _defineProperty(_componentCls, "&-date-panel " + componentCls + "-cell-in-view" + componentCls + "-cell-in-range" + componentCls + "-cell-range-hover-end " + pickerCellInnerCls + "::after", {
    insetInlineEnd: 0,
    insetInlineStart: (pickerPanelCellWidth - pickerPanelCellHeight) / 2
  }), _defineProperty(_componentCls, '&-range-hover:is(&-range-start)::after', {
    insetInlineEnd: '50%'
  }), _defineProperty(_componentCls, "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel", (_decadePanel = {}, _defineProperty(_decadePanel, componentCls + "-content", {
    height: pickerPanelWithoutTimeCellHeight * 4
  }), _defineProperty(_decadePanel, pickerCellInnerCls, {
    padding: "0 " + paddingXS + "px"
  }), _decadePanel)), _defineProperty(_componentCls, '&-quarter-panel', _defineProperty({}, componentCls + "-content", {
    height: pickerQuarterPanelContentHeight
  })), _defineProperty(_componentCls, "&-panel " + componentCls + "-footer", {
    borderTop: lineWidth + "px " + lineType + " " + colorSplit
  }), _defineProperty(_componentCls, '&-footer', {
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
  }), _defineProperty(_componentCls, '&-now', {
    textAlign: 'start'
  }), _defineProperty(_componentCls, '&-today-btn', {
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
  }), _defineProperty(_componentCls, '&-decade-panel', (_decadePanel2 = {}, _defineProperty(_decadePanel2, pickerCellInnerCls, {
    padding: "0 " + paddingXS / 2 + "px"
  }), _defineProperty(_decadePanel2, componentCls + "-cell::before", {
    display: 'none'
  }), _decadePanel2)), _defineProperty(_componentCls, "&-year-panel,\n        &-quarter-panel,\n        &-month-panel", (_yearPanel = {}, _defineProperty(_yearPanel, componentCls + "-body", {
    padding: "0 " + paddingXS + "px"
  }), _defineProperty(_yearPanel, pickerCellInnerCls, {
    width: pickerYearMonthCellWidth
  }), _defineProperty(_yearPanel, componentCls + "-cell-range-hover-start::after", _defineProperty({
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
  })), _defineProperty(_yearPanel, componentCls + "-cell-range-hover-end::after", _defineProperty({
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
  })), _yearPanel)), _defineProperty(_componentCls, '&-week-panel', (_weekPanel = {}, _defineProperty(_weekPanel, componentCls + "-body", {
    padding: paddingXS + "px " + paddingSM + "px"
  }), _defineProperty(_weekPanel, componentCls + "-cell", _defineProperty({}, "&:hover " + pickerCellInnerCls + ",\n      &-selected " + pickerCellInnerCls + ",\n      " + pickerCellInnerCls, {
    background: 'transparent !important'
  })), _defineProperty(_weekPanel, '&-row', _defineProperty({
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
  }, _defineProperty(_selectedTd, "&" + componentCls + "-cell-week", {
    color: new TinyColor(colorTextLightSolid).setAlpha(0.5).toHexString()
  }), _defineProperty(_selectedTd, "&" + componentCls + "-cell-today " + pickerCellInnerCls + "::before", {
    borderColor: colorTextLightSolid
  }), _defineProperty(_selectedTd, pickerCellInnerCls, {
    color: colorTextLightSolid
  }), _selectedTd))), _weekPanel)), _defineProperty(_componentCls, '&-date-panel', (_datePanel = {}, _defineProperty(_datePanel, componentCls + "-body", {
    padding: paddingXS + "px " + paddingSM + "px"
  }), _defineProperty(_datePanel, componentCls + "-content", {
    width: pickerPanelCellWidth * 7,
    th: {
      width: pickerPanelCellWidth
    }
  }), _datePanel)), _defineProperty(_componentCls, '&-datetime-panel', (_datetimePanel = {
    display: 'flex'
  }, _defineProperty(_datetimePanel, componentCls + "-time-panel", {
    borderInlineStart: lineWidth + "px " + lineType + " " + colorSplit
  }), _defineProperty(_datetimePanel, componentCls + "-date-panel,\n          " + componentCls + "-time-panel", {
    transition: "opacity " + motionDurationSlow
  }), _defineProperty(_datetimePanel, '&-active', _defineProperty({}, componentCls + "-date-panel,\n            " + componentCls + "-time-panel", {
    opacity: 0.3,
    '&-active': {
      opacity: 1
    }
  })), _datetimePanel)), _defineProperty(_componentCls, '&-time-panel', (_timePanel = {
    width: 'auto',
    minWidth: 'auto',
    direction: 'ltr'
  }, _defineProperty(_timePanel, componentCls + "-content", {
    display: 'flex',
    flex: 'auto',
    height: pickerTimePanelColumnHeight
  }), _defineProperty(_timePanel, '&-column', {
    flex: '1 0 auto',
    width: pickerTimePanelColumnWidth,
    margin: 0,
    padding: 0,
    overflowY: 'hidden',
    textAlign: 'start',
    listStyle: 'none',
    transition: "background " + motionDurationMid,
    overflowX: 'hidden',
    '&::after': _defineProperty({
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
      background: new TinyColor(controlItemBgActive).setAlpha(0.2).toHexString()
    },
    '&:hover': {
      overflowY: 'auto'
    },
    '> li': _defineProperty({
      margin: 0,
      padding: 0
    }, "&" + componentCls + "-time-panel-cell", (_ref5 = {
      marginInline: marginXXS
    }, _defineProperty(_ref5, componentCls + "-time-panel-cell-inner", {
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
    }), _defineProperty(_ref5, '&-selected', _defineProperty({}, componentCls + "-time-panel-cell-inner", {
      background: controlItemBgActive
    })), _defineProperty(_ref5, '&-disabled', _defineProperty({}, componentCls + "-time-panel-cell-inner", {
      color: colorTextDisabled,
      background: 'transparent',
      cursor: 'not-allowed'
    })), _ref5))
  }), _timePanel)), _componentCls));
};
var genPickerStatusStyle = function genPickerStatusStyle(token) {
  var componentCls = token.componentCls,
    colorBgContainer = token.colorBgContainer,
    colorError = token.colorError,
    colorErrorOutline = token.colorErrorOutline,
    colorWarning = token.colorWarning,
    colorWarningOutline = token.colorWarningOutline;
  return _defineProperty({}, componentCls, {
    '&-status-error&': _defineProperty({
      '&, &:not([disabled]):hover': {
        backgroundColor: colorBgContainer,
        borderColor: colorError
      },
      '&-focused, &:focus': _extends({}, genActiveStyle(mergeToken(token, {
        inputBorderActiveColor: colorError,
        inputBorderHoverColor: colorError,
        controlOutline: colorErrorOutline
      })))
    }, componentCls + "-active-bar", {
      background: colorError
    }),
    '&-status-warning&': _defineProperty({
      '&, &:not([disabled]):hover': {
        backgroundColor: colorBgContainer,
        borderColor: colorWarning
      },
      '&-focused, &:focus': _extends({}, genActiveStyle(mergeToken(token, {
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
  return [_defineProperty({}, componentCls, _extends(_extends(_extends(_extends(_extends({}, resetComponent(token)), genPikerPadding(token, controlHeight, fontSize, inputPaddingHorizontal)), {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    background: colorBgContainer,
    border: lineWidth + "px " + lineType + " " + colorBorder,
    borderRadius: borderRadius,
    transition: "border " + motionDurationMid + ", box-shadow " + motionDurationMid
  }), genCompactItemStyle(token, componentCls, '', componentCls + "-focused")), (_extends4 = {
    '&:hover, &-focused': _extends({}, genHoverStyle(token)),
    '&-focused': _extends({}, genActiveStyle(token)),
    '&&-disabled': _defineProperty({
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
  }, _defineProperty(_extends4, componentCls + "-input", {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    '> input': _extends(_extends({}, genBasicInputStyle(token)), {
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
    '&:hover': _defineProperty({}, componentCls + "-clear", {
      opacity: 1
    }),
    '&-placeholder': {
      '> input': {
        color: colorTextPlaceholder
      }
    }
  }), _defineProperty(_extends4, '&-large', _extends(_extends({}, genPikerPadding(token, controlHeightLG, fontSizeLG, inputPaddingHorizontal)), _defineProperty({}, componentCls + "-input > input", {
    fontSize: fontSizeLG
  }))), _defineProperty(_extends4, '&-small', _extends({}, genPikerPadding(token, controlHeightSM, fontSize, inputPaddingHorizontalSM))), _defineProperty(_extends4, componentCls + "-suffix", {
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
  }), _defineProperty(_extends4, componentCls + "-clear", {
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
  }), _defineProperty(_extends4, componentCls + "-separator", (_ref9 = {
    position: 'relative',
    display: 'inline-block',
    width: '1em',
    height: fontSizeLG,
    color: colorTextDisabled,
    fontSize: fontSizeLG,
    verticalAlign: 'top',
    cursor: 'default'
  }, _defineProperty(_ref9, componentCls + "-focused &", {
    color: colorTextDescription
  }), _defineProperty(_ref9, componentCls + "-range-separator &", _defineProperty({}, componentCls + "-disabled &", {
    cursor: 'not-allowed'
  })), _ref9)), _defineProperty(_extends4, '&-range', (_range = {
    position: 'relative',
    display: 'inline-flex'
  }, _defineProperty(_range, componentCls + "-clear", {
    insetInlineEnd: inputPaddingHorizontal
  }), _defineProperty(_range, '&:hover', _defineProperty({}, componentCls + "-clear", {
    opacity: 1
  })), _defineProperty(_range, componentCls + "-active-bar", {
    bottom: -lineWidth,
    height: lineWidthBold,
    marginInlineStart: inputPaddingHorizontal,
    background: colorPrimary,
    opacity: 0,
    transition: "all " + motionDurationSlow + " ease-out",
    pointerEvents: 'none'
  }), _defineProperty(_range, "&" + componentCls + "-focused", _defineProperty({}, componentCls + "-active-bar", {
    opacity: 1
  })), _defineProperty(_range, componentCls + "-range-separator", {
    alignItems: 'center',
    padding: "0 " + paddingXS + "px",
    lineHeight: 1
  }), _defineProperty(_range, "&" + componentCls + "-small", (_ref11 = {}, _defineProperty(_ref11, componentCls + "-clear", {
    insetInlineEnd: inputPaddingHorizontalSM
  }), _defineProperty(_ref11, componentCls + "-active-bar", {
    marginInlineStart: inputPaddingHorizontalSM
  }), _ref11)), _range)), _defineProperty(_extends4, '&-dropdown', _extends(_extends(_extends({}, resetComponent(token)), genPanelStyle(token)), (_extends3 = {
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
    '&&-placement-bottomLeft': _defineProperty({}, componentCls + "-range-arrow", {
      top: 0,
      display: 'block',
      transform: 'translateY(-100%)'
    }),
    '&&-placement-topLeft': _defineProperty({}, componentCls + "-range-arrow", {
      bottom: 0,
      display: 'block',
      transform: 'translateY(100%) rotate(180deg)'
    })
  }, _defineProperty(_extends3, "&" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-topLeft,\n          &" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-topRight,\n          &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-topLeft,\n          &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-topRight", {
    animationName: slideDownIn
  }), _defineProperty(_extends3, "&" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-bottomLeft,\n          &" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-bottomRight,\n          &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-bottomLeft,\n          &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-bottomRight", {
    animationName: slideUpIn
  }), _defineProperty(_extends3, "&" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-topLeft,\n          &" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-topRight", {
    animationName: slideDownOut
  }), _defineProperty(_extends3, "&" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-bottomLeft,\n          &" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-bottomRight", {
    animationName: slideUpOut
  }), _defineProperty(_extends3, componentCls + "-panel > " + componentCls + "-time-panel", {
    paddingTop: paddingXXS
  }), _defineProperty(_extends3, componentCls + "-ranges", (_ref12 = {
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
  }, _defineProperty(_ref12, componentCls + "-preset > " + antCls + "-tag-blue", {
    color: colorPrimary,
    background: controlItemBgActive,
    borderColor: colorPrimaryBorder,
    cursor: 'pointer'
  }), _defineProperty(_ref12, componentCls + "-ok", {
    marginInlineStart: 'auto'
  }), _ref12)), _defineProperty(_extends3, componentCls + "-range-wrapper", {
    display: 'flex',
    position: 'relative'
  }), _defineProperty(_extends3, componentCls + "-range-arrow", _extends({
    position: 'absolute',
    zIndex: 1,
    display: 'none',
    marginInlineStart: inputPaddingHorizontal * 1.5,
    transition: "left " + motionDurationSlow + " ease-out"
  }, roundedArrow(sizePopupArrow, borderRadiusXS, borderRadiusOuter, colorBgElevated, boxShadowPopoverArrow))), _defineProperty(_extends3, componentCls + "-panel-container", (_ref15 = {
    overflow: 'hidden',
    verticalAlign: 'top',
    background: colorBgElevated,
    borderRadius: borderRadiusLG,
    boxShadow: boxShadowSecondary,
    transition: "margin " + motionDurationSlow
  }, _defineProperty(_ref15, componentCls + "-panel-layout", {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'stretch'
  }), _defineProperty(_ref15, componentCls + "-presets", {
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
      li: _extends(_extends({}, textEllipsis), {
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
  }), _defineProperty(_ref15, componentCls + "-panels", (_ref13 = {
    display: 'inline-flex',
    flexWrap: 'nowrap',
    direction: 'ltr'
  }, _defineProperty(_ref13, componentCls + "-panel", {
    borderWidth: "0 0 " + lineWidth + "px"
  }), _defineProperty(_ref13, '&:last-child', _defineProperty({}, componentCls + "-panel", {
    borderWidth: 0
  })), _ref13)), _defineProperty(_ref15, componentCls + "-panel", (_ref14 = {
    verticalAlign: 'top',
    background: 'transparent',
    borderRadius: 0,
    borderWidth: 0
  }, _defineProperty(_ref14, componentCls + "-content,\n            table", {
    textAlign: 'center'
  }), _defineProperty(_ref14, '&-focused', {
    borderColor: colorBorder
  }), _ref14)), _ref15)), _extends3))), _defineProperty(_extends4, '&-dropdown-range', {
    padding: sizePopupArrow * 2 / 3 + "px 0",
    '&-hidden': {
      display: 'none'
    }
  }), _defineProperty(_extends4, '&-rtl', (_rtl2 = {
    direction: 'rtl'
  }, _defineProperty(_rtl2, componentCls + "-separator", {
    transform: 'rotate(180deg)'
  }), _defineProperty(_rtl2, componentCls + "-footer", {
    '&-extra': {
      direction: 'rtl'
    }
  }), _rtl2)), _extends4))),
  // Follow code may reuse in other components
  initSlideMotion(token, 'slide-up'), initSlideMotion(token, 'slide-down'), initMoveMotion(token, 'move-up'), initMoveMotion(token, 'move-down')];
};
export var initPickerPanelToken = function initPickerPanelToken(token) {
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
    pickerDateHoverRangeBorderColor: new TinyColor(colorPrimary).lighten(20).toHexString(),
    pickerBasicCellHoverWithRangeColor: new TinyColor(colorPrimary).lighten(35).toHexString(),
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
export default genComponentStyleHook('DatePicker', function (token) {
  var pickerToken = mergeToken(initInputToken(token), initPickerPanelToken(token));
  return [genPickerStyle(pickerToken), genPickerStatusStyle(pickerToken)];
}, function (token) {
  return {
    presetsWidth: 120,
    presetsMaxWidth: 200,
    zIndexPopup: token.zIndexPopupBase + 50
  };
});