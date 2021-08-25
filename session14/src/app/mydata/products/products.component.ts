import { Component, OnInit } from '@angular/core';
import c from 'src/app/data.json'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  keyword:string=""
  data:any[] = c
  all:any[] = c
  constructor() { }

  ngOnInit(): void {
  }
  filterMyData(){
    this.data= this.all.filter( d => d.title.includes(this.keyword)||(d.price).toString().includes(this.keyword) )
    console.log(this.data)
  }
}
