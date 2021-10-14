const router = require("express").Router();
const { Workout } = require("../models");


// Get all workouts
router.get("/workouts", (req, res) => {
  Workout.find({})
    .sort({ day: 1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.put('/workouts/:id', (req,res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    function (error, success) {
        if (error) {
            res.status(400).json(error);
        } else {
            res.json(success);
        }
    }
  );
})


// Create a new workout
router.post('/workouts', async (req, res) => {
  const newWorkout = new Workout(req.body);
  try {
    await newWorkout.save();
    res.send(newWorkout);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
