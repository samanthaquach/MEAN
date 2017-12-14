import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { Product } from './product';

@Injectable()
export class DataService {
  product: any[] = [];
  productsObservable = new BehaviorSubject(null);
  constructor(){}

  retrieveProduct(): any[] {
    return this.product;
  }

  addProduct(any){
    console.log("at add product");
    this.product.push(any);
    console.log(this.product);
  }

  updateProducts(any) {
    this.productsObservable.next(any);
  }
  
  retrieveSingleProduct(title): Product {
    return this.product[title];
  }
}
