import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {
  set3: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.set3 = this._dataService.retrieveSet3();
  }

  pushOne() {
    this._dataService.addSet3();
  }

}
