const router = require("express").Router();

const Subjects = require("../models/Subjects");

//add new subject
router.post("/add", async (req, res) => {
  try {
    const { name, price, code, teacher } = req.body;
    const subject = new Subjects({ name, price, code, teacher });
    subject.save().then(res.status(200).json(subject));
  } catch (error) {
    console.log(error);
  }
});

//get by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ message: "Id not found", success: false });
    } else {
      const subject = await Subjects.findById(id);
      res.status(200).json({ subject });
    }
  } catch (error) {
    console.log(error);
  }
});

//get all
router.get("/", async (req, res) => {
  try {
    const subjects = await Subjects.find();
    res.status(200).json({ subjects });
  } catch (error) {
    console.log(error);
  }
});

//get and modify it
router.put("/:id", async (req, res) => {
  try {
    const { name, price, code, teacher } = req.body;
    const subject = await Subjects.findByIdAndUpdate(req.params.id, {
      name,
      price,
      code,
      teacher,
    });
    await subject.save();
    res.status(200).json(subject);
  } catch (err) {
    console.log(err);
  }
});

//delete an subject by id
router.delete("/:id", async (req, res) => {
  try {
    if (req.params.id == null) {
      res.status(404).json({ message: "Id not found", success: false });
    } else {
      const subject = await Subjects.findByIdAndDelete(req.params.id);
      res.status(200).json(subject);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
