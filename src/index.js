import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from './components/dropzone';
import Paper from './components/paper';
import FoldedPaper from './components/folded-paper';
import TextArea from 'react-textarea-autosize';
import { StickyContainer, Sticky } from 'react-sticky';
import Editor from './components/editor';

// remember webpack watch to recompile files
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropZoneHidden: true,
      textAreaHidden: false,
      isSticky: true,
    };

    // as of ES6 and React 15.5.0, we have to explicitly bind "this" in the constructor
    // so that handler functions have access to it, otherwise "this" is undefined
    // ES6 doesn't bind "this" automatically
    this.exampleHandler = this.exampleHandler.bind(this);
    this.fileLoaded = this.fileLoaded.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  exampleHandler(event) {
    // code
  }

  fileLoaded(loaded) {
    this.setState({
      dropZoneHidden: loaded
    });
  }

  handleChange(event) {
    if (this.state.textAreaHidden) {
      this.setState({
        dropZoneHidden: true,
        textAreaHidden: false
      });
    } else {
      this.setState({
        dropZoneHidden: false,
        textAreaHidden: true
      });
    }
  }

  render() {
    return (
      <div className="row" style={{ height: 1500 }}>
        <div className="col-sm-6">
          <div className="row">
            <label>
              <input type="checkbox" defaultChecked={!this.state.textAreaHidden} onChange={this.handleChange} />
              Plain text
            </label>
          </div>
          <div className="row">
            { this.state.dropZoneHidden
                ? (this.state.textAreaHidden
                    ? <Paper />
                    : <Editor />)
                : <Dropzone fileLoaded={this.fileLoaded} /> }
          </div>
        </div>

        <div className="col-sm-6">
          <StickyContainer style={{ height: 1500 }}>
            <Sticky disableCompensation>
              {
                ({ }) => { return ( <FoldedPaper /> ) }
              }
            </Sticky>
          </StickyContainer>
        </div>

      </div>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main-display')
);

/*
if exporting this app separate from the server,
this file becomes the point of exports
for now it just combines components
*/

/*
<TextArea
    minRows={10}
    defaultValue="Paste text here . . ."
    onClick={this.handleSelection}/>
*/