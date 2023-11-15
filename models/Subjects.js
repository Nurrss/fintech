const mongoose = require("mongoose");

const { Schema } = mongoose;

const SubjectsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: String,
    trim: true,
    required: true,
  },
  code: {
    type: String,
    trim: true,
  },
  teacher: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Subjects", SubjectsSchema);
