const express = require('express');

const Users = require('./users-model');
const { genericError } = require('../helpers/helpers');

const router = express.Router();

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      if (users && users.length) {
        res.status(200).json(users);
      } else {
        res.status(401).json({
          message: 'There are no users in the database.'
        });
      }
    })
    .catch(err => genericError(err, req, res));
});

module.exports = router;
