import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: Http) { 
    this.retrieveTask();
  }

  retrieveTask() {
    // this._http.get('https://api.github.com/users/${User}').subscribe(
    //   (task:any[]) => { this.tasks.next(task); }
    // );
    this._http.get('https://api.github.com/users/${User}')
    .map(data => data.json())
    .toPromise();
  }

  addTask(newTask: any) {
    this._http.post('', newTask).subscribe(
      (response) => { this.retrieveTask(); }
    );
  }
}
