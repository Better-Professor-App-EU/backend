
exports.seed = function(knex) {
  return knex('Students&Projects').truncate()
    .then(function () {
      return knex('Students&Projects').insert([
        {student_id: 2, project_id: 1},
        {student_id: 2, project_id: 2},
        {student_id: 3, project_id: 2},
        {student_id: 4, project_id: 3},
        {student_id: 5, project_id: 4},
        {student_id: 6, project_id: 5},
        {student_id: 7, project_id: 1},
        {student_id: 7, project_id: 6},
      ]);
    });
};
