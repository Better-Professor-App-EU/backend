module.exports = {
  genericError,
  generateToken
}

function genericError(err, req, res) {
  res.status(500).json({
    message: `Failed to ${req.method} ${req.originalUrl} --> ${err.message}`
  });
}

const jwt = require('jsonwebtoken');
function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
  };

  const option = {
    expiresIn: '1d',
  }

  const result = jwt.sign(
    payload,
    process.env.SECRET,
    option,
  );
  
  return result;
}