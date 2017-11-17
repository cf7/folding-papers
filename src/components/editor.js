import React from 'react';
import ReactDOM from 'react-dom';
import Quill from 'react-quill';

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']                                         // remove formatting button
    ];
    this.modules = {
      toolbar: toolbarOptions,
    };
    this.formats = [

    ];
  }

  render() {
    return (
      <div className="text-editor">
        <Quill
            modules={this.modules} />
      </div>
    );
  }
}