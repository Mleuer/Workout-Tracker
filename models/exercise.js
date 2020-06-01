const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  // CODE HERE
  name: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    trim: true
  },
  weight: {
    type: Number,
    trim: true
  },
  sets: {
    type: Number,
    trim: true
  },
  reps: {
    type: Number,
    trim: true
  },
  duration: {
    type: Number,
    trim: true
  },
  distance: {
    type: Number,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now 
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;