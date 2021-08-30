import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {email:"marwaa@gmail.com", password:"23@G9hello"}
  constructor(private _data: DataService) { }

  ngOnInit(): void {
  }
  loginMe(){
    this._data.login(this.loginData).subscribe(data=>{
      console.log(data)
      localStorage.setItem('myAppToken', data.data.token)
    })
  }
}
