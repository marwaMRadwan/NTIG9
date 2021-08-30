import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData :any = {

  }
  constructor() { }

  ngOnInit(): void {
    this.registerData={
      "name":"marwa radwan",
      "email":"marwatestq@gmail.com",
      "password":"23@G9hello",
      "gender":1,
      "phone":"01234567892"
    }
  }
  handleRegister(){
    console.log(this.registerData)
  }
}
