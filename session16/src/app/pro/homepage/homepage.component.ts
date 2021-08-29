import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
userName="marwa"
@ViewChild(NavbarComponent) myNav!:NavbarComponent
  constructor() { }

  ngOnInit(): void {
  }
  changeNoW(){
    this.myNav.name = this.userName
  }
}
