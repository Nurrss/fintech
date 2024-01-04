const router = require("express").Router();

const Operations = require("../models/Operations");
const Students = require("../models/Students");
const createPath = require("../helpers/create-path");

router.get("/", async (req, res) => {
  console.log("here");
  try {
    const operations = await Operations.find();
    const student = await Students.findByID();
    res.status(200).render(createPath(`payments`), { operations });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
