const express=require('express')

require('dotenv').config()
require('./db/connection')

const userRoutes = require('../routes/user.routes')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(userRoutes)

module.exports = app
