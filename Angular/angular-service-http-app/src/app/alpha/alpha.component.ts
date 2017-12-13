import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  data: any[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    // this._dataService.data.subscribe(
    //   (data) => { this.data = data; }
    // )
  }

}
