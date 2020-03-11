let User = require('../models/user.model');
const Router = require('express').Router();

Router.route('/').get((req, res) => {
    User.find()
    .then( users => res.json(users))
    .catch(err => { res.status(400).json('Error: '+ err) });
});

Router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then( user => res.json(user))
    .catch(err => { res.status(400).json('Error: '+ err) });
});

Router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then( () => res.json('delete 1 user'))
    .catch(err => { res.status(400).json('Error: '+ err) });
});

Router.route('/update/:id').post((req, res) => {
    User.findByIdAndUpdate(req.params.id)
    .then( (user) => {
        user.username= req.body.username;
        user.save()
            .then(() => res.json('update done!'))
            .catch( err => res.status(400).json('Err: ' + err));
    })
    .catch(err => {res.status(400).json(`Eroor: ${err}`)});
})

Router.route('/add').post((req, res) => {
    const username = req.body.username;
    const nUser = new User({username});
    nUser.save()
    .then( () => res.json('Successful Add'))
    .catch(err => {res.status(400).json(`Eroor: ${err}`)});
})

module.exports = Router;