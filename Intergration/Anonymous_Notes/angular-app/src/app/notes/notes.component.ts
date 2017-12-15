import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private _dataService: DataService) { }
  
  noteList: any[] = [];

  ngOnInit() {
    this._dataService.allnotes.subscribe(
      (allnotes) => { this.noteList = allnotes }
    )
    this._dataService.getNotes()
  }

}
