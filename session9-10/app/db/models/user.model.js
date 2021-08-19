const mongoose = require('mongoose')
const validator = require("validator")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    qr:{type:String},
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
     },
    phone:{
        type:String,
        trim:true,
        validate(value){
            if(!validator.isMobilePhone(value, ['ar-EG'])) throw new Error('invalid phone number')
        }
    },
    gender:{
        type:Boolean, //0 male , 1 female
        required:true
    },
    addresses :[
        {
            address:{
                addrType:{
                    type:String,
                    trim:true
                },
                addrDetails:{
                    type:String,
                    trim:true
                }
            }
        }
    ] ,
    image:{
        type:String,
        default:""
    }, 
    status:{
        type:Boolean,
        default: false
    },
    tokens:[
        { token:{type:String}}
    ]
}
,{timestamps:true}
)

//schema methods
//handle response
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    let deleted = ['password', 'addresses', 'tokens', '__v']
    deleted.forEach(item=>{
        delete user[item]
    })
    return user
}

//encrypt password 
userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

// login user
userSchema.statics.findByCredintials = async(email,password) => {
    const user = await User.findOne({email})
    if(!user) throw new Error('invalid email')
    const isValidPass = await bcrypt.compare(password, user.password)
    if(!isValidPass) throw new Error('invalid password')
    if(user.tokens.length>=5) throw new Error('exceded number of logins')
    return user
}

//generate token
userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id},process.env.JWTSECURITY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

const User = mongoose.model('User', userSchema)

module.exports = User