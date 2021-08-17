const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/g9Mongoose', {})

const Data = mongoose.model('Data', {
    title:{
        type: String
    },
    content:{
        type: String
    }
})

const newInsert = new Data({
    title:"a",
    content: 5
})
app.get('', (req,res)=>{
    newInsert.save()
    .then(()=>res.send(newInsert))
    .catch((err)=> res.send(err))

})

app.listen(3001)