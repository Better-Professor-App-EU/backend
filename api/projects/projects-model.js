const db = require('../../config/db-config');

module.exports = {
  find,
  findById,
  add,
  remove
}

function find() {
  return db('Projects');
}

function findById(id) {
  return db('Projects')
    .where({ id })
    .first();
}

async function add(project) {
  const [id] = await db('Projects').insert(project, 'id');

  return db('Projects')
    .where({ id })
    .first();
}

async function remove(id) {
  const project = await findById(id);

  db('Projects')
    .where({ id })
    .del();

  return project;
}