// auth dependencies
var express = require('express');
const passport   = require('passport');
const bcrypt     = require('bcrypt');

// Our user model
const User       = require('../models/user-model');

const authRoutes = express.Router();


// SIGN UP USER 
authRoutes.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

// check if both username and password are provided
  if (!username || !password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

// check if the provided username already exists in the db
  User.findOne({ username }, '_id', (err, foundUser) => {
    if (foundUser) {
      res.status(400).json({ message: 'The username already exists' });
      return;
    }

    // encryption tools
    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    // create a new user based on the user schema
    const theUser = new User({
      username,
      password: hashPass
    });

    // save new user in db
    theUser.save((err) => {
      if (err) {
        res.status(400).json({ message: 'Something went wrong' });
        return;
      }

      // log the user in
      req.login(theUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Something went wrong' });
          return;
        }

        res.status(200).json(req.user);
      });
    });
  });
});

// LOG-IN
authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }

      // We are now logged in (notice req.user)
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

// LOG-OUT
authRoutes.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'You have successfully logged-out' });
});

// AUTHENTICATED CHECK !!
authRoutes.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    console.log("this is the authenticated user object: ", req.user);
    return;
  }

  res.status(403).json({ message: 'Unauthorized' });
});

// PRIVATE ROUTE ONLY FOR LOGGED-IN USERS
authRoutes.get('/private', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json({ message: 'This is a private message' });
    return;
  }

  res.status(403).json({ message: 'Unauthorized' });
});
