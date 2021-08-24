const express=require('express')

require('dotenv').config()
require('./db/connection')

const userRoutes = require('../routes/user.routes')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(userRoutes)

const upload = require('../app/middleware/upload-file')
const Post = require('./db/models/post.model')
const auth = require('./middleware/auth')
app.post('/myTest',auth,upload.single('file'), async(req,res)=>{
    try{
        const data = new Post({
            ...req.body,
            userId: req.user._id
        })
        if(req.file) data.file = req.file.path
        await data.save()
        res.send(data)
    }
    catch(e){
        res.send(e)
    }
})
app.get('/myPosts', auth, async(req,res)=>{
    try{
        let posts = Post.find({userId: req.user._id}).limit(5).skip(10).sort({_id:-1})
        res.send(posts)
    }
    catch(e){
        res.send(e)
    }
})


app.get('/myPosts1', auth, async(req,res)=>{
    try{
        let x = req.user
       await x.populate({
           path:"userPosts",
           match:{postType:'txt'},
           options:{
               limit: parseInt(req.query.limit),
               skip: parseInt(req.query.page)* parseInt(req.query.limit),
               sort:{_id:-1}
           }
       }).execPopulate()
       res.send(x.userPosts)
    }
    catch(e){
        res.send(e)
    }
})

module.exports = app
