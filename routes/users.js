var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var User = require('../models/user.js');

/* GET /users listing. */
router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

module.exports = router;
