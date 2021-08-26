import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
emailFlag:boolean=false
  constructor(private _user:UsersService, private _router:Router) { }

  ngOnInit(): void {
  }

  handleSubmit(myData:any){
    console.log(myData.value)
    this._user.registerUser(myData.value).subscribe(data=>{
      console.log(data)
      if(data.success=="") this.emailFlag=true
      else this._router.navigateByUrl('/allProducts')
    },
    (e)=>{},
    ()=>{}
    )
  }
}
