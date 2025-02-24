import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import Tooltip from '../../tooltip';
var EllipsisTooltip = function EllipsisTooltip(_ref) {
  var enabledEllipsis = _ref.enabledEllipsis,
    isEllipsis = _ref.isEllipsis,
    children = _ref.children,
    tooltipProps = _ref.tooltipProps;
  if (!(tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.title) || !enabledEllipsis) {
    return children;
  }
  return /*#__PURE__*/React.createElement(Tooltip, _extends({
    open: isEllipsis ? undefined : false
  }, tooltipProps), children);
};
if (process.env.NODE_ENV !== 'production') {
  EllipsisTooltip.displayName = 'EllipsisTooltip';
}
export default EllipsisTooltip;