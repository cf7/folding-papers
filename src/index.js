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
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('folding-papers-display')
);

