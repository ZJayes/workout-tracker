const router = require("express").Router();
const db = require("../models")


//add data 
router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then(fitnessDB => {
      res.json(fitnessDB);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//update the data

router.put("/api/workouts/:id", (req,res) => {
  console.log(req.body)
  const body = req.body
  console.log(req.params.id)
  const id = req.params.id
  db.Workout.findByIdAndUpdate(id, {$push: {exercises: body }}, {new: true})
  .then(fitnessDB => {
      res.json(fitnessDB)
  })
  .catch(err => {
      res.status(400).json(err)
  })
})

//this is for the "Last Workout"
router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
      {
          $addFields: {
              totalDuration: {$sum: "$exercises.duration"}
          }
      }
  ])
  .then(fitnessDB => {
      res.json(fitnessDB)
  })
  .catch(err => {
      res.status(400).json(err)
  })
})

//This is for the Stat Dashboard
router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
      {
          $addFields: {
              totalDuration: {$sum: "$exercises.duration"}
          }
      }
  ])
  .limit(7)
  .then(fitnessDB => {
      res.json(fitnessDB)
  })
  .catch(err => {
      res.status(400).json(err)
  })
})

module.exports = router;




