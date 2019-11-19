const express = require('express');

const Messages = require('./messages-model');
const { genericError } = require('../helpers/helpers');

const router = express.Router();

router.get('/', (req, res) => {
  Messages.find()
    .then(messages => {
      if (messages && messages.length > 0) {
        res.status(200).json(messages);
      } else {
        res.status(401).json({
          message: 'There are no messages in the database.'
        });
      }
    })
    .catch(err => genericError(err, req, res));
});

module.exports = router;