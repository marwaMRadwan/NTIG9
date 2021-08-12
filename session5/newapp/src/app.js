require('dotenv').config()
const express= require('express')
const path = require('path')
const hbs = require('hbs')

const myRoutes = require('../routes/myLinks.routes')
const viewsDir = path.join(__dirname, '../frontend/pages')
const publicDir = path.join(__dirname, '../public')
const layoutsDir = path.join(__dirname, '../frontend/layouts')

const app = express()
app.set('view engine', 'hbs')
app.use(express.static(publicDir))
app.set('views', viewsDir)

hbs.registerPartials(layoutsDir)

app.use(myRoutes)

module.exports = app