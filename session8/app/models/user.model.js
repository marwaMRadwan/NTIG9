const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name:{
        type:String,
        required: true,
        minlength: 3,
        maxlength:20,
        trim:true
    },
    userName:{
        type:String,
        required: true,
        minlength: 3,
        maxlength:20,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email')
        }
    },
    password:{
        type:String,
        required: true,
        minlength: 3,
        maxlength:20,
        trim:true,
        //match:
        validate(value){
            if(value.includes('abc')) throw new Error('invalid abc')
        }
    },
    phone:{
        type:String,
        validate(value){
            if(!validator.isMobilePhone(value, ['ar-EG'])){
                throw new Error('invalid phone')
            }
        }
    },
    gender:{
        type:String,
        enum: ['female', 'male']
    },
    dob:{
        type:Date
    }
})

module.exports = User