const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/presentation')

const User = require('../repository/userSchema')

router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) return res.status(500).send("There was a problem finding the users")

    res.status(200).send(users)
  })
})

router.post('/', function(req, res) {
  const {
    name,
    username,
    password
  } = req.body

  const user = new User({
    name,
    username,
    password,
    location: 'there',
    admin: false,
  })

  user.save(function (err) {
    if(!err) {
      return res.json({
        status: 'OK',
        user,
      })
    } else {
      res.statusCode = 500
      res.json({
        error: err
      })
    }
  })
})

module.exports = router
