import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ChartComponent } from './chart/chart/chart.component';

const routes: Routes = [
  { path: '', component: OrdersListComponent },
  { path: 'add', component: OrderFormComponent },
  { path: 'detail', component: OrderDetailComponent },
  { path: 'cart', component: ChartComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
