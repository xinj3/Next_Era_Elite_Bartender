"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundedArrow = void 0;
var roundedArrow = function roundedArrow(width, innerRadius, outerRadius, bgColor, boxShadow) {
  var unitWidth = width / 2;
  var ax = unitWidth - outerRadius * (Math.sqrt(2) - 1);
  var ay = unitWidth;
  var bx = unitWidth + outerRadius * (1 - 1 / Math.sqrt(2));
  var by = unitWidth - outerRadius * (1 - 1 / Math.sqrt(2));
  var cx = 2 * unitWidth - innerRadius * (1 / Math.sqrt(2));
  var cy = innerRadius * (1 / Math.sqrt(2));
  var dx = 4 * unitWidth - cx;
  var dy = cy;
  var ex = 4 * unitWidth - bx;
  var ey = by;
  var fx = 4 * unitWidth - ax;
  var fy = ay;
  return {
    borderRadius: {
      _skip_check_: true,
      value: "0 0 " + innerRadius + "px"
    },
    pointerEvents: 'none',
    width: width * 2,
    height: width * 2,
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      width: width / Math.sqrt(2),
      height: width / Math.sqrt(2),
      bottom: 0,
      insetInline: 0,
      margin: 'auto',
      borderRadius: {
        _skip_check_: true,
        value: "0 0 " + innerRadius + "px 0"
      },
      transform: 'translateY(50%) rotate(-135deg)',
      boxShadow: boxShadow,
      zIndex: 0,
      background: 'transparent'
    },
    '&::before': {
      position: 'absolute',
      bottom: 0,
      insetInlineStart: 0,
      width: width * 2,
      height: width / 2,
      background: bgColor,
      clipPath: "path('M " + ax + " " + ay + " A " + outerRadius + " " + outerRadius + " 0 0 0 " + bx + " " + by + " L " + cx + " " + cy + " A " + innerRadius + " " + innerRadius + " 0 0 1 " + dx + " " + dy + " L " + ex + " " + ey + " A " + outerRadius + " " + outerRadius + " 0 0 0 " + fx + " " + fy + " Z')",
      content: '""'
    }
  };
};
exports.roundedArrow = roundedArrow;