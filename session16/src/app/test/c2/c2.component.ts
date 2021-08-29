import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  @Input() y:number=0
  @Input() single:any
  s =15
  constructor() { }

  ngOnInit(): void {
  }

}
