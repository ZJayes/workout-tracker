const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
        type: Date,
        default: Date.now()
    },
    exercises: [Exercises,]
    });

const Exercises = new Schema({
        type: {
            type: String,
            trim: true,
            required: "Enter the type of workout."
        },
    
        name: {
            type: String,
            trim: true,
            required: "Enter the name of the workout."
        }, 
    
        duration: {
            type: Number,
            trim: true,
            required: "Enter the duration of the workout."
        },
    
        weight: {
            type: Number,
            trim: true,
        },
    
        reps: {
            type: Number,
            trim: true,
        },
    
        sets: {
            type: Number,
            trim: true,
        },
    
        distance: {
            type: Number,
            trim: true,
        }
    })




const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;