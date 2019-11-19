const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model');
const { genericError, generateToken } = require('../helpers/helpers');

const router = express.Router();

router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  const userToPost = { ...user, password: hash };

  Users.add(userToPost)
    .then(postedUser => {
      res.status(201).json(postedUser);
    })
    .catch(err => genericError(err, req, res));
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token: token,
        });
      } else if (user) {
        res.status(403).json({
          message: 'Incorrect password.',
        });
      } else {
        res.status(401).json({
          message: 'Invalid credentials.',
        });
      }
    })
    .catch(err => genericError(err, req, res));
})

module.exports = router;