const db = require('../../config/db-config');

module.exports = {
  find,
  findById,
  add,
  remove
}

function find() {
  return db('Messages');
}

function findById(id) {
  return db('Messages')
    .where({ id })
    .first();
}

async function add(message) {
  const [id] = await db('Messages').insert(message, 'id');

  return db('Messages')
    .where({ id })
    .first();
}

async function remove(id) {
  const message = await findById(id);

  db('Messages')
    .where({ id })
    .del();

  return message;
}