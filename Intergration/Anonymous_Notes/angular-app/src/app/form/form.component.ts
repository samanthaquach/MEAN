import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _dataService: DataService) {}

  note = {
    text: ''
  }
  submitted;

  onSubmit() {
    console.log(this.note);
    this._dataService.addNote(this.note)
      .then(response => this.submitted = response)
      console.log("yas", this.submitted);
    this._dataService.getNotes()
  }

  ngOnInit() {
  }

}
