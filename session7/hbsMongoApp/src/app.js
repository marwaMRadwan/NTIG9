require('dotenv').config()

const express = require("express")
const path = require("path")
const hbs = require('hbs')

const userRoutes = require('../routes/user.routes')

const app = express()

app.set('view engine', 'hbs')
app.set("views", path.join(__dirname, "../design/views"))
hbs.registerPartials(path.join(__dirname, "../design/layouts"))


app.use(express.static(path.join(__dirname, "../public")))

app.use(express.urlencoded())

app.use(userRoutes)
module.exports = app