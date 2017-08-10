'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user-model');

const storySchema = new Schema({  
  contents: String,
  // author: { type: Schema.Types.ObjectId, ref: 'user'},
  time : { type : Date, default: Date.now }
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;