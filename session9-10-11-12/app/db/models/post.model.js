const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    postType:{
        type:String,
        required:true,
        enum:['txt', 'img', 'vid'],
        trim:true
    },
    txt:{
        type:String,
        // default:"",
        required: function(){return this.postType=="txt"}
    },
    file:{
        type:String,
        required: function(){return this.postType=="img"|| this.postType=="vid"}
    }
    // ,
    // vid:{
    //     type:String,
    //     required: function(){return this.postType=="vid"}
    // }    
})

const Post = mongoose.model("Post", postSchema)
module.exports = Post