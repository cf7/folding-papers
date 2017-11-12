import Dropzone from './dropzone';
import Paper from './paper-display';
import FoldedPaper from './folded-paper';

// remember webpack watch to recompile files
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropZoneHidden: false
    };
    // as of ES6 and React 15.5.0, we have to explicitly bind "this" in the constructor
    // so that handler functions have access to it, otherwise "this" is undefined
    // ES6 doesn't bind "this" automatically
    this.exampleHandler = this.exampleHandler.bind(this);
    this.fileLoaded = this.fileLoaded.bind(this);
  }

  exampleHandler(event) {
    // code
  }

  fileLoaded(loaded) {
    alert("Success!");
    this.setState({
      dropZoneHidden: loaded
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          { this.state.dropZoneHidden ? <Paper /> : <Dropzone fileLoaded={this.fileLoaded}/> }
        </div>
        <div className="col-sm-6">
          <FoldedPaper />
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