var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

const Story = require('../models/story-model');
const User = require('../models/user-model');

// get list of stories
router.get('/stories', (req, res, next) => {
  Story.find((err, listOfStories) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(listOfStories);
  });
});

// get a single story
router.get('/stories/:id', (req, res) => {
  console.log(req.params.id);
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  
  Story.findById(req.params.id, (err, storyFound) => {
      if (err) {
        res.json(err);
        return;
      }

      res.json(storyFound);
    });
});

// post a new story
router.post('/stories', (req, res, next) => {
  console.log(req.body.contents);
  const newStory = new Story({
    contents: req.body.contents
  });

  newStory.save((err, savedStory) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json(savedStory);
  });
});

// delete story
router.delete('/stories/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  
  Story.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    return res.json({
      message: 'Story has been removed!'
    });
  })
});


module.exports = router;
