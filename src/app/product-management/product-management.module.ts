import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductListComponent } from './components/product/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ConsultProductsComponent } from './components/Consult-product/consult-products/consult-products.component';
import { ProductDetailComponent } from './components/Consult-product/product-detail/product-detail.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';

const routes: Routes = [
  { path: '',  }
];

@NgModule({
  declarations: [ProductListComponent, ProductFormComponent, ConsultProductsComponent, ProductDetailComponent, CartDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductManagementRoutingModule,
    ReactiveFormsModule
  ],
})
export class ProductManagementModule { }
