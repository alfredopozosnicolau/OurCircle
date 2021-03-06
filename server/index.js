/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const consumerRouter = require('./routes/consumer-router');
const businessRouter = require('./routes/business-router');

const app = express();
const apiPort = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', consumerRouter);
app.use('/api', businessRouter);

app.listen(apiPort, () => {
  console.log(`[Hack.Diversity React Template] - Server running on port ${apiPort}`);
});
