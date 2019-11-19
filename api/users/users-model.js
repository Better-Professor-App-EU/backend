const db = require('../../config/db-config');

module.exports = {
  find,
  findById,
  add,
  remove
}

function find() {
  return db('Users');
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
  const quote = await findById(id);

  db('Users')
    .where({ id })
    .del();

  return quote;
}