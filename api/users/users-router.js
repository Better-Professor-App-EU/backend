const express = require('express');

const Users = require('./users-model');
const { genericError } = require('../helpers/helpers');

const router = express.Router();

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => genericError(err, req, res));
});

module.exports = router;
