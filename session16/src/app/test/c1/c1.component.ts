import { Component, OnInit, ViewChild } from '@angular/core';
import { C3Component } from '../c3/c3.component';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  @ViewChild(C3Component) child!: C3Component;
  x:number=52
  articles:any[] = [
    {title:'t1', content:"c1"},
    {title:'t2', content:"c2"},
    {title:'t3', content:"c3"},
    {title:'t4', content:"c4"},
    {title:'t5', content:"c5"},
    {title:'t6', content:"c6"},
    {title:'t7', content:"c7"},
    {title:'t8', content:"c8"},
    ]
  constructor() { }

  ngOnInit(): void {
  }
test(){ this.x++}
// show(){
  // return "this.child.f"
 
// }
ngAfterViewInit(){
  console.log(this.child.f)
}
inc(){ this.child.f++}
}
