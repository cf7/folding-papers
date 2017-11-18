import React from 'react';
import ReactDOM from 'react-dom';
import ReactQuill, { Quill } from 'react-quill';
import CustomToolbar from './toolbar';

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