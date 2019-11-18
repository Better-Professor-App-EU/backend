const server = require('./api/server');

const PORT = process.env.PORT; 
// ^This is set in Heroku for DB_ENV === "production"!

server.listen(PORT, () => {
  console.log(`\n* Server listening on port ${PORT} *\n`);
})
