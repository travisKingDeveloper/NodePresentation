const express = require('express')
const router = express.Router()

const User = require('../models/userSchema')
const RequestFakeData = require('../offlineprocess')

router.get('/', async (req, res) => {
    const users = await User.find()

    if (!users || users.length == 0) 
      return res.status(404).send("No Users Found")

    res.render('users', { users })
})

router.post('/', async (req, res) => {
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

  await user.save()

  res.redirect('/users')
})

router.post('/fakeData', function(req, res) {
  RequestFakeData()
})

module.exports = router
