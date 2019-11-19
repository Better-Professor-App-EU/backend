module.exports = {
  logger,
  authenticate
}

function logger(req, res, next) {
  console.log(req.method, req.url, Date());
  next();
}

const jwt = require('jsonwebtoken');
function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(
      token,
      process.env.SECRET,
      (err, decodedToken) => {
        if (err) {
          res.status(401).json({
            message: err.message
          });
        } else {
          req.decodedToken = decodedToken;
          next();
        }
      }
    );
  } else {
    res.status(401).json({
      message: 'Invalid credentials. Please provide a valid token.',
     });
  }
}