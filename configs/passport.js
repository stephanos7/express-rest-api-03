const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/story-model');
const bcrypt        = require('bcrypt');

module.exports = function (passport) {

  passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, foundUser) => {
      if (err) {
        next(err);
        return;
      }

      if (!foundUser) {
        next(null, false, { message: 'Incorrect Password or Username' });
        return;
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        next(null, false, { message: 'Incorrect Password or Username' });
        return;
      }

      next(null, foundUser);
    });
  }));

  passport.serializeUser((loggedInUser, cb) => {
    cb(null, loggedInUser._id);
  });

  passport.deserializeUser((userIdFromSession, cb) => {
    User.findById(userIdFromSession, (err, userFound) => {
      if (err) {
        cb(err);
        return;
      }

      cb(null, userFound);
    });
  });

}
