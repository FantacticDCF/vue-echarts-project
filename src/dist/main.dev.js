"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _axios = _interopRequireDefault(require("axios"));

var _viewDesign = _interopRequireDefault(require("view-design"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("../node_modules/element-ui/lib/theme-chalk/index.css");

require("view-design/dist/styles/iview.css");

var echarts = _interopRequireWildcard(require("echarts"));

var _vueQuillEditor = _interopRequireDefault(require("vue-quill-editor"));

require("quill/dist/quill.core.css");

require("quill/dist/quill.snow.css");

require("quill/dist/quill.bubble.css");

var _Base = _interopRequireDefault(require("./assets/utils/Base64"));

require("./mock/mock");

var _observer = _interopRequireDefault(require("./assets/utils/observer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import './views/publics/bigData/static/js/flexible'
_vue["default"].prototype.Observer = _observer["default"];
_vue["default"].prototype.$Base64 = _Base["default"];

_vue["default"].use(_vueQuillEditor["default"]);

_vue["default"].prototype.$echarts = echarts;
_vue["default"].prototype.$axios = _axios["default"];
_vue["default"].config.productionTip = false;

_vue["default"].use(_viewDesign["default"]);

_vue["default"].use(_elementUi["default"]);

_vue["default"].prototype.avatar = 'this.src="' + require('@/assets/images/avatar.jpg') + '"';
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');