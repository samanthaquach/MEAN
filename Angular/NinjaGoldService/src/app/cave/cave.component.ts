import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cave',
  templateUrl: './cave.component.html',
  styleUrls: ['./cave.component.css']
})
export class CaveComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  pushOne() {
    this._dataService.addCave();
  }

}
