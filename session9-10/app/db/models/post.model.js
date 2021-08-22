const mongoose = require('mongoose')
const postSchema =  mongoose.Schema({
    postType:{
        type:String,
        required:true,
        enum:['txt', 'img', 'vid'],
        trim:true
    },
    txt:{
        type:String,
        // default:null,
        required:true,
        validate(value){
            // console.log(this.postType)
            if(value=="a"){
                throw new Error('must include txt')
            }
        }
    }
})

const Post = mongoose.model("Post", postSchema)
module.exports = Post