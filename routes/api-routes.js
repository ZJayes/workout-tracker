const router = require("express").Router();
const db = require("../models")


//add data 
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(fitnessDB => {
      res.json(fitnessDB);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//update the data

router.put("/api/workouts/:id", ({ body, params }, res) => {
    const id = params.id
    //pushing the body to exercise data by the id
    //
    db.Workout.findByIdandUpdate(id, {$push: {exercise: body}}, {new: true})
    .then(fitnessDB => {
      res.json(fitnessDB);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//this is for the "Last Workout"
router.get("/api/workouts", ({ body }, res) => {
    //aggregate adds fields based on existing fields
    db.Workout.aggregate([
      {
        $addFields: {
              totalDuration: {$sum: "exercises.duration"}
        }
      }
    ])
    .then(fitnessDB => {
      res.json(fitnessDB);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//This is for the Stat Dashboard
router.get("/api/workouts/range", ({ body }, res) => {
  //
  db.Workout.aggregate([
    {
      $addFields: {
            totalDuration: {$sum: "exercises.duration"}
      }
    }
  ])
  //limit 7 days
  .limit(7)
  .then(fitnessDB => {
    res.json(fitnessDB);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});





