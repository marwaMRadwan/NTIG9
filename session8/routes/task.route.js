const express = require('express')
const router = new express.Router()
const dataController = require('../app/controller/data.controller')
router.post('/',dataController.addUser )

module.exports = router