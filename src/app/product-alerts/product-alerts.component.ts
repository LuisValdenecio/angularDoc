import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/productModel';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
