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

  handleClick(event) {
    // event is browser native event now b/c of NativeListener
    event.stopPropagation();
  }

  handleChangeComplete(color) {
    this.setState({
      color: color.hex
    });
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

