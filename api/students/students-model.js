const db = require('../../config/db-config');

module.exports = {
  find,
  findById,
  add,
  remove
}

function find() {
  return db('Students');
}

function findById(id) {
  return db('Students')
    .where({ id })
    .first();
}

async function add(student) {
  const [id] = await db('Students').insert(student, 'id');

  return db('Students')
    .where({ id })
    .first();
}

async function remove(id) {
  const student = await findById(id);

  db('Students')
    .where({ id })
    .del();

  return student;
}