import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Users } from './users';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  retrieveTask(username: string): Observable<Users>{
    console.log(username);
    return this._http.get(`https://api.github.com/users/${username}`)
      .map(response => response.json());
    // return this._http.get(`https://api.github.com/users/${username}`)
    //   .map(response => response.json())
    //   .toPromise();
  }

}
