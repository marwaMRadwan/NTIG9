import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
isLogged=false
  constructor() { }

  ngOnInit(): void {
  }
login(){
  this.isLogged=!this.isLogged
}
}
