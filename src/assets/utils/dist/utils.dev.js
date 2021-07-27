"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _viewDesign = require("view-design");

var _default = {
  /**
   * 图片限制2M
   * @param file
   * @returns {boolean}
   * @constructor
   */
  Imglimit: function Imglimit(file) {
    if (file.size < 1024 * 2 * 1024) {
      return true;
    } else {
      _viewDesign.Message['warning']({
        content: '文件  ' + file.name + ' 体积过大, 最大不能超过2M.',
        duration: 5
      });

      return false;
    }
  },

  /**
   * 视频限制30M，30s
   * @param file
   * @returns {boolean}
   */
  videoSize: function videoSize(file) {
    // let url = URL.createObjectURL(file);
    // let audioElement = new Audio(url);
    // audioElement.addEventListener("loadedmetadata", function () {
    //   let duration = audioElement.duration; //时长为秒，小数，182.36
    //   // 视频小于30s
    //   if (duration > 30) {
    //     Message['warning']({
    //       content: '视频  ' + file.name + ' 时间过长, 最大不能超过30秒.',
    //     });
    //     return false;
    //   }else {
    //     // 视频大小
    //     if (file.size < 1024 * 30 * 1024) {
    //       return true;
    //     } else {
    //       Message['warning']({
    //         content: '文件  ' + file.name + ' 体积过大, 最大不能超过30M.',
    //         duration: 5,
    //       });
    //       return false;
    //     }
    //   }
    // });
    // 视频大小
    if (file.size < 1024 * 30 * 1024) {
      return true;
    } else {
      _viewDesign.Message['warning']({
        content: '文件  ' + file.name + ' 体积过大, 最大不能超过30M.',
        duration: 5
      });

      return false;
    }
  },

  /**
   * 检索数据是否填写
   * @param data 数据{}
   * @param arr 检索对象[]
   * @returns {boolean}
   */
  objCheck: function objCheck(data, arr) {
    for (var key in data) {
      if (data[key] === '') {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (key === item.title) {
              _viewDesign.Message['warning']({
                content: item.tip + '数据不能为空',
                duration: 5
              });

              return false;
            }
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

        return true;
      }
    }
  },
  copy: function copy(text) {
    var input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);

    _viewDesign.Message['success']({
      content: '复制成功',
      duration: 5
    });
  },
  // 复制方法
  download: function download(code_img) {
    location.href = imgpath + '/home/wx/downfile?filename=' + imgpath + code_img;
  }
};
exports["default"] = _default;