let Exercise = require('../models/exercise.model');
const Router = require('express').Router();

Router.route('/').get((req, res) => {
    Exercise.find()
    .then( Exercises => res.json(Exercises))
    .catch(err => { res.status(400).json('Error: '+ err) });  
});
Router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
    .then( Exercise => res.json(Exercise))
    .catch(err => { res.status(400).json('Error: '+ err) });
});

Router.route('/delete/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then( (a) => res.json(a.data))
    .catch(err => { res.status(400).json('Error: '+ err) });
});

Router.route('/update/:id').post((req, res) => {
    Exercise.findByIdAndUpdate(req.params.id)
    .then( (exercise) => {
        exercise.username= req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);
        exercise.save()
            .then(() => res.json('update done!'))
            .catch( err => res.status(400).json('Err: ' + err));
    })
    .catch(err => {res.status(400).json(`Eroor: ${err}`)});
})

Router.route('/add').post((req, res) => {
    const {username, description} = req.body;
    const date = Date.parse(req.body.date);
    const duration = Number(req.body.duration);
    const nExercise = new Exercise({username, description, duration, date});
    nExercise.save()
    .then( () => res.json('Successful Add'))
    .catch(err => {res.status(400).json(`Eroor: ${err}`)});
})

module.exports = Router;