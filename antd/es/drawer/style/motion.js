import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genMotionStyle = function genMotionStyle(token) {
  var _componentCls;
  var componentCls = token.componentCls,
    motionDurationSlow = token.motionDurationSlow;
  var sharedPanelMotion = {
    '&-enter, &-appear, &-leave': {
      '&-start': {
        transition: 'none'
      },
      '&-active': {
        transition: "all " + motionDurationSlow
      }
    }
  };
  return _defineProperty({}, componentCls, (_componentCls = {}, _defineProperty(_componentCls, componentCls + "-mask-motion", {
    '&-enter, &-appear, &-leave': {
      '&-active': {
        transition: "all " + motionDurationSlow
      }
    },
    '&-enter, &-appear': {
      opacity: 0,
      '&-active': {
        opacity: 1
      }
    },
    '&-leave': {
      opacity: 1,
      '&-active': {
        opacity: 0
      }
    }
  }), _defineProperty(_componentCls, componentCls + "-panel-motion", {
    // Left
    '&-left': [sharedPanelMotion, {
      '&-enter, &-appear': {
        '&-start': {
          transform: 'translateX(-100%) !important'
        },
        '&-active': {
          transform: 'translateX(0)'
        }
      },
      '&-leave': {
        transform: 'translateX(0)',
        '&-active': {
          transform: 'translateX(-100%)'
        }
      }
    }],
    // Right
    '&-right': [sharedPanelMotion, {
      '&-enter, &-appear': {
        '&-start': {
          transform: 'translateX(100%) !important'
        },
        '&-active': {
          transform: 'translateX(0)'
        }
      },
      '&-leave': {
        transform: 'translateX(0)',
        '&-active': {
          transform: 'translateX(100%)'
        }
      }
    }],
    // Top
    '&-top': [sharedPanelMotion, {
      '&-enter, &-appear': {
        '&-start': {
          transform: 'translateY(-100%) !important'
        },
        '&-active': {
          transform: 'translateY(0)'
        }
      },
      '&-leave': {
        transform: 'translateY(0)',
        '&-active': {
          transform: 'translateY(-100%)'
        }
      }
    }],
    // Bottom
    '&-bottom': [sharedPanelMotion, {
      '&-enter, &-appear': {
        '&-start': {
          transform: 'translateY(100%) !important'
        },
        '&-active': {
          transform: 'translateY(0)'
        }
      },
      '&-leave': {
        transform: 'translateY(0)',
        '&-active': {
          transform: 'translateY(100%)'
        }
      }
    }]
  }), _componentCls));
};
export default genMotionStyle;