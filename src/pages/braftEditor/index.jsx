import React from 'react'
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

export default () => {

  // 制定字体类型
  const fontFamily = [{
    name: "MiLanPro",
    family: "MiLanPro",
  }, {
    name: "微软雅黑",
    family: '"微软雅黑",Microsoft YaHei',
  }, {
    name: "宋体",
    family: '"宋体",sans-serif'
  }, {
    name: 'Araial',
    family: 'Arial, Helvetica, sans-serif'
  }, {
    name: '黑体',
    family: '"黑体",serif'
  }, {
    name: '楷体',
    family: '"楷体", KaiTi'
  }, {
    name: '幼圆',
    family: 'YouYuan'
  }];
  // 制定字体颜色
  const colors = ['#000000', '#ffffff', '#ff0000', '#ed6f2d', '#0000ff', '#666666', '#4183c4', '#1890ff'];
  const controls = [
    'undo', 'redo', 'remove-styles', 'hr', 'bold', 'italic', 'letter-spacing', 'text-color', 'font-size',
    'font-family', 'line-height', 'headings', 'underline', 'strike-through', 'superscript', 'subscript', 'blockquote',
    'code', 'list-ul', 'list-ol', 'link', 'letter-spacing', 'text-indent',
    'text-align', 'table', 'media', 'clear', 'fullscreen', 'text-background-color',
  ];
  const extendControls = [
    {
      key: 'preview-button',
      type: 'button',
      text: '预览',
      onClick: ()=>{alert(12);}
    }
  ];
  return (
    <div>
      braft Editor
      <BraftEditor
        id="editor-id-1"
        extendControls={extendControls}
        fontFamilies={fontFamily}
        controls={controls}
        colors={colors}
        // media={{ uploadFn: myUploadFn, validateFn: myValidateFn }}
        // value={editorState}
        // onChange={handleChange}
      />
    </div>
  );
}