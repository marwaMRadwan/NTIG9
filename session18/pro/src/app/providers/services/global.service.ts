import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  //global variable
  public isLoggedIn: boolean = localStorage.getItem('appToken')? true:false

  constructor(private _http:HttpClient) { }
  login(data:any):Observable<any>{
    return this._http.post('http://medical.mind-techs.com/api/auth/login', data)
  }
  upload(data:any):Observable<any>{
    return this._http.post('http://medical.mind-techs.com/api/UploadImage', data)
  }
}
