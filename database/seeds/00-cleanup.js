const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return knex('Messages').truncate()
    .then(() => {
      return knex('ProjectsToDeadlines').truncate()
        .then(() => {
          return knex('Students&Projects').truncate()
            .then(() => {
              return knex('Users&Students').truncate()
                .then(() => {
                  return cleaner.clean(knex, {
                    mode: 'truncate',
                    restartIdentity: true, // Used to tell PostgresSQL to reset the ID counter
                    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
                  });
                });
            });
        });
    });
};