import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductListComponent } from './components/product/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  { path: '',  }
];

@NgModule({
  declarations: [ProductListComponent, ProductFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductManagementRoutingModule,
    ReactiveFormsModule
  ],
})
export class ProductManagementModule { }
