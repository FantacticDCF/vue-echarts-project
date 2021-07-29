"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;
exports.Uploadpost = Uploadpost;

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

var _index = _interopRequireDefault(require("@/router/index"));

var _viewDesign = require("view-design");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引入axios
// 引入qs模块，用来序列化post类型的数据，后面会提到
// import store from '@/store/index';
// axios.defaults.baseURL = ''
// if (process.env.NODE_ENV == 'development') {
//   //本地(开发)环境
//   axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'production') {
//   //线上（开发）环境
//   axios.defaults.baseURL = '';
// }
_axios["default"].defaults.timeout = 10000;
_axios["default"].defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; // 请求拦截器

_axios["default"].interceptors.request.use(function (config) {
  var userid = sessionStorage.userid;
  userid && (config.headers.userid = userid);

  _viewDesign.Spin.show({
    render: function render(h) {
      return h('div', [h('Icon', {
        'style': 'animation: ani-demo-spin 1s linear infinite;color:#fff',
        props: {
          type: 'ios-loading',
          size: 30
        }
      }), h('div', {
        'style': 'color:#fff'
      }, '加载中...')]);
    }
  });

  return config;
}, function (error) {
  return Promise.error(error);
}); // 响应拦截器


_axios["default"].interceptors.response.use(function (response) {
  if (response.status === 200) {
    _viewDesign.Spin.hide();

    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}, function (error) {
  if (error.response.status) {
    switch (error.response.status) {
      // 401: 未登录
      case 401:
        _index["default"].replace({
          path: '/'
        });

        break;
      // 403 token过期

      case 403:
        _viewDesign.Message['warning']({
          background: true,
          content: '!登录过期，请重新登录'
        }); // // 清除token


        sessionStorage.removeItem('userid');
        setTimeout(function () {
          _index["default"].replace({
            path: '/'
          });
        }, 1000);
        break;
      // 404请求不存在

      case 404:
        _viewDesign.Message['error']({
          background: true,
          content: '!网络请求不存在'
        });

        break;
      // 其他错误，直接抛出错误提示

      default:
        _viewDesign.Message['error']({
          background: true,
          content: error.response.data.message
        });

        break;
    }

    return Promise.reject(error.response);
  }
});
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */


function get(url, params) {
  return new Promise(function (resolve, reject) {
    _axios["default"].get(url, {
      params: params
    }).then(function (res) {
      resolve(res.data);
    })["catch"](function (err) {
      reject(err.data);
    });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */


function post(url, params) {
  return new Promise(function (resolve, reject) {
    _axios["default"].post(url, _qs["default"].stringify(params)).then(function (res) {
      resolve(res.data);
    })["catch"](function (err) {
      reject(err.data);
    });
  });
}

function Uploadpost(url, params) {
  return new Promise(function (resolve, reject) {
    _axios["default"].post(url, params, {
      headers: {
        'Content-Type': 'multipart/form-data;charset=UTF-8'
      }
    }).then(function (res) {
      resolve(res.data);
    })["catch"](function (err) {
      reject(err.data);
    });
  });
}