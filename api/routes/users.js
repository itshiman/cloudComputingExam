var express = require('express');
var userRouter = express.Router();

const mongoose = require('mongoose');
const User = require('../models/user');

/* GET users listing. */
userRouter.route('/signup').post((req, res, next) => {
  const newUser = {
    ...req.body,
  };
  User.create(newUser)
    .then(
      (user) => {
        console.log('New User Created ', user);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ firsname: user.fname });
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

userRouter.route('/login').post((req, res, next) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (user.password === '8808986471') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ success: 'login Success', user: user });
    } else {
      res.statusCode = 401;
      res.json({ error: 'Incorrect Password' });
    }
  });
});

userRouter.route('/get').post((req, res, nex) => {
  User.findOne({ employee_id: req.body.id }).then((user) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: 'Fetch Success', user: user });
  });
});

userRouter.route('/update').put((req, res, nex) => {
  User.findOne({ employee_id: req.body.id }).then((user) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ success: 'Fetch Success', user: user });
  });
});

module.exports = userRouter;
