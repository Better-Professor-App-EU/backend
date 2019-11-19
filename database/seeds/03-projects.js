
exports.seed = function(knex) {
  return knex('Projects').insert([
    {id: 1, name: 'Letter of Recommendation'},
    {id: 2, name: 'Feedback on Popper Essay'},
    {id: 3, name: 'Project Feedback'},
    {id: 4, name: 'Email'},
    {id: 5, name: 'Give Stern Talking To'},
    {id: 6, name: 'Notify of Department Prize Nomination'}
  ]);
};
