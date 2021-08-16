const express=require('express')
const router = express.Router()
const dbConnection = require('../src/controller/dbConnection')
const {ObjectId} = require('mongodb')
router.get("",(req,res)=>{
    res.redirect('/showAll')
})
router.get('/add', (req,res)=>{
    res.render('add', {title: "add new user"})
})

router.post('/add', (req,res)=>{
    data = req.body
    dbConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('users').insertOne(data, (e,d)=>{
            if(e) res.send(e)
            res.redirect('/showAll')
        })
    })
})
router.get('/showAll', (req,res)=>{
    dbConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('users').find().toArray((e,  d)=>{
            if(e) res.send(e)
            res.render('all', {
                title:"all Data",
                allusers: d,
                isEmpty: d.length?false:true
            })
        
        })
        })
})

router.get('/single/:id', (req,res)=>{
    id = req.params.id
    dbConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('users').findOne({_id: new ObjectId(id)}, ((e,  d)=>{
            if(e) res.send(e)
            res.render('single', {
                title:"all Data",
                allusers: d
             })
            }))
        })        
    
})

router.post('/delete/:id', (req,res)=>{
    id=req.params.id
    dbConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('users').deleteOne({_id:new ObjectId(id)})
        .then(()=>res.redirect('/showAll'))
        .catch(()=>res.send('cann\'t delete'))
    })

    res.redirect('/showAll')
})

router.get('/edit/:id', (req,res)=>{
    id = req.params.id
    dbConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('users').findOne({_id: new ObjectId(id)}, ((e,  d)=>{
            if(e) res.send(e)
            res.render('edit', {
                title:"all Data",
                user: d
             })
            }))
        })        

})
router.post('/edit/:id', (req,res)=>{
    id=req.params.id
    data = req.body
    dbConnection((error, response)=>{
        if(error) res.send('database error')
        response.collection('users').updateOne(
            {_id:new ObjectId(id)},
            // { $set:data} // {name:1, age:80}
    {$inc:{age:1}}
    )
    .then(()=>res.redirect('/showAll'))
    .catch(()=>res.send('cann\'t delete'))

    })

})

module.exports = router