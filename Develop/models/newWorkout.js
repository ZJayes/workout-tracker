const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        { 
            type: {
                type: string,
                trim: true,
                required: true
            },
            name: {
                type: string,
                trim: true,
                required: true
            },
            duration: {
                type: number,
                required: true    
            },
            weight: {
                type: number,
            },
            reps: {
                type: number,                
            },
            sets: {
                type: number,               
            },
            distance: {
                type: number,
            }
        }
    ]

})


const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;