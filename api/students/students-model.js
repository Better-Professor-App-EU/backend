const db = require('../../config/db-config');

module.exports = {
  find,
  findById,
  findProjectsById,
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

function findProjectsById(id) {
  return db('Projects AS p')
    .join('Students&Projects AS s&p', 's&p.project_id', 'p.id')
    .join('Students AS s', 's.id', 's&p.student_id')
    .where({ 's.id': id })
    .select('p.id AS project_id', 'p.name');
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