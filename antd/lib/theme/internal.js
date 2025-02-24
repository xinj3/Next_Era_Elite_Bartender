"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DesignTokenContext = void 0;
Object.defineProperty(exports, "PresetColors", {
  enumerable: true,
  get: function get() {
    return _interface.PresetColors;
  }
});
exports.defaultConfig = void 0;
Object.defineProperty(exports, "genComponentStyleHook", {
  enumerable: true,
  get: function get() {
    return _genComponentStyleHook["default"];
  }
});
Object.defineProperty(exports, "mergeToken", {
  enumerable: true,
  get: function get() {
    return _statistic.merge;
  }
});
Object.defineProperty(exports, "statistic", {
  enumerable: true,
  get: function get() {
    return _statistic.statistic;
  }
});
Object.defineProperty(exports, "statisticToken", {
  enumerable: true,
  get: function get() {
    return _statistic["default"];
  }
});
Object.defineProperty(exports, "useStyleRegister", {
  enumerable: true,
  get: function get() {
    return _cssinjs.useStyleRegister;
  }
});
exports.useToken = useToken;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _cssinjs = require("@ant-design/cssinjs");
var _react = _interopRequireDefault(require("react"));
var _version = _interopRequireDefault(require("../version"));
var _interface = require("./interface");
var _default = _interopRequireDefault(require("./themes/default"));
var _seed = _interopRequireDefault(require("./themes/seed"));
var _alias = _interopRequireDefault(require("./util/alias"));
var _genComponentStyleHook = _interopRequireDefault(require("./util/genComponentStyleHook"));
var _statistic = _interopRequireWildcard(require("./util/statistic"));
var defaultTheme = (0, _cssinjs.createTheme)(_default["default"]);
// ================================ Context =================================
// To ensure snapshot stable. We disable hashed in test env.
var defaultConfig = {
  token: _seed["default"],
  hashed: true
};
exports.defaultConfig = defaultConfig;
var DesignTokenContext = /*#__PURE__*/_react["default"].createContext(defaultConfig);
// ================================== Hook ==================================
// In dev env, we refresh salt per hour to avoid user use this
// Note: Do not modify this to real time update which will make debug harder
exports.DesignTokenContext = DesignTokenContext;
var saltPrefix = process.env.NODE_ENV === 'production' ? _version["default"] : _version["default"] + "-" + new Date().getHours();
function useToken() {
  var _React$useContext = _react["default"].useContext(DesignTokenContext),
    rootDesignToken = _React$useContext.token,
    hashed = _React$useContext.hashed,
    theme = _React$useContext.theme,
    components = _React$useContext.components;
  var salt = saltPrefix + "-" + (hashed || '');
  var mergedTheme = theme || defaultTheme;
  var _useCacheToken = (0, _cssinjs.useCacheToken)(mergedTheme, [_seed["default"], rootDesignToken], {
      salt: salt,
      override: (0, _extends2["default"])({
        override: rootDesignToken
      }, components),
      formatToken: _alias["default"]
    }),
    _useCacheToken2 = (0, _slicedToArray2["default"])(_useCacheToken, 2),
    token = _useCacheToken2[0],
    hashId = _useCacheToken2[1];
  return [mergedTheme, token, hashed ? hashId : ''];
}