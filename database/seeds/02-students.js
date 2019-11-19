
exports.seed = function(knex) {
      return knex('Students').insert([
        {id: 1, name: 'Mickey The Drink'},
        {id: 2, name: 'Steve Bytheway'},
        {id: 3, name: 'Harry Harriman'},
        {id: 4, name: 'Gary Cheeseman'},
        {id: 5, name: 'Neil Overall'},
        {id: 6, name: 'Gary Dungaree'},
        {id: 7, name: 'John Caramel'},
        {id: 8, name: 'Ron Waffle'}
      ]);
};
