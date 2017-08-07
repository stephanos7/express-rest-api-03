'use strict';

const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({  
  // title: String,
  time : { type : Date, default: Date.now }
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;