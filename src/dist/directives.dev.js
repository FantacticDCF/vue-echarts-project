"use strict";

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].directive("copy", {
  bind: function bind(el, binding) {
    // 双击触发复制
    if (binding.modifiers.dblclick) {
      el.addEventListener('dblclick', function () {
        return handleClick(el.innerText);
      });
      el.style.cursor = 'copy';
    } // 点击icon触发复制
    else if (binding.modifiers.icon) {
        if (el.hasIcon) return;
        var iconElement = document.createElement('i');
        iconElement.setAttribute('class', 'el-icon-document-copy');
        iconElement.setAttribute('style', 'margin-left:5px');
        el.appendChild(iconElement);
        el.hasIcon = true;
        iconElement.addEventListener('click', function () {
          return handleClick(el.innerText);
        });
        iconElement.style.cursor = 'copy';
      } // 单击触发复制
      else {
          el.addEventListener('click', function () {
            return handleClick(el.innerText);
          });
          el.style.cursor = 'copy';
        }
  }
});

function handleClick(text) {
  // 创建元素
  if (!document.getElementById('copyTarget')) {
    var copyTarget = document.createElement('input');
    copyTarget.setAttribute('style', 'position:fixed;top:0;left:0;opacity:0;z-index:-1000;');
    copyTarget.setAttribute('id', 'copyTarget');
    document.body.appendChild(copyTarget);
  } // 复制内容


  var input = document.getElementById('copyTarget');
  input.value = text;
  input.select();
  document.execCommand('copy');
  alert('复制成功');
}