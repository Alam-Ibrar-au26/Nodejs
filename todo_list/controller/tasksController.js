const {response} = require("express");
const taskDetails =require("../modals/taskSchema");

class Task {
    create = async (req, res) => {
        try {
            const {task} = req.body;
            if(!task) {
                throw {
                    message: "Please enter a task",
                };
            }
            const response = await taskDetails.create({ task });
            res.send({
                status: true,
                response: response,
                message: "Successfully added a task",
            });
        } catch (error) {
            res.send({
                status: false,
                response: error.message,
            });
        }
    };

    getTasks = async (req, res) => {
        const response = await taskDetails.find();
        res.send(response);
    };

    getTask = async (req, res) => {
        const _id = req.query._id;
        const response = await taskDetails.findOne({ _id: _id });
        res.send(response);
      };
}