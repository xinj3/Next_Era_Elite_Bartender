"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
var genCarouselStyle = function genCarouselStyle(token) {
  var _slickSlide;
  var componentCls = token.componentCls,
    antCls = token.antCls,
    carouselArrowSize = token.carouselArrowSize,
    carouselDotOffset = token.carouselDotOffset,
    marginXXS = token.marginXXS;
  var arrowOffset = -carouselArrowSize * 1.25;
  var carouselDotMargin = marginXXS;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends2["default"])((0, _extends2["default"])({}, (0, _style.resetComponent)(token)), {
    '.slick-slider': {
      position: 'relative',
      display: 'block',
      boxSizing: 'border-box',
      touchAction: 'pan-y',
      WebkitTouchCallout: 'none',
      WebkitTapHighlightColor: 'transparent',
      '.slick-track, .slick-list': {
        transform: 'translate3d(0, 0, 0)',
        touchAction: 'pan-y'
      }
    },
    '.slick-list': {
      position: 'relative',
      display: 'block',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      '&:focus': {
        outline: 'none'
      },
      '&.dragging': {
        cursor: 'pointer'
      },
      '.slick-slide': (_slickSlide = {
        pointerEvents: 'none'
      }, (0, _defineProperty2["default"])(_slickSlide, "input" + antCls + "-radio-input, input" + antCls + "-checkbox-input", {
        visibility: 'hidden'
      }), (0, _defineProperty2["default"])(_slickSlide, '&.slick-active', (0, _defineProperty2["default"])({
        pointerEvents: 'auto'
      }, "input" + antCls + "-radio-input, input" + antCls + "-checkbox-input", {
        visibility: 'visible'
      })), (0, _defineProperty2["default"])(_slickSlide, '> div > div', {
        verticalAlign: 'bottom'
      }), _slickSlide)
    },
    '.slick-track': {
      position: 'relative',
      top: 0,
      insetInlineStart: 0,
      display: 'block',
      '&::before, &::after': {
        display: 'table',
        content: '""'
      },
      '&::after': {
        clear: 'both'
      }
    },
    '.slick-slide': {
      display: 'none',
      "float": 'left',
      height: '100%',
      minHeight: 1,
      img: {
        display: 'block'
      },
      '&.dragging img': {
        pointerEvents: 'none'
      }
    },
    '.slick-initialized .slick-slide': {
      display: 'block'
    },
    '.slick-vertical .slick-slide': {
      display: 'block',
      height: 'auto'
    },
    '.slick-arrow.slick-hidden': {
      display: 'none'
    },
    // Arrows
    '.slick-prev, .slick-next': {
      position: 'absolute',
      top: '50%',
      display: 'block',
      width: carouselArrowSize,
      height: carouselArrowSize,
      marginTop: -carouselArrowSize / 2,
      padding: 0,
      color: 'transparent',
      fontSize: 0,
      lineHeight: 0,
      background: 'transparent',
      border: 0,
      outline: 'none',
      cursor: 'pointer',
      '&:hover, &:focus': {
        color: 'transparent',
        background: 'transparent',
        outline: 'none',
        '&::before': {
          opacity: 1
        }
      },
      '&.slick-disabled::before': {
        opacity: 0.25
      }
    },
    '.slick-prev': {
      insetInlineStart: arrowOffset,
      '&::before': {
        content: '"←"'
      }
    },
    '.slick-next': {
      insetInlineEnd: arrowOffset,
      '&::before': {
        content: '"→"'
      }
    },
    // Dots
    '.slick-dots': {
      position: 'absolute',
      insetInlineEnd: 0,
      bottom: 0,
      insetInlineStart: 0,
      zIndex: 15,
      display: 'flex !important',
      justifyContent: 'center',
      paddingInlineStart: 0,
      listStyle: 'none',
      '&-bottom': {
        bottom: carouselDotOffset
      },
      '&-top': {
        top: carouselDotOffset,
        bottom: 'auto'
      },
      li: {
        position: 'relative',
        display: 'inline-block',
        flex: '0 1 auto',
        boxSizing: 'content-box',
        width: token.dotWidth,
        height: token.dotHeight,
        marginInline: carouselDotMargin,
        padding: 0,
        textAlign: 'center',
        textIndent: -999,
        verticalAlign: 'top',
        transition: "all " + token.motionDurationSlow,
        button: {
          position: 'relative',
          display: 'block',
          width: '100%',
          height: token.dotHeight,
          padding: 0,
          color: 'transparent',
          fontSize: 0,
          background: token.colorBgContainer,
          border: 0,
          borderRadius: 1,
          outline: 'none',
          cursor: 'pointer',
          opacity: 0.3,
          transition: "all " + token.motionDurationSlow,
          '&: hover, &:focus': {
            opacity: 0.75
          },
          '&::after': {
            position: 'absolute',
            inset: -carouselDotMargin,
            content: '""'
          }
        },
        '&.slick-active': {
          width: token.dotWidthActive,
          '& button': {
            background: token.colorBgContainer,
            opacity: 1
          },
          '&: hover, &:focus': {
            opacity: 1
          }
        }
      }
    }
  }));
};
var genCarouselVerticalStyle = function genCarouselVerticalStyle(token) {
  var componentCls = token.componentCls,
    carouselDotOffset = token.carouselDotOffset,
    marginXXS = token.marginXXS;
  var reverseSizeOfDot = {
    width: token.dotHeight,
    height: token.dotWidth
  };
  return (0, _defineProperty2["default"])({}, componentCls + "-vertical", {
    '.slick-dots': {
      top: '50%',
      bottom: 'auto',
      flexDirection: 'column',
      width: token.dotHeight,
      height: 'auto',
      margin: 0,
      transform: 'translateY(-50%)',
      '&-left': {
        insetInlineEnd: 'auto',
        insetInlineStart: carouselDotOffset
      },
      '&-right': {
        insetInlineEnd: carouselDotOffset,
        insetInlineStart: 'auto'
      },
      li: (0, _extends2["default"])((0, _extends2["default"])({}, reverseSizeOfDot), {
        margin: marginXXS + "px 0",
        verticalAlign: 'baseline',
        button: reverseSizeOfDot,
        '&.slick-active': (0, _extends2["default"])((0, _extends2["default"])({}, reverseSizeOfDot), {
          button: reverseSizeOfDot
        })
      })
    }
  });
};
var genCarouselRtlStyle = function genCarouselRtlStyle(token) {
  var componentCls = token.componentCls;
  return [(0, _defineProperty2["default"])({}, componentCls + "-rtl", {
    direction: 'rtl',
    // Dots
    '.slick-dots': (0, _defineProperty2["default"])({}, componentCls + "-rtl&", {
      flexDirection: 'row-reverse'
    })
  }), (0, _defineProperty2["default"])({}, componentCls + "-vertical", {
    '.slick-dots': (0, _defineProperty2["default"])({}, componentCls + "-rtl&", {
      flexDirection: 'column'
    })
  })];
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Carousel', function (token) {
  var controlHeightLG = token.controlHeightLG,
    controlHeightSM = token.controlHeightSM;
  var carouselToken = (0, _internal.mergeToken)(token, {
    carouselArrowSize: controlHeightLG / 2,
    carouselDotOffset: controlHeightSM / 2
  });
  return [genCarouselStyle(carouselToken), genCarouselVerticalStyle(carouselToken), genCarouselRtlStyle(carouselToken)];
}, {
  dotWidth: 16,
  dotHeight: 3,
  dotWidthActive: 24
});
exports["default"] = _default;