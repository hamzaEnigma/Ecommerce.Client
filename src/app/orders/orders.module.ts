import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OrderDetailComponent } from './order-detail/order-detail.component';


@NgModule({
  declarations: [
    OrdersListComponent,
    OrderFormComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class OrdersModule { }
