import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
today:any
  userData : any
  loginData =  new FormGroup ({
    email:new FormControl(),
    password: new FormControl()
  })
  constructor(public _global:GlobalService, private dP:DatePipe) { }

  ngOnInit(): void {
    this.today = this.dP.transform(new Date(), 'short')
  }
  handleLogin(){
    
     this._global.login(this.loginData.value).subscribe((data)=>{
      if(!data) console.log('fe error')
      this.userData= data
      if(data.error){
        console.log(data.error)
      }
      else{
        console.log('test')
        this._global.isLoggedIn = true
        localStorage.setItem('appToken', data.access_token)
      }
    },
    ()=>{
      console.log('error')
    }),
    ()=>{
      console.log('then')
    }
  }
  
  }  
