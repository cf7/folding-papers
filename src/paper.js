import PDFJS from 'pdfjs-dist';

export default class Paper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paper: this.props.paper,
      // canvasHeight: 0,
      // canvasWidth: 0,
      pageNumber: 1
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    // process paper data

    // webpack default specifies worker file

    // let loadingPDF = PDFJS.getDocument(this.state.paper);
    // // getDocument() needs typeof string or arraybuffer or daterange
    //
    // loadingPDF.promise.then((pdf) => {
    //   console.log("pdf loaded");
    //   // Fetch the first page
    //   let pageNumber = this.state.pageNumber;
    //   pdf.getPage(pageNumber).then((page) => {
    //     console.log('Page loaded');
    //     let scale = 1.5;
    //     let viewport = page.getViewport(scale);
    //     // Prepare canvas using PDF page dimensions
    //     let context = this.refs.canvas.getContext('2d');
    //     this.setState({
    //       canvasHeight: viewport.height,
    //       canvasWidth: viewport.width
    //     });
    //
    //     // instead of rendering, send to imported
    //     // viewer html react component
    //
    //     // Render PDF page into canvas context
    //     let renderContext = {
    //       canvasContext: context,
    //       viewport: viewport
    //     };
    //     let renderTask = page.render(renderContext);
    //     renderTask.then(() => {
    //       console.log('Page rendered');
    //     });
    //   });
    // }, (error) => {
    //   // PDF loading error
    //   console.error(error);
    // });
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" height={this.state.canvasHeight} width={this.state.canvasWidth}></canvas>
      </div>
    );
  }
}