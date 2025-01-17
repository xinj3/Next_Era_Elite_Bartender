import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { initSlideMotion } from '../../style/motion';
var genMotionStyle = function genMotionStyle(token) {
  var componentCls = token.componentCls,
    motionDurationSlow = token.motionDurationSlow;
  return [_defineProperty({}, componentCls, _defineProperty({}, componentCls + "-switch", {
    '&-appear, &-enter': {
      transition: 'none',
      '&-start': {
        opacity: 0
      },
      '&-active': {
        opacity: 1,
        transition: "opacity " + motionDurationSlow
      }
    },
    '&-leave': {
      position: 'absolute',
      transition: 'none',
      inset: 0,
      '&-start': {
        opacity: 1
      },
      '&-active': {
        opacity: 0,
        transition: "opacity " + motionDurationSlow
      }
    }
  })),
  // Follow code may reuse in other components
  [initSlideMotion(token, 'slide-up'), initSlideMotion(token, 'slide-down')]];
};
export default genMotionStyle;