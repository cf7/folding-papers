import Zone from 'react-dropzone';
// import highlighter

export default class Dropzone extends React.Component {
  constructor(props) {
    super(props); // props received from index.js
    this.state = {
      files: [],
      loaded: false
    };

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    files.forEach((file) => {
      const filereader = new FileReader();
      // readAsBinaryString sends "load" event
      // passes binarystring content to onload in result object
      filereader.onload = () => {
        const fileAsBinaryString = filereader.result;
        // pass content to state for displaying
        this.props.displayPaper(fileAsBinaryString); // <-- order for these matters
        this.props.fileLoaded(true); // <-- because of async
      };
      filereader.onabort = () => { console.log("file reading aborted"); };
      filereader.onerror = () => { console.log("file reading failed"); };

      filereader.readAsBinaryString(file);
    });

    // this.setState({
    //   files
    // });
  }

  render() {
    return (
      <div>
        <Zone onDrop={this.onDrop}>
          <p>Drag and Drop File Here</p>
        </Zone>
      </div>
    );
  }
}