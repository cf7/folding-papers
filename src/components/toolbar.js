import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './color';

export default class CustomToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false
    };

    this.handleColorClick = this.handleColorClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  // TODO: how to close color picker
  handleColorClick(event) {
    console.log(event.target);
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    });
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        displayColorPicker: false
      });
    }
  }

  render() {
    return (
      <div id="toolbar">
        <select className="ql-header">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
        </select>
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-color" onClick={this.handleColorClick}>
          { this.state.displayColorPicker ? <div ref={this.setWrapperRef}><ColorPicker /></div> : null }
        </button>
      </div>
    );
  }
}