const express = require('express');

//schema
const Class = require('../../Schemas/Class.js');

const router = express.Router();

router
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    Class.findById(id)
      .populate("student")
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .put((req, res) => {
    const { id } = req.params;
    const updateInfo = req.body;
    Class.findByIdAndUpdate(id, updateInfo)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  // .get((req, res) => {
  //   const { id } = req.params;
  //   Class.findById(id)
  //     .then(response => {
  //       res.json(response);
  //     })
  //     .catch(err => {
  //       res.status(500).json(err);
  //     });
  // })

module.exports = router;
