import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Keyframes } from '@ant-design/cssinjs';
import { genCollapseMotion } from '../../style/motion';
import { getStyle as getCheckboxStyle } from '../../checkbox/style';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { genFocusOutline, resetComponent } from '../../style';
// ============================ Keyframes =============================
var treeNodeFX = new Keyframes('ant-tree-node-fx-do-not-use', {
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});
// ============================== Switch ==============================
var getSwitchStyle = function getSwitchStyle(prefixCls, token) {
  return _defineProperty({}, "." + prefixCls + "-switcher-icon", {
    display: 'inline-block',
    fontSize: 10,
    verticalAlign: 'baseline',
    svg: {
      transition: "transform " + token.motionDurationSlow
    }
  });
};
// =============================== Drop ===============================
var getDropIndicatorStyle = function getDropIndicatorStyle(prefixCls, token) {
  return _defineProperty({}, "." + prefixCls + "-drop-indicator", {
    position: 'absolute',
    // it should displayed over the following node
    zIndex: 1,
    height: 2,
    backgroundColor: token.colorPrimary,
    borderRadius: 1,
    pointerEvents: 'none',
    '&:after': {
      position: 'absolute',
      top: -3,
      insetInlineStart: -6,
      width: 8,
      height: 8,
      backgroundColor: 'transparent',
      border: token.lineWidthBold + "px solid " + token.colorPrimary,
      borderRadius: '50%',
      content: '""'
    }
  });
};
export var genBaseStyle = function genBaseStyle(prefixCls, token) {
  var _ref3, _draggable, _ref7, _ref8, _showLine, _extends2;
  var treeCls = token.treeCls,
    treeNodeCls = token.treeNodeCls,
    treeNodePadding = token.treeNodePadding,
    treeTitleHeight = token.treeTitleHeight;
  var treeCheckBoxMarginVertical = (treeTitleHeight - token.fontSizeLG) / 2;
  var treeCheckBoxMarginHorizontal = token.paddingXS;
  return _defineProperty({}, treeCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    background: token.colorBgContainer,
    borderRadius: token.borderRadius,
    transition: "background-color " + token.motionDurationSlow,
    '&&-rtl': _defineProperty({}, treeCls + "-switcher", {
      '&_close': _defineProperty({}, treeCls + "-switcher-icon", {
        svg: {
          transform: 'rotate(90deg)'
        }
      })
    }),
    '&-focused:not(:hover):not(&-active-focused)': _extends({}, genFocusOutline(token))
  }, _defineProperty(_extends2, treeCls + "-list-holder-inner", {
    alignItems: 'flex-start'
  }), _defineProperty(_extends2, "&" + treeCls + "-block-node", _defineProperty({}, treeCls + "-list-holder-inner", (_ref3 = {
    alignItems: 'stretch'
  }, _defineProperty(_ref3, treeCls + "-node-content-wrapper", {
    flex: 'auto'
  }), _defineProperty(_ref3, treeNodeCls + ".dragging", {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      top: 0,
      insetInlineEnd: 0,
      bottom: treeNodePadding,
      insetInlineStart: 0,
      border: "1px solid " + token.colorPrimary,
      opacity: 0,
      animationName: treeNodeFX,
      animationDuration: token.motionDurationSlow,
      animationPlayState: 'running',
      animationFillMode: 'forwards',
      content: '""',
      pointerEvents: 'none'
    }
  }), _ref3))), _defineProperty(_extends2, "" + treeNodeCls, (_ref7 = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: "0 0 " + treeNodePadding + "px 0",
    outline: 'none',
    '&-rtl': {
      direction: 'rtl'
    },
    // Disabled
    '&-disabled': _defineProperty({}, treeCls + "-node-content-wrapper", {
      color: token.colorTextDisabled,
      cursor: 'not-allowed',
      '&:hover': {
        background: 'transparent'
      }
    })
  }, _defineProperty(_ref7, "&-active " + treeCls + "-node-content-wrapper", _extends({}, genFocusOutline(token))), _defineProperty(_ref7, "&:not(&-disabled).filter-node " + treeCls + "-title", {
    color: 'inherit',
    fontWeight: 500
  }), _defineProperty(_ref7, '&-draggable', (_draggable = {}, _defineProperty(_draggable, treeCls + "-draggable-icon", _defineProperty({
    width: treeTitleHeight,
    lineHeight: treeTitleHeight + "px",
    textAlign: 'center',
    visibility: 'visible',
    opacity: 0.2,
    transition: "opacity " + token.motionDurationSlow
  }, treeNodeCls + ":hover &", {
    opacity: 0.45
  })), _defineProperty(_draggable, "&" + treeNodeCls + "-disabled", _defineProperty({}, treeCls + "-draggable-icon", {
    visibility: 'hidden'
  })), _draggable)), _ref7)), _defineProperty(_extends2, treeCls + "-indent", {
    alignSelf: 'stretch',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    '&-unit': {
      display: 'inline-block',
      width: treeTitleHeight
    }
  }), _defineProperty(_extends2, treeCls + "-draggable-icon", {
    visibility: 'hidden'
  }), _defineProperty(_extends2, treeCls + "-switcher", _extends(_extends({}, getSwitchStyle(prefixCls, token)), {
    position: 'relative',
    flex: 'none',
    alignSelf: 'stretch',
    width: treeTitleHeight,
    margin: 0,
    lineHeight: treeTitleHeight + "px",
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    '&-noop': {
      cursor: 'default'
    },
    '&_close': _defineProperty({}, treeCls + "-switcher-icon", {
      svg: {
        transform: 'rotate(-90deg)'
      }
    }),
    '&-loading-icon': {
      color: token.colorPrimary
    },
    '&-leaf-line': {
      position: 'relative',
      zIndex: 1,
      display: 'inline-block',
      width: '100%',
      height: '100%',
      // https://github.com/ant-design/ant-design/issues/31884
      '&:before': {
        position: 'absolute',
        top: 0,
        insetInlineEnd: treeTitleHeight / 2,
        bottom: -treeNodePadding,
        marginInlineStart: -1,
        borderInlineEnd: "1px solid " + token.colorBorder,
        content: '""'
      },
      '&:after': {
        position: 'absolute',
        width: treeTitleHeight / 2 * 0.8,
        height: treeTitleHeight / 2,
        borderBottom: "1px solid " + token.colorBorder,
        content: '""'
      }
    }
  })), _defineProperty(_extends2, treeCls + "-checkbox", {
    top: 'initial',
    marginInlineEnd: treeCheckBoxMarginHorizontal,
    marginBlockStart: treeCheckBoxMarginVertical
  }), _defineProperty(_extends2, "\n        " + treeCls + "-node-content-wrapper,\n        " + treeCls + "-checkbox + span\n      ", (_ref8 = {
    display: 'flex',
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 'auto',
    minHeight: treeTitleHeight,
    margin: 0,
    padding: "0 " + token.paddingXS / 2 + "px",
    color: 'inherit',
    lineHeight: treeTitleHeight + "px",
    background: 'transparent',
    borderRadius: token.borderRadius,
    cursor: 'pointer',
    transition: "all " + token.motionDurationMid + ", border 0s, line-height 0s, box-shadow 0s",
    '&:hover': {
      backgroundColor: token.controlItemBgHover
    }
  }, _defineProperty(_ref8, "&" + treeCls + "-node-selected", {
    backgroundColor: token.controlOutline
  }), _defineProperty(_ref8, treeCls + "-iconEle", {
    display: 'inline-block',
    width: treeTitleHeight,
    height: treeTitleHeight,
    lineHeight: treeTitleHeight + "px",
    textAlign: 'center',
    verticalAlign: 'top',
    '&:empty': {
      display: 'none'
    }
  }), _ref8)), _defineProperty(_extends2, treeCls + "-unselectable " + treeCls + "-node-content-wrapper:hover", {
    backgroundColor: 'transparent'
  }), _defineProperty(_extends2, treeCls + "-node-content-wrapper", _extends({
    lineHeight: treeTitleHeight + "px",
    userSelect: 'none'
  }, getDropIndicatorStyle(prefixCls, token))), _defineProperty(_extends2, treeNodeCls + ".drop-container", {
    '> [draggable]': {
      boxShadow: "0 0 0 2px " + token.colorPrimary
    }
  }), _defineProperty(_extends2, '&-show-line', (_showLine = {}, _defineProperty(_showLine, treeCls + "-indent", {
    '&-unit': {
      position: 'relative',
      height: '100%',
      '&:before': {
        position: 'absolute',
        top: 0,
        insetInlineEnd: treeTitleHeight / 2,
        bottom: -treeNodePadding,
        borderInlineEnd: "1px solid " + token.colorBorder,
        content: '""'
      },
      '&-end': {
        '&:before': {
          display: 'none'
        }
      }
    }
  }), _defineProperty(_showLine, treeCls + "-switcher", {
    background: token.colorBgContainer,
    '&-line-icon': {
      // https://github.com/ant-design/ant-design/issues/32813
      verticalAlign: '-0.15em'
    }
  }), _showLine)), _defineProperty(_extends2, treeNodeCls + "-leaf-last", _defineProperty({}, treeCls + "-switcher", {
    '&-leaf-line': {
      '&:before': {
        top: 'auto !important',
        bottom: 'auto !important',
        height: treeTitleHeight / 2 + "px !important"
      }
    }
  })), _extends2)));
};
// ============================ Directory =============================
export var genDirectoryStyle = function genDirectoryStyle(token) {
  var _selected, _treeNodeCls;
  var treeCls = token.treeCls,
    treeNodeCls = token.treeNodeCls,
    treeNodePadding = token.treeNodePadding;
  return _defineProperty({}, "" + treeCls + treeCls + "-directory", _defineProperty({}, treeNodeCls, (_treeNodeCls = {
    position: 'relative',
    // Hover color
    '&:before': {
      position: 'absolute',
      top: 0,
      insetInlineEnd: 0,
      bottom: treeNodePadding,
      insetInlineStart: 0,
      transition: "background-color " + token.motionDurationMid,
      content: '""',
      pointerEvents: 'none'
    },
    '&:hover': {
      '&:before': {
        background: token.controlItemBgHover
      }
    },
    // Elements
    '> *': {
      zIndex: 1
    }
  }, _defineProperty(_treeNodeCls, treeCls + "-switcher", {
    transition: "color " + token.motionDurationMid
  }), _defineProperty(_treeNodeCls, treeCls + "-node-content-wrapper", _defineProperty({
    borderRadius: 0,
    userSelect: 'none',
    '&:hover': {
      background: 'transparent'
    }
  }, "&" + treeCls + "-node-selected", {
    color: token.colorTextLightSolid,
    background: 'transparent'
  })), _defineProperty(_treeNodeCls, '&-selected', (_selected = {}, _defineProperty(_selected, "\n            &:hover::before,\n            &::before\n          ", {
    background: token.colorPrimary
  }), _defineProperty(_selected, treeCls + "-switcher", {
    color: token.colorTextLightSolid
  }), _defineProperty(_selected, treeCls + "-node-content-wrapper", {
    color: token.colorTextLightSolid,
    background: 'transparent'
  }), _selected)), _treeNodeCls)));
};
// ============================== Merged ==============================
export var genTreeStyle = function genTreeStyle(prefixCls, token) {
  var treeCls = "." + prefixCls;
  var treeNodeCls = treeCls + "-treenode";
  var treeNodePadding = token.paddingXS / 2;
  var treeTitleHeight = token.controlHeightSM;
  var treeToken = mergeToken(token, {
    treeCls: treeCls,
    treeNodeCls: treeNodeCls,
    treeNodePadding: treeNodePadding,
    treeTitleHeight: treeTitleHeight
  });
  return [
  // Basic
  genBaseStyle(prefixCls, treeToken),
  // Directory
  genDirectoryStyle(treeToken)];
};
// ============================== Export ==============================
export default genComponentStyleHook('Tree', function (token, _ref14) {
  var prefixCls = _ref14.prefixCls;
  return [_defineProperty({}, token.componentCls, getCheckboxStyle(prefixCls + "-checkbox", token)), genTreeStyle(prefixCls, token), genCollapseMotion(token)];
});