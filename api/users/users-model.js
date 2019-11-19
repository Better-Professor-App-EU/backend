const db = require('../../config/db-config');

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove
}

function find() {
  return db('Users');
}

function findBy(filter) {
  return db('Users')
    .where(filter)
    .first();
}

function findById(id) {
  return db('Users')
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db('Users').insert(user, 'id');

  return db('Users')
    .where({ id })
    .first();
}

async function remove(id) {
  const user = await findById(id);

  db('Users')
    .where({ id })
    .del();

  return user;
}