const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectsSchema = new Schema({
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  stream: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  lastModifiedBy: {
    type: String,
  }
});

const Subjects = mongoose.model("subjects", SubjectsSchema);

module.exports = Subjects;
