import React from 'react';
import ReactDOM from 'react-dom';
import { SketchPicker } from 'react-color';

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  handleChangeComplete(color) {
    this.setState({
      color: color.hex
    });
  }
  
  render() {
    return (
        <SketchPicker
              color={this.state.color}
              onChangeComplete={this.handleChangeComplete} />
    );
  }
}

