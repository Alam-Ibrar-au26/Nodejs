const mongoose = require("mongoose");
const multer = require("multer");

var upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

const task = new mongoose.Schema({
  task: { type: String },
  date: { type: Date, default: Date.now() },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  files: {
    type: String,
    file: [upload, "Please upload a valid file"],
  },
});

const taskDetails = mongoose.model("todo", task);

module.exports = taskDetails;
