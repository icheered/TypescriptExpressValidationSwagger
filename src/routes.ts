const express = require('express')

const router = express.Router()

// Import controllers defined in src/controllers
const userController = require('./controllers/user')

router.use('/user', userController)

module.exports = router