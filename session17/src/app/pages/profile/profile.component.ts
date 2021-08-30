import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myData:any
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this._data.me().subscribe(data=>{
      this.myData=data
    })
  }

}
