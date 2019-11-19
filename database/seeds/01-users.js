const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('Users').insert([
    {username: 'admin', password: bcrypt.hashSync("1234")},
    {username: 'admin1', password: bcrypt.hashSync("12345")},
    {username: 'admin2', password: bcrypt.hashSync("12346")}
  ]);
};
