const express = require("express");
var cors = require('cors');
const app = express();
const port = 3000;
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
});

app.use(cors())

const DBConnection = require("./db/db_connection");
const taskRouter = require("./Routes/router");
var bodyParser = require("body-parser");

DBConnection();
app.use(express.json());
app.use(upload.single("files"));

app.use(taskRouter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  const error = new Error("Invalid Request");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
