import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    
  }
  pushOne() {
    this._dataService.addHouse();
  }
}
