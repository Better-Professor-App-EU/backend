const db = require('../../config/db-config');

module.exports = {
  find,
  findById,
  add,
  remove
}

function find() {
  return db('users');
}


function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db('users').insert(user, 'id');

  return db('users')
    .where({ id })
    .first();
}

async function remove(id) {
  const quote = await findById(id);

  db('users')
    .where({ id })
    .del();

  return quote;
}