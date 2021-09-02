import { Component } from '@angular/core';
import { GlobalService } from './providers/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro';
  file:any
  constructor(private _global:GlobalService){}
  handleUpload(event:any){
    this.file = event.target.files[0]
    console.log(this.file)
  }
  uploadMyFile(){
  const myData= new FormData()
  myData.append('image', this.file,this.file.name)
  this._global.upload(myData).subscribe(result=>console.log(result))
  }
}
