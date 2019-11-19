require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const { logger } = require('./helpers/middleware');
const usersRouter = require('./users/users-router');
const studentsRouter = require('./students/students-router');
const projectsRouter = require('./projects/projects-router');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', logger);
server.use('/users', usersRouter);
server.use('/students', studentsRouter);
server.use('/projects', projectsRouter);

server.get('/', (req, res) => {
  res.send("<h2>We're in business!<h2>");
});

module.exports = server;
