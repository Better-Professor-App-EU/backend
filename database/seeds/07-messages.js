
exports.seed = function(knex) {
  return knex('Messages').insert([
    {id: 1, user_id: 1, student_id: 1, text: "TEST. TEST! DO YOU READ ME? TEST.", send_to_self: '1', timestamp: JSON.stringify(new Date())},
    {id: 2, user_id: 1, student_id: 2, text: "Roger roger.", send_to_self: '0', timestamp: JSON.stringify(new Date())},
    {id: 3, user_id: 1, student_id: 3, text: "Do you copy? OVER.", send_to_self: '0', timestamp: JSON.stringify(new Date())},
    {id: 4, user_id: 1, student_id: 4, text: "Anyone there?", send_to_self: '1', timestamp: JSON.stringify(new Date())},
    {id: 5, user_id: 2, student_id: 3, text: "'Sup?", send_to_self: '0', timestamp: JSON.stringify(new Date())},
    {id: 6, user_id: 2, student_id: 4, text: "Sooo...", send_to_self: '0', timestamp: JSON.stringify(new Date())},
    {id: 7, user_id: 2, student_id: 5, text: "Yooooooo!", send_to_self: '0', timestamp: JSON.stringify(new Date())},
    {id: 8, user_id: 2, student_id: null, text: "Echooo echo echo...", send_to_self: '1', timestamp: JSON.stringify(new Date())},
    {id: 9, user_id: 3, student_id: 7, text: "Hello? Please respond.", send_to_self: '0', timestamp: JSON.stringify(new Date())},
    {id: 10, user_id: 3, student_id: 8, text: "URGENT ACTION REQUIRED!!!", send_to_self: '0', timestamp: JSON.stringify(new Date())},
    {id: 11, user_id: 3, student_id: 8, text: "Scratch that. All good!", send_to_self: '0', timestamp: JSON.stringify(new Date())}
  ]);
};
