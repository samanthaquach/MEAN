import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  set2: number[] = [];

  constructor(private _dataService: DataService) { }
  

  ngOnInit() {
    this.set2 = this._dataService.retrieveSet2();
  }

  pushOne() {
    this._dataService.addSet2(2);
  }

}
