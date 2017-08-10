var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

const Story = require('../models/story-model');
const User = require('../models/user-model');

// get list of users
router.get('/users', (req, res, next) => {
  Story.find((err, listOfUsers) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(listOfUsers);
  });
});

// update user
router.put('/users/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  console.log("this is the req body: ", req.body);

  User.findByIdAndUpdate(req.params.id, {$push:{"stories":req.body._id}}, (err, updatedUser) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(updatedUser);
  });
})

module.exports = router;
