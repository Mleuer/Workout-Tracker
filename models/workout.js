const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // CODE HERE
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now 
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;