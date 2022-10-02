const express = require("express");
const app = express();
const port = 3000;

const DBConnection = require("./db/db_connection");
const taskRouter = require("./Routes/router");

DBConnection();
app.use(express.json());

app.use(taskRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
