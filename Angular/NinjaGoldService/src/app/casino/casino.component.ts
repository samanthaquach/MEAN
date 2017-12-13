import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css']
})
export class CasinoComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }
  pushOne() {
    this._dataService.addCasino();
  }

}
