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

router.post('/delete/:id', (req,res)=>{
    userController.deleteUser(req.params.id)
    res.redirect('/showAll')
})

router.get('/edit/:id', (req,res)=>{
    userdata= userController.searchUser(req.params.id)
    console.log(userdata)
    res.render('edit', {title:"edit", user:userdata})
})
router.post('/edit/:id', (req,res)=>{
    user=req.body
    userController.editUser(req.params.id, req.body)
    res.redirect('/showAll')
})

let getData = async(cb) =>{
    try{
        const fetch = require('node-fetch');
        res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
        data = await res.json()
        console.log(data)
cb(data)
    
    }
    catch(e){
cb(false)
    }
}
router.get('/api', (req,res)=>{
    getData(result=>{
        if(!result) res.send('error')
        res.render('index', {result})
    })
})

module.exports = router