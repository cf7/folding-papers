import React from 'react';
import ReactDOM from 'react-dom';
import ReactQuill, { Quill } from 'react-quill';
import ColorPicker from './color';

function pickColor (event) {
  console.log(event.target);
  // access ColorPicker
}
/*
 * Custom toolbar component including ColorPicker button
 */
const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-color">
      <ColorPicker />
    </button>
  </div>
);

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    // let Color = Quill.import('formats/color');
    // // TODO: import color picker as react component
    // // find way to swap out color picker on quill toolbar
    // Quill.register(Color);

    let toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']                                         // remove formatting button
    ];
    this.modules = {
      toolbar: {
        container: "#toolbar",
        handlers: {
          "color": pickColor,
        }
      }
    };
    this.formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ];
  }

  render() {
    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
            modules={this.modules}
            formats={this.formats} />
      </div>
    );
  }
}