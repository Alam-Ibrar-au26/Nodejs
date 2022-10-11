const { response } = require("express");
const userDetails = require("../modals/userSchema");
const bcrypt = require("bcrypt");

class Login {
  signIn = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { message: "email is required" };
      }
      if (!password) {
        throw { message: "password is required" };
      }
      const findCredentials = await userDetails.find({ email });
      if (findCredentials.length == 0) {
        throw { message: "signUp is Required" };
      }
      if (bcrypt.compareSync(password, findCredentials[0].password)) {
        return (
          res
            .status(202)
            //   .header("access_token", access_token)
            .send({
              message: "LogIn Successfully",
              error: false,
              data: {
                id: findCredentials[0]._id,
                name: findCredentials[0].name,
                email: findCredentials[0].email,
                //   token: login_token,
              },
            })
        );
      } else {
        throw { message: "password is wrong!" };
      }
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getUsers = async (req, res) => {
    const response = await userDetails.find().populate();
    res.send(response);
  };

  getUserTask = async (req, res) => {
    const userId = req.query.userId;
    const response = await userDetails
      .find({ userId: userId })
      .populate("userId");
    res.send(response);
  };

  getUser = async (req, res) => {
    const userId = req.query.userId;
    const response = await userDetails
      .findOne({ userId: userId })
      .populate("userId");
    res.send(response);
  };

  updateUser = async (req, res) => {
    const id = req.body.id;
    const task = req.body.task;
    const response = await userDetails.updateMany({ _id: id }, { task: task });
    res.send(response);
  };

  deleteUser = async (req, res) => {
    const id = req.body.id;
    const response = await userDetails.deleteMany({ _id: id });
    res.send(response);
  };
}

module.exports = new Login();
