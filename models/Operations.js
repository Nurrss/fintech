const mongoose = require("mongoose");

const { Schema } = mongoose;

const OperationSchema = new Schema(
  {
    student_name: {
      type: String,
      required: true,
    },
    subject_name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    sum: {
      type: String,
      trim: true,
    },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Students",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Operations", OperationSchema);
