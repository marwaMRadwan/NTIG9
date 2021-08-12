/*
npm init --y 
npm i -g nodemon
npm i express
nodemon index
npm i hbs
 */
const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const publicFiles = path.join(__dirname, '/public')
const viewsFiles = path.join(__dirname, '/myfront/views')
const layoutFiles = path.join(__dirname, '/myfront/layouts')

app.use(express.static(publicFiles))
app.set('view engine' , 'hbs')

app.set('views', viewsFiles)

hbs.registerPartials(layoutFiles)
//route

// app.get('', (req, res)=>{
    // res.send({a:1, b:2})
//     res.sendFile(`${publicFiles}/about.html`)
// })
app.get('', (req,res)=>{
    res.render('home')
})

app.listen(3000, ()=> console.log('server up'))
//localhost:3000
 