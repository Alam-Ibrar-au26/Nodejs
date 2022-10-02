const mongoose = require("mongoose");

const task = new mongoose.Schema({
  task: {type: String},
  date: {type: Date, default: Date.now()},
});

const taskDetails = mongoose.model("tasks", task);

module.exports = taskDetails;
