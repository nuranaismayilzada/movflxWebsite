// models/Users.js

const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const usersModel = mongoose.model("Users", usersSchema);
module.exports = usersModel;
