import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ConsultProductsComponent } from './components/Consult-product/consult-products/consult-products.component';




const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'consult', component: ConsultProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
