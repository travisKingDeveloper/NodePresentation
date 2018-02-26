const express = require('express')
const router = express.Router()

const User = require('../models/userSchema')
const RequestFakeData = require('../offlineprocess')

router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) return res.status(500).send("There was a problem finding the users")

    res.render('users', { users })
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
      res.redirect('/users')
    } else {
      res.statusCode = 500
      res.json({
        error: err
      })
    }
  })
})

router.post('/fakeData', function(req, res) {
  RequestFakeData()
})

module.exports = router
