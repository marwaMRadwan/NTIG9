const express=require('express')
const router = new express.Router()

router.get('', (req,res)=>{
    res.send('test my routes')
})

router.get('/about', (req,res)=>{
    res.send('test 2')
})
router.get('/hbs', (req,res)=>{
    res.render('index', {
        name:"marwa radwan"
    })
})
module.exports = router