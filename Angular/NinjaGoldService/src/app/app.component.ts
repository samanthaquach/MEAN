import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _dataService: DataService) { }
  total = this._dataService.goldcount;

  title = 'Ninja Gold';
  ngOnInit() {
    this.total = this._dataService.retrieveGoldCount();
  }
}
