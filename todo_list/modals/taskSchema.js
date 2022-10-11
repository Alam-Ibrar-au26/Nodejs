const mongoose = require("mongoose");

const task = new mongoose.Schema({
  task: {type: String},
  date: {type: Date, default: Date.now()},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const taskDetails = mongoose.model("todo", task);

module.exports = taskDetails;
