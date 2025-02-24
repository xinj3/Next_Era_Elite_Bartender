import _extends from "@babel/runtime/helpers/esm/extends";
import raf from "rc-util/es/raf";
import { composeRef } from "rc-util/es/ref";
import * as React from 'react';
import { useRef } from 'react';
import Tooltip from '../tooltip';
var SliderTooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var open = props.open;
  var innerRef = useRef(null);
  var rafRef = useRef(null);
  function cancelKeepAlign() {
    raf.cancel(rafRef.current);
    rafRef.current = null;
  }
  function keepAlign() {
    rafRef.current = raf(function () {
      var _a;
      (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.forcePopupAlign();
      rafRef.current = null;
    });
  }
  React.useEffect(function () {
    if (open) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }
    return cancelKeepAlign;
  }, [open, props.title]);
  return /*#__PURE__*/React.createElement(Tooltip, _extends({
    ref: composeRef(innerRef, ref)
  }, props));
});
export default SliderTooltip;