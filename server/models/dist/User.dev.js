"use strict";

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});
var UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
//# sourceMappingURL=User.dev.js.map
