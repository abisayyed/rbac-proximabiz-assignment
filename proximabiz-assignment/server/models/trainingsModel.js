const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrainingsSchema = new Schema({
  coursename: {
    type: String,
    required: true,
    trim: true,
  },
  subjects: {
    type: Array,
    required: true,
    trim: true,
  },
  type: {
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
  },
});

const Trainings = mongoose.model("trainings", TrainingsSchema);

module.exports = Trainings;
