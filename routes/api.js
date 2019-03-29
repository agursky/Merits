const express = require ('express');
const router = express.Router();
const Todo = require('../models/todo');
const User = require('../models/user');

router.get('/todos', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  Todo.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/todos', (req, res, next) => {
  if(req.body.action){
    Todo.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.post('/user', (req, res, next) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if(err) {
            console.log(err);
        } else if (user) {
            console.log('sorry a user with that name already exists');
        }  else {
        User.create(req.body) 
        .then(data => res.json(data))
        .catch(next)
        }
    
    });
})

router.get('/user', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  User.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});



router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;