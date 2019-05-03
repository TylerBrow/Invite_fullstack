var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');

const Going = []
const notGoing = []


router.post('/Going', (req, res, next) =>{
  Going.push(req.body)
  res.json({
    message: "User added"
  })
})

router.post('/NotGoing', (req, res, next) => {
  notGoing.push(req.body)
  res.json({
    message: "User added"
  })
})

router.get('/Going', (req, res, next) => {
  res.json(Going)
})

router.get('/NotGoing', (req, res, next) => {
  res.json(notGoing)
})

module.exports = router;