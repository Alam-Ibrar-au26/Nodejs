const router = require('express').Router();
const task = require("../controller/tasksController");

router.post("/create", Task.create);
router.get("/", Task.getTask);
router.get("/task", Task.getTask);
router.put("/update", Task.updateTask);
router.delete("/delete", Task.deleteTask);

module.exports = router;