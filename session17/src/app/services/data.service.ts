import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  commonURL = "http://localhost:3000/"

  constructor(private _http:HttpClient) { }
  
  register(data:any):Observable<any>{
    return this._http.post(`${this.commonURL}register`, data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.commonURL}login`, data)
  }
  logout():Observable<any>{
    return this._http.post(`${this.commonURL}logout`, null)
  }
  me():Observable<any>{
    return this._http.get(`${this.commonURL}me`)
  }
}
