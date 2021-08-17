const User = require('../models/user.model')

const generateStatus = (apiStatus, data, message)=>{
    return {
        apiStatus,
        data,
        message        
    }
}
const register = async(req,res)=>{
    const newInsert = new User(req.body)
    try{
        await newInsert.save()
        res.status(200).send({
            apiStatus:true,
            data: newInsert,
            message:"data added success"
        })   
    }
    catch(e){
     res.status(500).send({
         apiStatus:false,
         data:e.message,
         message: "data inserting problem"
     })
    }
}

const getAllUsers = async(req, res)=>{
    try{
        myData = await User.find()
        res.status(200).send({
            apiStatus:true,
            data: myData,
            message: "data fetced success"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data: e.message,
            message:"error loading data"
        })
    }
}

const getSingleUser = async(req,res)=>{
    const id = req.params.id
    try{
        result = await Data.findById(id)
        if(!result) return res.status(404).send({
            apiStatus: false,
            data:null,
            message: "user not found"
        })
        res.status(200).send({
            apiStatus: true,
            data: result,
            meesage: "user retrived"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e.meesage,
            message:"error loading data"
        })
    }
}

const deleteUser = async(req,res)=>{
    try{
        id = req.params.id
        const data = await User.findByIdAndDelete(id) // User.deleteOne({_id:id})
        if(!data) return res.status(400).send({
            apiStatus:false,
            data:null,
            message:"user not found"
        })
        res.status(200).send({
            apiStatus:true,
            data:data,
            message: "deleted"
        })
    }
    catch(e){
        res.status(500).send( generateStatus(false, e.message, "error in delete"))
    }
}

const editUser = async(req,res)=>{
    try{
        id = req.params.id
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message: "error in edit"
        })
    }

}

module.exports = { register, getAllUsers, getSingleUser, deleteUser, editUser }