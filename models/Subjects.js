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
});

module.exports = mongoose.model("Subjects", SubjectsSchema);