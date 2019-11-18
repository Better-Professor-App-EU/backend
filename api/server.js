require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const { logger } = require('./helpers/middleware');
const usersRouter = require('./users/users-router');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', logger);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send("<h2>We're in business!<h2>");
});

module.exports = server;
