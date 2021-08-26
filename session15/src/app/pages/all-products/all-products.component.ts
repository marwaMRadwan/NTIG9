import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allUser:any[] = []
  constructor(private _user:UsersService) { 

    _user.getAllData().subscribe( 
      (data) => {console.log(data); this.allUser = data} ,
      ( e ) => { console.log('error'); console.log(e); },
      ( ) => { console.log('then'); }
    )
  }

  ngOnInit(): void {
  }

}
