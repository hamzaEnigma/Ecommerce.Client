import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductManagementRoutingModule } from './product-management-routing.module';

const routes: Routes = [
  { path: '',  }
];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    ProductManagementRoutingModule,
    CommonModule
  ]
})
export class ProductManagementModule { }
