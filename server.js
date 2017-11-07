const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get('*', (req, res) => res.status(200).send({
  message: 'Hello'
}));

const port = parseInt(process.env.PORT, 10) || 8080;
app.set('port', port);
app.listen(port, () => {
  console.log(`The server is running at localhost:${port}`);
});
