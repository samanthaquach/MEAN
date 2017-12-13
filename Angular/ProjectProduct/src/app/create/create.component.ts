import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router } from '@angular/router';
import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model: Product;
  // newProduct = new Product(); 
  newProduct = {
    title: "",
    price: "",
    image: "",
  }
  Products = [];
  submitted;

  constructor(private _dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.Products = this._dataService.retrieveProduct();

  }

  onSubmit(myForm, isValid: boolean) {
    console.log(this.newProduct);
    // this.Products.push(this.newProduct); //creating duplicates so ignore.
    this._dataService.addProduct(this.newProduct);
    this.submitted = this.newProduct;
    // this.newProduct = new Product(); 
    this.newProduct = {
      title: "",
      price: "",
      image: "",
    }
    console.log(this.Products);
    this.router.navigate(['/productlist']);

  }

}
