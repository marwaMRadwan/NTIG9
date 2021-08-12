const express=require('express')
const router = new express.Router()
const dataController = require('../controllers/data.controller')

router.get('', dataController.x)


router.get('/about', (req,res)=>{
    res.send('test 2 data')
})
router.get('/hbs', (req,res)=>{
    res.render('index', {
        name:"marwa radwan"
    })
})

router.get('/:id/:name', (req,res)=>{
    // res.send(`${req.params.id} - ${req.params.name}`)
    res.send(req.query.x)
})
module.exports = router