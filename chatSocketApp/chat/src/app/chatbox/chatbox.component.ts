import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
const SOCKET_ENDPOINT ="localhost:3000"

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  socket:any
  msg:any=""
  constructor() { }

  ngOnInit(): void {
    this.setupSocketConnection()
  }
  setupSocketConnection(){
    this.socket=io.io(SOCKET_ENDPOINT)
    this.socket.on('message-broadcast', (data:any)=>{
      if(data){
        let myel = document.createElement('p')
  myel.innerHTML = data
  document.querySelector('#myMsgList')?.append(myel)
      }
    })
  }
sendMessage(){
  this.socket.emit('myMsg', this.msg)
  let myel = document.createElement('p')
  myel.innerHTML = this.msg
  document.querySelector('#myMsgList')?.append(myel)
  this.msg=""
}
}
