const Data = require('../models/task.model')

const addUser = (req,res)=>{
    const newInsert = new Data(req.body)
    newInsert.save()
    .then(()=>res.send(newInsert))
    .catch((err)=> res.send(err))

}

module.exports = {
    addUser
}