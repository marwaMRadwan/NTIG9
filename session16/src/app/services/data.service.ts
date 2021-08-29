import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  APIURL = 'https://jsonplaceholder.typicode.com/users'
  constructor(private _http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this._http.get(this.APIURL)
  }
  getSingleUser(userId:any):Observable<any>{
    return this._http.get(`${this.APIURL}/${userId}`)
  }
}
