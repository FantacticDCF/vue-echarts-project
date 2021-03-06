"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// toolbar工具栏的工具选项（默认展示全部）
var toolOptions = [['image', 'bold', 'italic', 'underline', 'link'], ['bold', 'italic', 'underline', 'strike'], // toggled buttons
['blockquote', 'code-block'], [{
  'header': 1
}, {
  'header': 2
}], // custom button values
[{
  'list': 'ordered'
}, {
  'list': 'bullet'
}], [{
  'script': 'sub'
}, {
  'script': 'super'
}], // superscript/subscript
[{
  'indent': '-1'
}, {
  'indent': '+1'
}], // outdent/indent
[{
  'direction': 'rtl'
}], // text direction
[{
  'size': ['small', false, 'large', 'huge']
}], // custom dropdown
[{
  'header': [1, 2, 3, 4, 5, 6, false]
}], [{
  'color': []
}, {
  'background': []
}], // dropdown with defaults from theme
[{
  'font': []
}], [{
  'align': []
}], ['clean']];
var _default = {
  modules: {
    toolbar: {
      container: toolOptions // 工具栏选项

    }
  }
};
exports["default"] = _default;