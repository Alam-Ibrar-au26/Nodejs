const { response } = require("express");
const taskDetails = require("../modals/taskSchema");

class Task {
  createTask = async (req, res) => {
    try {
      const { task, userId } = req.body;
      const file = req.file
      console.log("file", file)
      if (!task) {
        throw {
          message: "Please enter a task",
        };
      }
      if (!userId) {
        throw {
          message: "Please enter a User ID",
        };
      }

      const response = await taskDetails.create({ task, userId, files });
      res.send({
        status: true,
        response: response,
        message: "Successfully added task",
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getTasks = async (req, res) => {
    const response = await taskDetails.find().populate();
    res.send(response);
  };

  getUserTasks = async (req, res) => {
    const userId = req.query.userId;
    const response = await taskDetails
      .find({ userId: userId })
      .populate("userId");
    res.send(response);
  };

  getTask = async (req, res) => {
    const _id = req.query._id;
    const response = await taskDetails.findOne({ _id: _id });
    res.send(response);
  };

  updateTask = async (req, res) => {
    const id = req.body.id;
    const task = req.body.task;
    const response = await taskDetails.updateMany({ _id: id }, { task: task });
    res.send(response);
  };

  deleteTask = async (req, res) => {
    const id = req.body.id;
    const response = await taskDetails.deleteMany({ _id: id });
    res.send(response);
  };
}

module.exports = new Task();
