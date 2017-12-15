import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
    
  allnotes: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  addNote(note) {
        console.log('Note:', note);
        console.log('made it!')
        return this._http.post('/API/createNote', note)
            .map(response => response.json())
            .toPromise()
    }

    getNotes() {
        return this._http.get('/API/getNote')
            .map(response => this.retreiveAllnotes(response.json()))
            .toPromise();
    }

    retreiveAllnotes(newNotes) {
        this.allnotes.next(newNotes);
        // this.allnotes = notes
        // console.log('retreive note:', notes)
        console.log('retreive notes,', this.allnotes)
        return this.allnotes;
    }

}
