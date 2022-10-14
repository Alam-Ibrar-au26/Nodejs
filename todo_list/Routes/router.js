const router = require("express").Router();
const Task = require("../controller/tasksController");
const Register = require("../controller/registerController.js");
const Login = require("../controller/loginController");
const upload = require("../middleware/fileUploader");

// #Task
router.post("/create-task", Task.createTask);
router.get("/", Task.getTask);
router.get("/task", Task.getTask);
router.put("/update", Task.updateTask);
router.delete("/delete-task", Task.deleteTask);

// #User_Register
router.post("/register", Register.signUp);

// #User_Login
router.get("/login", Login.signIn);
router.get("/user", Login.getUser);
router.get("/users", Login.getUsers);
router.get("/user-task", Task.getUserTasks);
router.put("/update-user", Login.updateUser);
router.delete("/delete-user", Login.deleteUser);

module.exports = router;
