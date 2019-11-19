const express = require('express');

const Students = require('./students-model');
const { genericError } = require('../helpers/helpers');

const router = express.Router();

router.get('/', (req, res) => {
  Students.find()
    .then(students => {
      res.status(200).json(students);
    })
    .catch(err => genericError(err, req, res));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Students.findById(id)
    .then(student => {
      if (student) {
        res.status(200).json(student);
      } else {
        res.status(401).json({
          message: `There is no student with an id of ${id}`,
        });
      }
    })
    .catch(err => genericError(err, req, res));
})

module.exports = router;