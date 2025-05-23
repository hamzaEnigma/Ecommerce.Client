import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product/product-list.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
