const express = require('express');

const Messages = require('./messages-model');
const { genericError } = require('../helpers/helpers');

const router = express.Router();

router.get('/', (req, res) => {
  const user_id = req.decodedToken.sub;

  Messages.findByUserId(user_id)
    .then(messages => {
      if (messages && messages.length > 0) {
        const messagesToSend = messages.map(message => {
          return { ...message, send_to_self: message.send_to_self == true }
        });
        res.status(200).json(messagesToSend);
      } else {
        res.status(401).json({
          message: 'There are no messages in the database.'
        });
      }
    })
    .catch(err => genericError(err, req, res));
});

router.post('/', (req, res) => {
  const user_id = req.decodedToken.sub;
  const { student_id, text, send_to_self } = req.body;

  if (student_id === null && !send_to_self) {
    res.status(400).json({
      message: 'Poorly formed request body: at least one of student_id and send_to_self must be truthy.',
    });
  } else {
    Messages.add({ user_id, student_id, text, send_to_self: send_to_self == true })
      .then(message => {
        res.status(201).json({
          message: 'Successfully created message.',
          new_message: message,
        });
      })
      .catch(err => genericError(err, req, res));
  }
});

module.exports = router;