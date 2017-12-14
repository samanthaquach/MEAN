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

  products: Array<string>;

  editProduct = {
    title: "",
    price: "",
    image: "",
  }
  Products = [];
  index = '';

  constructor(private _route: ActivatedRoute, private _dataService: DataService, private router: Router) {
    this._route.paramMap.subscribe(params => {
      console.log(params.get('title'));
    })
  }


  

  ngOnInit() {
  }

  onSubmit(myForm, isValid: boolean) {
    this.Products = this._dataService.retrieveProduct();
    this._route.paramMap.subscribe(params => {
      var CurrentProduct = this._dataService.retrieveSingleProduct(params.get('title'))
      this.index = params.get('title')
      console.log(CurrentProduct);
    })
    this._dataService.updateProducts(this.editProduct);
    this.editProduct = {
      title: "",
      price: "",
      image: "",
    }
    console.log(this.Products);
    this.router.navigate(['/productlist']);
  }

}
