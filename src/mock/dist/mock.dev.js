"use strict";

// 引入mockjs
var Mock = require('mockjs'); // 登录


Mock.mock('/admin/Login/login', 'post', function (data) {
  var params = data.body.split('&');
  var info = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var iter = _step.value;
      info.push(iter.split('='));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (info[1][1] == 'admin' && info[0][1] == '123456') return {
    code: 1,
    data: {
      userid: 7
    },
    msg: '登录成功'
  };else return {
    code: -1,
    msg: '账号密码错误'
  };
}); //首页数据

Mock.mock('/admin/Clinic/sys_home_data', 'get', function () {
  return {
    info: {
      data: {
        user_num: '1',
        clinic_num: '10',
        sao_num: '15',
        visit_num: '5'
      }
    }
  };
});
Mock.mock('/admin/Clinic/sys_hot_data', 'get', function () {
  return {
    info: {
      data: [{
        nums: 4,
        province: "四川",
        ratio: "2.60"
      }, {
        nums: 4,
        province: "上海",
        ratio: "2.60"
      }, {
        nums: 1,
        province: "重庆",
        ratio: "0.65"
      }, {
        nums: 1,
        province: "江苏",
        ratio: "0.65"
      }, {
        nums: 1,
        province: "河北",
        ratio: "0.65"
      }]
    }
  };
}); //上传图片

Mock.mock('/admin/Clinic/uploadImg', 'post', function () {
  return {
    info: {
      data: {
        url: 'https://img2.baidu.com/it/u=2951542358,3634590085&fm=11&fmt=auto&gp=0.jpg'
      }
    }
  };
});