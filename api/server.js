require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();
const { logger } = require('./helpers/middleware');
const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');
const studentsRouter = require('./students/students-router');
const projectsRouter = require('./projects/projects-router');
const messagesRouter = require('./messages/messages-router');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', logger);
server.use('/auth', authRouter);
server.use('/users', usersRouter);
server.use('/students', studentsRouter);
server.use('/projects', projectsRouter);
server.use('/messages', messagesRouter);

server.get('/', (req, res) => {
  res.send("<h2>We're in business!<h2>");
});

module.exports = server;
