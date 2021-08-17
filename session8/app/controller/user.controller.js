const User = require('../models/user.model')

const register = async(req,res)=>{
    const newInsert = new User(req.body)
    try{
        await newInsert.save()
        res.send(newInsert)   
    }
    catch(e){
     res.send(e)
    }
}

// const getAllTasks = async(req, res)=>{
//     try{
//         myData = await Data.find()
//         res.send(myData)
//     }
//     catch(e){
//         res.send(e)
//     }
// }

// const getSingle = async(req,res)=>{
//     const id = req.params.id
//     try{
//         result = await Data.findById(id)
//         if(!result) res.send('not found')
//         res.send(result)
//     }
//     catch(e){
//         res.send(e)
//     }
// }

module.exports = {
    register
}