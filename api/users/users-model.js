const db = require('../../config/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove
}

async function add(user) {
  const [id] = await db('Users').insert(user, 'id');

  return db('Users')
    .where({ id })
    .first();
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

async function remove(id) {
  const user = await findById(id);

  await db('Users')
    .where({ id })
    .del();

  return user;
}