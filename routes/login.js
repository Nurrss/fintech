const router = require("express").Router();

const Students = require("../models/Students");
const createPath = require("../helpers/create-path");

router.post("/", async (req, res) => {
  try {
    const { password, inn } = req.body;

    const user = await Students.findOne({ inn, password });
    if (user) {
      const id = user.id;
      res.status(200).render(createPath("main_page"), { id });
    } else {
      res.send("Invalid login credentials");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
