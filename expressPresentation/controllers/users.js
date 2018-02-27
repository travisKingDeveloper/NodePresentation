const express = require('express')
const router = express.Router()
const userService = require('../services/userService')
const statusCodes = require('http-status-codes')

router.get('/', async (req, res) => {
    const users = await userService.retrieveAllUsers()

    res.render('users', { users })
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const users = await userService.retreiveUser(id)

  res.render('users', { users })
})

router.post('/', async (req, res) => {
  const error = await userService.createUser(req.body)

  if (error) {
    res.render('error', { message: 'Failed to create user', error: error })
  }

  res.redirect('/users')
})

router.post('/sendMessage', async (req, res) => {
  await userService.triggerMessage(req.body)

  res.redirect('/')
})

module.exports = router
