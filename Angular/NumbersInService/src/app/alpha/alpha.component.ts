import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  set1: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.set1 = this._dataService.retrieveSet1();
  }

  pushOne() {
    this._dataService.addSet1(1);
  }

}
