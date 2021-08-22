const express=require('express')

require('dotenv').config()
require('./db/connection')

const userRoutes = require('../routes/user.routes')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(userRoutes)

const Post = require('./db/models/post.model')
app.post('/myTest', async(req,res)=>{
    try{
        const data = new Post(req.body)
        await data.save()
        res.send(data)
    }
    catch(e){
        res.send(e)
    }
})
module.exports = app
