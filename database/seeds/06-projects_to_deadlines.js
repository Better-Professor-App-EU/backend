
exports.seed = function(knex) {
      return knex('ProjectsToDeadlines').insert([
        {project_id: 1, deadline_type: 'draft', deadline: JSON.stringify(new Date('2019-11-30'))},
        {project_id: 1, deadline_type: 'redraft', deadline: JSON.stringify(new Date('2020-01-05'))},
        {project_id: 1, deadline_type: 'final', deadline: JSON.stringify(new Date('2020-02-25'))},
        {project_id: 2, deadline_type: 'final', deadline: JSON.stringify(new Date('2019-12-01'))},
        {project_id: 3, deadline_type: 'provisional', deadline: JSON.stringify(new Date('2020-03-01'))},
        {project_id: 4, deadline_type: 'draft', deadline: JSON.stringify(new Date('2019-11-20'))},
        {project_id: 4, deadline_type: 'send by', deadline: JSON.stringify(new Date('2019-11-22'))},
        {project_id: 5, deadline_type: 'latest by', deadline: JSON.stringify(new Date('2019-11-20'))},
        {project_id: 6, deadline_type: 'latest', deadline: JSON.stringify(new Date('2019-12-31'))},
      ]);
};
