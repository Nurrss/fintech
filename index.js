const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const studentsRoute = require("./routes/students");
const subjectsRoute = require("./routes/subjects");
const operationsRoute = require("./routes/operations");
const pageRoute = require("./routes/page");
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const paymentsRoute = require("./routes/payments");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("views"));

mongoose
  .connect(
    "mongodb+srv://nurrsserkul:user@cluster0.ypihzqa.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const PORT = 4000;
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
app.use("/students", studentsRoute);

const createPath = (page) =>
  path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.get("/", (req, res) => {
  res.render(createPath("main_page"));
});

app.use("/login", loginRoute);
app.use("/registration/add", registerRoute);
app.use("/payments", paymentsRoute);

app.use(pageRoute);
app.use("/operations", operationsRoute);
app.use("/subjects", subjectsRoute);
app.use(methodOverride("_method"));

module.exports = app;
