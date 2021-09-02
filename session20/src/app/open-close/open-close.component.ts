import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: '#c6ecff'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],  
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css']
})
export class OpenCloseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  
}
