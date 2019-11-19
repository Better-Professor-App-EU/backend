
exports.seed = function(knex) {
  return knex('Projects').insert([
    {name: 'Letter of Recommendation'},
    {name: 'Feedback on Popper Essay'},
    {name: 'Project Feedback'},
    {name: 'Email'},
    {name: 'Give Stern Talking To'},
    {name: 'Notify of Department Prize Nomination'}
  ]);
};
