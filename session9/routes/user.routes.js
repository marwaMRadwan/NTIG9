const User = require('../app/db/models/user.model')
const router = require('express').Router()
const responseCreator = require('../app/helpers/response.helper')

router.post('/register', async(req, res)=>{
    try{
        const userData = new User(req.body)
        await userData.save()
        const response = responseCreator(true, userData, "data inserted")
        res.status(200).send(response)
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
    }
})
module.exports= router