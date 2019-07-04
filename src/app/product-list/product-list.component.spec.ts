import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductModel } from '../models/productModel';
import {ProductAlertsComponent } from '../product-alerts/product-alerts.component'

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent,
        ProductAlertsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should display a message when a product is shared', () => {
    spyOn(window, 'alert');
    const productExample: ProductModel = {name : 'Samsung s10', price : 600, description : 'awesome'};
    component.shareProduct(productExample);
    expect(window.alert).toHaveBeenCalledWith(`${productExample.name} has been shared`);
  });

  it('it should display a message whenever an expensive(>700) btn is clicked', ()=>{
    spyOn(window, 'alert');
    component.onNotify();
    expect(window.alert).toHaveBeenCalledWith(`You will be notified when the product goes on sale`);
  })

});
