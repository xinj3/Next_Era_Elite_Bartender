import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';
// ============================== Shared ==============================
var genSharedDividerStyle = function genSharedDividerStyle(token) {
  var _extends2;
  var componentCls = token.componentCls,
    sizePaddingEdgeHorizontal = token.sizePaddingEdgeHorizontal,
    colorSplit = token.colorSplit,
    lineWidth = token.lineWidth;
  return _defineProperty({}, componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    borderBlockStart: lineWidth + "px solid " + colorSplit,
    // vertical
    '&-vertical': {
      position: 'relative',
      top: '-0.06em',
      display: 'inline-block',
      height: '0.9em',
      margin: "0 " + token.dividerVerticalGutterMargin + "px",
      verticalAlign: 'middle',
      borderTop: 0,
      borderInlineStart: lineWidth + "px solid " + colorSplit
    },
    '&-horizontal': {
      display: 'flex',
      clear: 'both',
      width: '100%',
      minWidth: '100%',
      margin: token.dividerHorizontalGutterMargin + "px 0"
    },
    '&-horizontal&-with-text': {
      display: 'flex',
      margin: token.dividerHorizontalWithTextGutterMargin + "px 0",
      color: token.colorTextHeading,
      fontWeight: 500,
      fontSize: token.fontSizeLG,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      borderBlockStart: "0 " + colorSplit,
      '&::before, &::after': {
        position: 'relative',
        top: '50%',
        width: '50%',
        borderBlockStart: lineWidth + "px solid transparent",
        // Chrome not accept `inherit` in `border-top`
        borderBlockStartColor: 'inherit',
        borderBlockEnd: 0,
        transform: 'translateY(50%)',
        content: "''"
      }
    },
    '&-horizontal&-with-text-left': {
      '&::before': {
        top: '50%',
        width: '5%'
      },
      '&::after': {
        top: '50%',
        width: '95%'
      }
    },
    '&-horizontal&-with-text-right': {
      '&::before': {
        top: '50%',
        width: '95%'
      },
      '&::after': {
        top: '50%',
        width: '5%'
      }
    }
  }, _defineProperty(_extends2, componentCls + "-inner-text", {
    display: 'inline-block',
    padding: '0 1em'
  }), _defineProperty(_extends2, '&-dashed', {
    background: 'none',
    borderColor: colorSplit,
    borderStyle: 'dashed',
    borderWidth: lineWidth + "px 0 0"
  }), _defineProperty(_extends2, '&-horizontal&-with-text&-dashed', {
    '&::before, &::after': {
      borderStyle: 'dashed none none'
    }
  }), _defineProperty(_extends2, '&-vertical&-dashed', {
    borderInlineStart: lineWidth,
    borderInlineEnd: 0,
    borderBlockStart: 0,
    borderBlockEnd: 0
  }), _defineProperty(_extends2, '&-plain&-with-text', {
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: token.fontSize
  }), _defineProperty(_extends2, '&-horizontal&-with-text-left&-no-default-orientation-margin-left', _defineProperty({
    '&::before': {
      width: 0
    },
    '&::after': {
      width: '100%'
    }
  }, componentCls + "-inner-text", {
    paddingInlineStart: sizePaddingEdgeHorizontal
  })), _defineProperty(_extends2, '&-horizontal&-with-text-right&-no-default-orientation-margin-right', _defineProperty({
    '&::before': {
      width: '100%'
    },
    '&::after': {
      width: 0
    }
  }, componentCls + "-inner-text", {
    paddingInlineEnd: sizePaddingEdgeHorizontal
  })), _extends2)));
};
// ============================== Export ==============================
export default genComponentStyleHook('Divider', function (token) {
  var dividerToken = mergeToken(token, {
    dividerVerticalGutterMargin: token.marginXS,
    dividerHorizontalWithTextGutterMargin: token.margin,
    dividerHorizontalGutterMargin: token.marginLG
  });
  return [genSharedDividerStyle(dividerToken)];
}, {
  sizePaddingEdgeHorizontal: 0
});