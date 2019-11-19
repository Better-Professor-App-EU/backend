
exports.seed = function(knex) {
  return knex('Students').insert([
    {name: 'Mickey The Drink'},
    {name: 'Steve Bytheway'},
    {name: 'Harry Harriman'},
    {name: 'Gary Cheeseman'},
    {name: 'Neil Overall'},
    {name: 'Gary Dungaree'},
    {name: 'John Caramel'},
    {name: 'Ron Waffle'}
  ]);
};
