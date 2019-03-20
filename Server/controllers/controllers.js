'use strict';
var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.listAllUser = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.createUser = function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.readUser = function(req, res) {
  User.findById(req.params.UserId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.updateUser = function(req, res) {
  User.findOneAndUpdate({_id: req.params.UserId}, {$set: req.body}, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.deleteUser = function(req, res) {
    User.deleteOne({
    _id: req.params.UserId
  }, function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'deleted this user.' });
  });
};