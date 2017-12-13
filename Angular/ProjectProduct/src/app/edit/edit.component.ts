import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  // products: Array<CreateComponent>;
  newProduct = {
    title: "",
    price: "",
    image: "",
  }
  Products = [];

  constructor(private _route: ActivatedRoute, private _dataService: DataService, private router: Router) {
    this._route.paramMap.subscribe(params => {
      console.log(params.get('title'));
    })
  }


  

  ngOnInit() {
  }

  onSubmit(myForm, isValid: boolean) {
    console.log(this.newProduct);
    // this.Products.push(this.newProduct); //creating duplicates so ignore.
    this._dataService.addProduct(this.newProduct);
    // this.newProduct = new Product(); 
    this.newProduct = {
      title: "",
      price: "",
      image: "",
    }
    console.log(this.Products);
    this.router.navigate(['/productlist']);

}
