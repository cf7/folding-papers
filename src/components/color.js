import React from 'react';
import ReactDOM from 'react-dom';
import NativeListener from 'react-native-listener';
import { SketchPicker } from 'react-color';

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  handleClick(event) { // for outside clicks and presetColors
    // event is browser native event now b/c of NativeListener
    console.log(event.target.title);
    if (event.target.title) { // only presetColor divs have title attributes
      this.setState({
        color: event.target.title // where the presetColor is stored
      });
      this.props.colorChange(this.state.color);
    }
    event.stopPropagation();
  }

  handleChangeComplete(color) {
    this.setState({
      color: color.hex
    });
    this.props.colorChange(this.state.color);
  }

  render() {
    return (
      <NativeListener onClick={this.handleClick}>
        <SketchPicker
              color={this.state.color}
              onChangeComplete={this.handleChangeComplete} />
      </NativeListener>
    );
  }
}

