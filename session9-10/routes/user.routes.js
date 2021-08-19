const User = require('../app/db/models/user.model')
const router = require('express').Router()
const responseCreator = require('../app/helpers/response.helper')
const sendActivationEmail= require('../app/helpers/sendEmail.helper')
const auth = require('../app/middleware/auth')
var QRCode = require('qrcode')
 
router.post('/register', async(req, res)=>{
    try{
        let userData = new User(req.body)
        QRCode.toString('I am a pony!', function (err, url) {
            userData.qr = (url)
          })
        await userData.save()
        sendActivationEmail(userData.email, `activation link http://localhost:3000/activate/${userData._id}`)
        const response = responseCreator(true, userData, "data inserted")
        res.status(200).send(response)
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
    }
})

router.get('/activate/:id', async(req,res)=>{
    try{
        let user =await User.findById(req.params.id)
        if(!user) res.status(404).send(responseCreator(false, null, "user not found"))
        if(user.status)  res.status(404).send(responseCreator(false, null, "already active"))
        user.status=true
        await user.save()
        res.send(responseCreator(true, user, "activated"))
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
    }
})

router.post('/login', async(req, res)=>{
    try{
        const userData = await User.findByCredintials(req.body.email, req.body.password)
        const token = await userData.generateToken()
        res.status(200).send(responseCreator(true, {userData, token}, "Logged in"))
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
    }
})

router.get('/me', auth, async(req,res)=>{
    res.status(200).send({
        apiStatus: true,
        date: req.user,
        message: "data featched"
    })
})
router.post('/logout', auth, async(req,res)=>{
    try{     
        req.user.tokens = req.user.tokens.filter(ele=>{
            return ele.token!= req.token
        })
        await req.user.save()
        res.status(200).send(responseCreator(true, {}, "Logged out"))
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
    }
})
router.post('/logoutAll', auth, async(req,res)=>{
    try{     
        req.user.tokens = []
        await req.user.save()
        res.status(200).send(responseCreator(true, {}, "Logged out"))
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
    }
})

router.get('/allUsers', auth, async(req,res)=>{
    try{
        const data = await User.find()
        res.status(200).send({
            apiStatus:true,
            data,
            message:"loading data"
        })

    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"error loading data"
        })
    }
})
module.exports= router