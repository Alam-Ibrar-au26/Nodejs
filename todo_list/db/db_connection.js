const mongoose = require("mongoose");

function DBConnection() {
  mongoose
    .connect("mongodb://localhost:27017/tasks")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch(() => {
      console.log("Failed to connect to MongoDB");
    });
}

module.exports = DBConnection;
