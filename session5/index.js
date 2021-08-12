/*
npm init --y 
npm i -g nodemon
npm i express
nodemon index
 */
const express = require('express')
const path = require('path')

const app = express()
const publicFiles = path.join(__dirname, '/public')

app.use(express.static(publicFiles))
//route
// app.get('', (req, res)=>{
    // res.send({a:1, b:2})
//     res.sendFile(`${publicFiles}/about.html`)
// })

app.listen(3000, ()=> console.log('server up'))
//localhost:3000
