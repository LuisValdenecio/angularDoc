import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductModel } from '../models/productModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products = Products;


  constructor() { }

  ngOnInit() {
  }

  public shareProduct(product: ProductModel) {
    window.alert(`${product.name} has been shared`);
  }

  public onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }


}
