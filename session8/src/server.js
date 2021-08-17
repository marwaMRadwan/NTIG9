const express = require('express')
require('../app/db/connection')
const app = express()
const dRoutes = require('../routes/task.route')
const uRoutes = require('../routes/user.route')
app.use(express.json())

// app.use(dRoutes)
// app.use('/user', uRoutes)
x = [
    {a:'/user', r: uRoutes},
    {a:'/', r: dRoutes}
]
x.forEach(element => { app.use( element.a, element.r ) });

// let routes=[
//     ['',require('../routes/users')]
// ]
// routes.forEach(r=>{
//     app.use(...r)
// })

module.exports = app