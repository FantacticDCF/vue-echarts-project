"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseTime = parseTime;
exports.handleCreateDatePicker = exports.handleCrateDate = exports.getDaysInMonth = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// 获取该月的天数
var getDaysInMonth = function getDaysInMonth(year, month) {
  var day = new Date(year, month + 1, 0);
  return day.getDate();
}; // 创建日期 yyyy-MM-dd 格式， 用于创建非当前月的日期


exports.getDaysInMonth = getDaysInMonth;

var handleCrateDate = function handleCrateDate(year, month, start, end, type) {
  var arr = [];

  if (type === 'prev') {
    // 上一月
    if (start === end) return [];
    var daysInLastMonth = getDaysInMonth(year, month - 1); // 获取上一个月有多少天

    console.log("\u5F53\u524D\u6708\u662F".concat(month + 1, "\u6708, \u4E0A\u4E00\u6708").concat(month, "\u6708\u7684\u5929\u6570\u662F").concat(daysInLastMonth, "\u5929"));

    for (var i = daysInLastMonth - end + 2; i <= daysInLastMonth; i++) {
      arr.push({
        // date: `${month === 0 ? year - 1 : year}-${(month + 1) < 10 ? month === 0 ? 12 : `0${month}` : month}-${i < 10 ? `0${i}` : i}`,
        date: parseTime(new Date(year, month - 1, i)),
        isCurMonth: false,
        isSelected: false,
        isRangeSelected: false
      });
    }
  } else if (type === 'rear') {
    // 下一月
    for (var _i = start; _i <= end; _i++) {
      arr.push({
        // date: `${month === 11 ? year + 1 : year}-${(month + 1) < 9 ? `0${month + 2}` : month + 2 <= 12 ? month + 2 : (month + 2) % 12 < 10 ? `0${(month + 2) % 12}` : (month + 2) % 12}-${i < 10 ? `0${i}` : i}`,
        date: parseTime(new Date(year, month + 1, _i)),
        isCurMonth: false,
        isSelected: false,
        isRangeSelected: false
      });
    }
  } else {
    // 本月
    for (var _i2 = start; _i2 <= end; _i2++) {
      arr.push({
        // date: `${year}-${(month + 1) < 10 ? `0${month + 1}` : month + 1}-${i < 10 ? `0${i}` : i}`,
        date: parseTime(new Date(year, month, _i2)),
        isCurMonth: true,
        isSelected: false,
        isRangeSelected: false
      });
    }
  } // console.log(arr)


  return arr;
};

exports.handleCrateDate = handleCrateDate;

var handleCreateDatePicker = function handleCreateDatePicker() {
  var years = [];
  var months = [];

  for (var i = 1970; i <= 2099; i++) {
    years.push({
      label: "".concat(i, "\u5E74"),
      value: i
    });
  }

  for (var _i3 = 0; _i3 <= 11; _i3++) {
    months.push({
      label: "".concat(_i3 + 1, "\u6708"),
      value: _i3
    });
  }

  return {
    years: years,
    months: months
  };
};
/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */


exports.handleCreateDatePicker = handleCreateDatePicker;

function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null;
  }

  var format = cFormat || '{y}-{m}-{d}';
  var date;

  if (_typeof(time) === 'object') {
    date = time;
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/');
      }
    }

    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }

    date = new Date(time);
  }

  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  var time_str = format.replace(/{([ymdhisa])+}/g, function (result, key) {
    var value = formatObj[key]; // Note: getDay() returns 0 on Sunday

    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }

    return value.toString().padStart(2, '0');
  });
  return time_str;
}