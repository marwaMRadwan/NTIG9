import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session20';
result:any
  constructor(private translate: TranslateService, public _data:DataService) {
    // const newLang = localStorage.getItem('currentLang')=='en'? 'en': 'ar';
    //   translate.setDefaultLang(newLang);
    //   translate.use(newLang);
      
  }
ngOnInit(){
//   this._data.getx().subscribe(data=>{
// this.result = data
  // })
}
// chngLang(){
//   const newLang = localStorage.getItem('currentLang')=='en'? 'ar':'en'
//   localStorage.setItem('currentLang',newLang)  
//   this.translate.setDefaultLang(newLang);
//     this.translate.use(newLang);
//   window.location.reload();
// }

}
