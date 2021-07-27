"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _publics = _interopRequireDefault(require("./publics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_vue["default"].use(_vueRouter["default"]); // 解决重复点击路由报错的BUG


var originalPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};

var routes = _toConsumableArray(_publics["default"]);

var router = new _vueRouter["default"]({
  routes: routes
});
router.beforeEach(function (to, form, netx) {
  var routs = to.path.split('/');
  console.log(routs);
  if (to.path == '/login') sessionStorage.clear();

  if (routs[1] == 'Home') {
    if (to.query.userid != undefined) {
      sessionStorage.setItem('userid', to.query.userid);
      netx();
    } else {
      var userid = sessionStorage.userid;

      if (userid == null || userid == 'undefined') {
        netx('/');
      } else netx();
    }
  } else netx();
});
var _default = router;
exports["default"] = _default;