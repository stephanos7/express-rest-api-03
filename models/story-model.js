'use strict';

const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({  
  contents: String,
  time : { type : Date, default: Date.now }
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;