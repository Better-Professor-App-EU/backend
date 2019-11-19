const db = require('../../config/db-config');

module.exports = {
  find,
  findById,
  findByUserId,
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

function findByUserId(user_id) {
  return db('Messages')
    .where({ user_id })
    .select('student_id', 'text', 'send_to_self', 'timestamp');
}

async function add(message) {
  const timestamp = JSON.stringify(new Date());
  const [id] = await db('Messages').insert({ ...message, timestamp }, 'id');

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