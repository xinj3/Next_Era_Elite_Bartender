"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
function renderExpandIcon(locale) {
  return function expandIcon(_ref) {
    var _classNames;
    var prefixCls = _ref.prefixCls,
      onExpand = _ref.onExpand,
      record = _ref.record,
      expanded = _ref.expanded,
      expandable = _ref.expandable;
    var iconPrefix = prefixCls + "-row-expand-icon";
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick(e) {
        onExpand(record, e);
        e.stopPropagation();
      },
      className: (0, _classnames["default"])(iconPrefix, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, iconPrefix + "-spaced", !expandable), (0, _defineProperty2["default"])(_classNames, iconPrefix + "-expanded", expandable && expanded), (0, _defineProperty2["default"])(_classNames, iconPrefix + "-collapsed", expandable && !expanded), _classNames)),
      "aria-label": expanded ? locale.collapse : locale.expand,
      "aria-expanded": expanded
    });
  };
}
var _default = renderExpandIcon;
exports["default"] = _default;