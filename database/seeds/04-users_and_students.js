
exports.seed = function(knex) {
  return knex('Users&Students').insert([
    {user_id: 1, student_id: 1},
    {user_id: 1, student_id: 2},
    {user_id: 1, student_id: 3},
    {user_id: 1, student_id: 4},
    {user_id: 2, student_id: 3},
    {user_id: 2, student_id: 4},
    {user_id: 2, student_id: 5},
    {user_id: 2, student_id: 6},
    {user_id: 3, student_id: 7},
    {user_id: 3, student_id: 8},
  ]);
};
