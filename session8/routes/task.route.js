const express = require('express')
const router = new express.Router()
const dataController = require('../app/controller/data.controller')
// router.post('/',dataController.addUser )

// router.get('/allTasks', dataController.getAllTasks)
// router.get('/alLTasks/:id', dataController.getSingle)
router.get('/testR', (req,res)=>{
    res.send('test')
})
module.exports = router