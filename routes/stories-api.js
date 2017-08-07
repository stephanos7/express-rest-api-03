var express = require('express');
var router = express.Router();

const Story = require('../models/story-model');

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

// post a new story
router.post('/stories', (req, res, next) => {
  const newStory = new Story({
    markdown: "### hello"
  });

  newStory.save((err) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: 'New story created!',
      id: newStory._id
    });
  });
});

module.exports = router;
