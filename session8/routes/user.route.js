const express = require('express')
const router = new express.Router()
const userController = require('../app/controller/user.controller')
router.post('/register',userController.register)

module.exports = router