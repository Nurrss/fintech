const router = require("express").Router();

const Students = require("../models/Students");
const createPath = require("../helpers/create-path");

router.post("/", async (req, res) => {
  console.log("here");
  try {
    const { fullName, password, phoneNumber, inn, balans, status, owes } =
      req.body;
    const student = new Students({
      fullName,
      password,
      phoneNumber,
      inn,
      balans,
      status,
      owes,
    });
    await student.save();
    res.status(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
