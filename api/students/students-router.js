const express = require('express');

const Students = require('./student-model');

const router = express.Router();

router.get('/', (req, res) => {
  Students.find()
    .then(students => {
      res.status(200).json(students);
    })
    .catch(err => {
      res.status(500).json({
        message: `Failed to GET /api/students: ${err.message}`,
      });
    });
});

module.exports = router;