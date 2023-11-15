const router = require("express").Router();

const Operations = require("../models/Operations");
const Students = require("../models/Students");
const Subjects = require("../models/Subjects");

//add new operation
router.post("/add", async (req, res) => {
  try {
    const { stu_id, sub_id } = req.body;
    const student_name = (await Students.findById(stu_id)).fullName;
    const subject_id = await Subjects.findById(sub_id);
    const student_id = await Students.findById(stu_id);
    const subject_name = (await Subjects.findById(sub_id)).name;
    const sum = await subject_id.price;
    const balans = await student_id.balans;
    const operation = new Operations({ student_name, subject_name, sum });
    await operation.save();
    operationAdd(stu_id, operation, sum, balans);
    res.status(200).json(operation);
  } catch (error) {
    console.log(error);
  }
});

// async function operationAdd(stu_id, operation) {
//   const student_id = await Students.findById(stu_id);
//   student_id.operations.push(operation);
//   return "added";
// }

async function operationAdd(stu_id, operation, sum, balans) {
  return Students.findByIdAndUpdate(
    stu_id,
    {
      $push: { operations: operation },
      balans: getBalance(balans, sum),
    },
    { new: true, useFindAndModify: false }
  );
}

function getBalance(balans, sum) {
  const kaldi = parseInt(balans) - parseInt(sum);
  return kaldi;
}
// const { email, password, firstName, lastName } = req.body;
// const student = new Students({ email, password, firstName, lastName });
// student.save().then(res.status(200).json(student));

//get by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ message: "Id not found", success: false });
    } else {
      const operation = await Operations.findById(id);
      res.status(200).json({ operation });
    }
  } catch (error) {
    console.log(error);
  }
});

//get all
router.get("/", async (req, res) => {
  try {
    const operations = await Operations.find();
    res.status(200).json({ operations });
  } catch (error) {
    console.log(error);
  }
});

//get and modify it
router.put("/:id", async (req, res) => {
  try {
    const { student_name, subject_name, sum } = req.body;
    const operation = await Operations.findByIdAndUpdate(req.params.id, {
      student_name,
      subject_name,
      sum,
    });
    await operation.save();
    res.status(200).json(operation);
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
      const operation = await Operations.findByIdAndDelete(req.params.id);
      res.status(200).json(operation);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
