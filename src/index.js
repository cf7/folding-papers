import FoldedPaper from './folded-paper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  exampleHandler(event) {
    // code
  }

  render() {
    return (
      <div>
        <p>Hello</p>
        <FoldedPaper />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('folding-papers-display')
);

/*
if exporting this app separate from the server,
this file becomes the point of exports
for now it just combines components
*/