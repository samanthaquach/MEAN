import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  // data: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: Http) { }
  // updateData(newData: any): void{
  //   const tempData = this.data.getValue();
  //   tempData.push(newData);
  //   this.data.next(tempData);
  //   // this.data.next(newData);

  // }
  getUserName(User) {
    console.log(User);
    return this._http.get(`https://api.github.com/users/${User}`)
      .map(data => data.json())
      .toPromise();
  }

}
