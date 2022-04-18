const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { port } = require('./config');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`);
});
