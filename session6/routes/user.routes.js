const express=require('express')
const router = express.Router()
const userController  = require('../src/controller/user.controller')
router.get("",(req,res)=>{
    res.redirect('/showAll')
})
router.get('/add', (req,res)=>{
    res.render('add', {title: "add new user"})
})

router.post('/add', (req,res)=>{
    console.log(req.body)
    userController.addNewUser(req.body.name, req.body.balance, req.body.age)
    res.redirect('/showAll')
})
router.get('/showAll', (req,res)=>{
    allusers= userController.showAllUsers()
    console.log( allusers.length )
    console.log(allusers)
    res.render('all', {
        title:"all Data",
        allusers,
        isEmpty: allusers.length?false:true
    })
})
module.exports = router