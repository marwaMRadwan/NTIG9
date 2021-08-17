const express = require('express')
require('../app/db/connection')
const app = express()
const dRoutes = require('../routes/task.route')
app.use(express.json())
app.use(dRoutes)
module.exports = app