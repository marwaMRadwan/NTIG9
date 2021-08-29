import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  user :any
  constructor(private _data:DataService, private _r:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.getSingleUser()
  }

  getSingleUser(){
     this._data.getSingleUser(this._r.snapshot.params.id).subscribe(data=>{
        this.user=data
     })
  }
}
