"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadImg = exports.sys_hot_data = exports.sys_home_data = exports.Login = void 0;

var _config = require("./config");

var Login = function Login(data) {
  return (0, _config.post)('/admin/Login/login', data);
}; //登录


exports.Login = Login;

var sys_home_data = function sys_home_data(data) {
  return (0, _config.get)('/admin/Clinic/sys_home_data', data);
}; //首页数据


exports.sys_home_data = sys_home_data;

var sys_hot_data = function sys_hot_data(data) {
  return (0, _config.get)('/admin/Clinic/sys_hot_data', data);
}; //首页数据


exports.sys_hot_data = sys_hot_data;

var uploadImg = function uploadImg(data) {
  return (0, _config.post)('/admin/Clinic/uploadImg', data);
}; //上传图片


exports.uploadImg = uploadImg;