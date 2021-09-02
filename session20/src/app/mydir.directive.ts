import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {
  @Input() appMydir:string=""
  constructor(private el:ElementRef) { }
ngOnInit(){
  this.el.nativeElement.classList.add(this.appMydir)
}
}
