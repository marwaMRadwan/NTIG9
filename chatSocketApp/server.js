const express = require('express');
const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server,{
    cors:{
        origin:'*',
        methods:"*"
    }
})

io.on('connection', (socket) => {
    console.log('a user connected');
    //check auth
    
    socket.on('disconnect',()=> console.log('disconnected'))
    socket.on('myMsg', (msg)=>{
        console.log(msg)
        socket.broadcast.emit('message-broadcast', msg)
    })
});
  
server.listen(3000, () => {
  console.log('listening on *:3000');
});