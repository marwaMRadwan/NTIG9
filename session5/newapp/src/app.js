require('dotenv').config()
const express= require('express')
const app = express()

const myRoutes = require('../routes/myLinks.routes')
app.use(myRoutes)

module.exports = app