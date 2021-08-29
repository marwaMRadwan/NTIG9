import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
>>>>>>> a29894273d6f65230a5da8a20ee8bc944f4d9fde

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }
=======
emailFlag:boolean=false
  constructor(private _user:UsersService, private _router:Router) { }
>>>>>>> a29894273d6f65230a5da8a20ee8bc944f4d9fde

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
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
>>>>>>> a29894273d6f65230a5da8a20ee8bc944f4d9fde
}
