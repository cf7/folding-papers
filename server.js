const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const tmp = require('tmp');
const fs = require('fs-extra');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/upload', (request, response) => {
  // TODO: make temp directory
  tmp.file({ dir: './uploads/', postfix: '.pdf' }, (error, filename, fd, cleanupCallback) => {
    if (error) {
      throw error;
    }
    console.log(request.body.data);
    console.log('******File: ', filename);
    console.log('Filedescriptor: ', fd);
    fs.outputFile(filename, request.body.data)
    .then(() => {
      response.status(200).send("Success!");
    })
    .catch((error) => {
      response.status(400).send(error);
    });
    
    cleanupCallback();
  });

});

app.get('*', (req, res) => {
  res.status(200).send({ message: 'Error page (node server)' });
});

const port = parseInt(process.env.PORT, 10) || 8080;
app.set('port', port);
app.listen(port, () => {
  console.log(`The server is running at localhost:${port}`);
});
