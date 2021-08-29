import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
z="mohammed"
  myForm  = new FormGroup({
  name:new FormControl("", [Validators.required, Validators.minLength(5)]),
  phone:new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
  address:new FormControl("c")
  })

  get name(){return this.myForm.get('name')}
  get phone(){return this.myForm.get('phone')}
  
  handleSubmit(){
    console.log(this.myForm.value)
  }

}
