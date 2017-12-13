import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  pushOne() {
    this._dataService.addFarm();
  }

}
