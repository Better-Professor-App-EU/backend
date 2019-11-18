const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('Users').truncate()
    .then(function () {
      return knex('Users').insert([
        {id: 1, username: 'admin', password: bcrypt.hashSync("1234")},
        {id: 2, username: 'admin1', password: bcrypt.hashSync("12345")},
        {id: 3, username: 'admin2', password: bcrypt.hashSync("12346")}
      ]);
    });
};
