import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
public langId = localStorage.getItem('currentLang')|| 'en'
  constructor(private _http: HttpClient) { }

  getLanguage(){
    if(this.langId=="en") this.langId="1"
    else this.langId="2"
    return this.langId
  }
  getx():Observable<any>{
    return this._http.get(`http://medical.mind-techs.com/api/Specializations/${this.getLanguage()}`)
  }
}
