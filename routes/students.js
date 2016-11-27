var express = require('express');
var router = express.Router();
var createService = require('../services/createStudent')

/* GET users listing. */

router.get("/", function(req, res, next) {
  res.send('Welcome to student Portal');
});

router.get("/:id", function(req, res, next) {
  res.send('Hello Student No: ' + req.params.id);
});

router.get('/all', function(req, res, next) {
  res.send('Get All Students for me !!');
});

router.post('/:id', function(req, res, next) {

  //create a student account

  res.send('Student No :' + req.params.id + ' saved');
});

router.put('/:id', function(req, res, next) {
    res.send('Student No :' + req.params.id + ' updated');
});

router.delete('/:id', function(req, res, next) {
    res.send('Student No :' + req.params.id + ' deleted');
});


module.exports = router;
