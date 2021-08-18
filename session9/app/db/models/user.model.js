const mongoose = require('mongoose')
const validator = require("validator")
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email format')
        }
    }, 
    password:{
        type:String,
        trim:true, 
        required:true,
        min:6,
        match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
        validate(value){
            if(value.toLowerCase().includes('pass')||value.toLowerCase().includes('password')||value.toLowerCase().includes('123')|| value.toLowerCase().includes(this.name))
                throw new Error('week pass')
        }
     }
     //,
    // phone:{},
    // gender:{},
    // addresses :[] ,
    // image:{}, 
    // status:{}

})

//schema methods 
userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
const User = mongoose.model('User', userSchema)

module.exports = User