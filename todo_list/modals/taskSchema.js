const mongoose = require("mongoose");

const user = new mongoose.Schema({
  tasks: String,
  date: Number,
});

const userDetails = new mongoose.model("user", user);

module.exports = userDetails;
