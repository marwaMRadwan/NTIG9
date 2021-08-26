import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  getAllData():Observable<any>{
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }
}
