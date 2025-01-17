import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import classNames from 'classnames';
import * as React from 'react';
var Element = function Element(props) {
  var _classNames, _classNames2;
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    size = props.size,
    shape = props.shape;
  var sizeCls = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls + "-lg", size === 'large'), _defineProperty(_classNames, prefixCls + "-sm", size === 'small'), _classNames));
  var shapeCls = classNames((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + "-circle", shape === 'circle'), _defineProperty(_classNames2, prefixCls + "-square", shape === 'square'), _defineProperty(_classNames2, prefixCls + "-round", shape === 'round'), _classNames2));
  var sizeStyle = React.useMemo(function () {
    return typeof size === 'number' ? {
      width: size,
      height: size,
      lineHeight: size + "px"
    } : {};
  }, [size]);
  return /*#__PURE__*/React.createElement("span", {
    className: classNames(prefixCls, sizeCls, shapeCls, className),
    style: _extends(_extends({}, sizeStyle), style)
  });
};
export default Element;