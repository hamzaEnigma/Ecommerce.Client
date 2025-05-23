import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
