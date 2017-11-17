import React from 'react';
import ReactDOM from 'react-dom';
export default class Paper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <iframe height={400}
                width={400}
                type={"text/html"}
                src={"pdfjs-1.9.426-dist/web/viewer.html"}> // relative to index.html !!!
          <p>This browser does not support iframes.</p>
        </iframe>
      </div>
    );
  }
}