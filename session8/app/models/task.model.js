const mongoose = require('mongoose')

const Data = mongoose.model('Data', {
    title:{
        type: String
    },
    content:{
        type: String
    }
})

module.exports = Data