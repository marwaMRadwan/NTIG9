const express = require('express')
const router = new express.Router()
const userController = require('../app/controller/user.controller')

router.post('/register',userController.register)
router.get('/all', userController.getAllUsers)
router.get('all/:id', userController.getSingleUser)
router.delete('user/:id', userController.deleteUser)
router.patch('user/:id', userController.editUser) //put

module.exports = router