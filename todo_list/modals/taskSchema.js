const mongoose = require("mongoose");

const task = new mongoose.Schema({
  tasks: {type: String},
  date: {type: Number},
});

const taskDetails = mongoose.model("tasks", task);

module.exports = taskDetails;
