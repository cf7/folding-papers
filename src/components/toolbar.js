import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './color';

export default class CustomToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      selectedColor: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleClick(event) {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker,
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

  handleColorChange(color) {
    this.setState({
      selectedColor: color
    });
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
        <style jsx global>{`
          #toolbar > button.ql-color > svg > .ql-stroke {
            opacity: 1;
            stroke: ${this.state.selectedColor};
          }
        `}</style>
        <button className="ql-color" onClick={this.handleClick}>
          { this.state.displayColorPicker ?
            <div ref={this.setWrapperRef}>
              <ColorPicker colorChange={this.handleColorChange} />
            </div>
            : null }
        </button>
      </div>
    );
  }
}