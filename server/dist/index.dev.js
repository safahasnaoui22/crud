"use strict";

var express = require('express');

var mongoose = require('mongoose');

var cors = require('cors');

var UserModel = require('./models/Users');

mongoose.connect("mongodb+srv://crud2:crud2@cluster0.z96irs3.mongodb.net/").then(function () {
  console.log("connected to mongoDB");
})["catch"](function (err) {
  console.log(err);
});
var app = express();
app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
  UserModel.find({}).then(function (users) {
    return res.json(users);
  })["catch"](function (err) {
    return res.json(err);
  });
});
app.get('/getUser/:id', function (req, res) {
  var id = req.params.id;
  UserModel.findById({
    _id: id
  }).then(function (users) {
    return res.json(users);
  })["catch"](function (err) {
    return res.json(err);
  });
});
app["delete"]('/deleteUser/:id', function (req, res) {
  var id = req.params.id;
  UserModel.findByIdAndDelete(id).then(function (user) {
    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    res.json({
      message: 'User deleted successfully',
      user: user
    });
  })["catch"](function (err) {
    return res.status(500).json({
      error: err.message
    });
  });
});
app.put('/updateUser/:id', function (req, res) {
  var id = req.params.id;
  UserModel.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  }, {
    "new": true
  }).then(function (user) {
    return res.json(user);
  })["catch"](function (err) {
    return res.json(err);
  });
});
app.post("/createUser", function (req, res) {
  UserModel.create(req.body).then(function (users) {
    return res.json(users);
  })["catch"](function (err) {
    return res.json(err);
  });
});
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
//# sourceMappingURL=index.dev.js.map
