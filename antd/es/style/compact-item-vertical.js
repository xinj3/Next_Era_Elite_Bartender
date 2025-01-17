import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function compactItemVerticalBorder(token) {
  return {
    // border collapse
    '&-item:not(&-last-item)': {
      marginBottom: -token.lineWidth
    },
    '&-item': {
      '&:hover,&:focus,&:active': {
        zIndex: 2
      },
      '&[disabled]': {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls) {
  return {
    '&-item:not(&-first-item):not(&-last-item)': {
      borderRadius: 0
    },
    '&-item&-first-item:not(&-last-item)': _defineProperty({}, "&, &" + prefixCls + "-sm, &" + prefixCls + "-lg", {
      borderEndEndRadius: 0,
      borderEndStartRadius: 0
    }),
    '&-item&-last-item:not(&-first-item)': _defineProperty({}, "&, &" + prefixCls + "-sm, &" + prefixCls + "-lg", {
      borderStartStartRadius: 0,
      borderStartEndRadius: 0
    })
  };
}
export function genCompactItemVerticalStyle(token, prefixCls) {
  return {
    '&-compact-vertical': _extends(_extends({}, compactItemVerticalBorder(token)), compactItemBorderVerticalRadius(prefixCls))
  };
}