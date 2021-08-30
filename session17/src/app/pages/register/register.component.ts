import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formNotValid =""
  check = false
  registerData :any = {
    name:"", gender:null, phone:"", email:"", password:""
   }
  constructor( private _data:DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  handleRegister(myForm:NgForm){
    if(myForm.valid){
      this.formNotValid = "added successfully"
      this.toastr.error('added successfully', 'Toastr fun!');
      this.check=true
      myForm.resetForm()
    }
    else{
      this.check=false
      this.formNotValid="check your inputs"
    }
  }
}
