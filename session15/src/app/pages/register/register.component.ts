import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _user:UsersService) { }

  ngOnInit(): void {
  }

  handleSubmit(myData:any){
    console.log(myData.value)
    this._user.registerUser(myData.value).subscribe(data=>{
      console.log(data)
    })
  }
}
