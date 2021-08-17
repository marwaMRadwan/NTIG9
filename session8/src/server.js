const express = require('express')
require('../app/db/connection')
const app = express()
const dRoutes = require('../routes/task.route')
const uRoutes = require('../routes/user.route')
app.use(express.json())
app.use(dRoutes)
app.use('/user', uRoutes)
module.exports = app