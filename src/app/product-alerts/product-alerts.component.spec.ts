import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertsComponent } from './product-alerts.component';
import { ProductModel } from '../models/productModel';
import {Input, Output, EventEmitter} from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

describe('ProductAlertsComponent', () => {
  let component: ProductAlertsComponent;
  let fixture: ComponentFixture<ProductAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent ,ProductAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAlertsComponent);
    component = fixture.componentInstance;
    component.product = {name : 'x', price: 250, description : 'some description'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
