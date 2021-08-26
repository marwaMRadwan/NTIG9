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
    this.allUser = _user.getAllData()
  }

  ngOnInit(): void {
  }

}
