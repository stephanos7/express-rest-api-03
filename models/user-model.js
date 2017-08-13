const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const Story   = require('./story-model');

const userSchema = new Schema({
  email: String,
  password: String,
  stories: [{ type: Schema.Types.ObjectId, ref: 'story'}]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;