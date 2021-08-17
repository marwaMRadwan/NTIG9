const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/g9Mongoose', {
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
