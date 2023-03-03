const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    roll: {type: Number, required: true},
    col: {type: String, required: true},
});

mongoose.models = {}

module.exports = mongoose.model("Student", studentSchema);