const express=require('express')
const router = express.Router()
const userController  = require('../src/controller/user.controller')

router.get('/add', (req,res)=>{
    if(req.query.name){
        userController.addNewUser(req.query.name, req.query.balance, req.query.age)

    }
    res.render('add')
})

router.post('/add', (req,res)=>{
    console.log(req.body)
    userController.addNewUser(req.body.name, req.body.balance, req.body.age)
    res.redirect('/add')
})
module.exports = router