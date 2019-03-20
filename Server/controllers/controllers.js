'use strict';


var mongoose = require('mongoose'),
Shit = mongoose.model('Shit');

exports.listAllShit = function(req, res) {
  Shit.find({}, function(err, shit) {
    if (err)
      res.send(err);
    res.json(shit);
  });
};




exports.createShit = function(req, res) {
    console.log(req);
  var newShit = new Shit(req.body);
  newShit.save(function(err, shit) {
    if (err)
      res.send(err);
    res.json(shit);
  });
};


exports.readShit = function(req, res) {
  Shit.findById(req.params.ShitId, function(err, shit) {
    if (err)
      res.send(err);
    res.json(shit);
  });
};


exports.updateShit = function(req, res) {
  Shit.findOneAndUpdate({_id: req.params.ShitId}, {$set: req.body}, {new: true}, function(err, shit) {
    if (err)
      res.send(err);
    res.json(shit);
  });
};


exports.deleteShit = function(req, res) {
    console.log(req);
  Shit.deleteOne({
    _id: req.params.ShitId
  }, function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'deleted this shit.' });
  });
};