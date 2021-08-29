import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
allUsers : any[] = []
isLoaded : boolean = false
constructor( private _user:DataService) { }

  ngOnInit(): void {
    this.getAllData()
  }


  getAllData(){
    this._user.getAllUsers().subscribe(data=>{
      this.allUsers = data
    },
    ()=>{},
    ()=>{this.isLoaded=true}
    )
  }

}
