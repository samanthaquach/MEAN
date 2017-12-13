import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Products = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.Products = this._dataService.retrieveProduct();
  }

}
