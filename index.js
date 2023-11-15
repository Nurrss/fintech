const express = require("express");
const fs = require("fs");
const http = require("http");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const studentsRoute = require("./routes/students");
const subjectsRoute = require("./routes/subjects");
const operationsRoute = require("./routes/operations");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("common"));
app.use(express.json());
app.use("/students", studentsRoute);
app.use("/operations", operationsRoute);
app.use("/subjects", subjectsRoute);
app.use(methodOverride("_method"));
app.use(express.static("views"));

mongoose
  .connect(
    "mongodb+srv://nurrsserkul:user_fintech@cluster0.lzoxfhw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const PORT = 4000;
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

const createPath = (page) =>
  path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.get("/", (req, res) => {
  res.render(createPath("login"));
});
