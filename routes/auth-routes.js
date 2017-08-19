const express = require('express');
const router = express.Router();

const passport = require('../configs/passport.js');
const jwt = require('jsonwebtoken');
const jwtOptions = require('../configs/jwt');

const User = require('../models/user-model');

const bcrypt = require('bcrypt');
const bcryptSalt = 10;

router.post('/login', (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password);
  if (!email || !password) {
    res.status(401).json({ message: 'Provide email and password' });
    return;
  }

  User.findOne({'email': email}, (err, user) => {
    if (!user) {
      res.status(401).json({ message: 'The email or password is incorrect' });
      return;
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (!isMatch) {
        res.status(401).json({ message: 'The email or password is incorrect' });
      }
      else {
        const payload = {id: user._id, email: user.email};
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.status(200).json({ token, user });
        console.log("this is the token, ", token);
        console.log("and the user : ", user);
      }
    });
  });
});

router.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json();
});

router.post('/signup', (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    res.status(400).json({ message: 'Provide email and password' });
    return;
  }

  User.findOne({ email }, '_id', (err, foundUser) => {
    if (foundUser) {
      res.status(400).json({ message: 'The email already exists' });
      return;
    }

    let salt = bcrypt.genSaltSync(bcryptSalt);
    let hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({
      email,
      password: hashPass
    });

    theUser.save((err, user) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      else {
        const payload = {id: user._id, email: user.email};
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        
        res.status(200).json({ token, user });
      }
    });
  });
});

module.exports = router;