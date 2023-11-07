const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

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

app.get("/", (req, res) => {
  res.sendStatus(200);
});
