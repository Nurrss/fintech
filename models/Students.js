const mongoose = require("mongoose");

const { Schema } = mongoose;

const StudentsSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
    required: true,
  },
  inn: {
    type: String,
    required: true,
    trim: true,
  },
  balans: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
  },
  owes: {
    type: String,
    trim: true,
  },
  operations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Operations",
    },
  ],
});

module.exports = mongoose.model("Students", StudentsSchema);
