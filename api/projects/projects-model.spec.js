const db = require('../../config/db-config');

const Projects = require('./projects-model');

beforeAll(async () => {
  await db('Students&Projects').truncate();
  await db('Projects').truncate();
});