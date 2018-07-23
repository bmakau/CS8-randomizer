const express = require('express');

//schema
const User = require('../../Schemas/User.js');

const router = express.Router();

router.route('/').get((req, res) => {
  User.find({})
    .then(users => {
      if (users.length === 0) {
        res.status(404).json({ error: 'No users found!' });
      } else {
        res.status(200).json(users);
      }
    })
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
