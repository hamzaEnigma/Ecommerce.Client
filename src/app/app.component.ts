import { Component } from '@angular/core';
import { OrdersService } from './orders/orders.service';
import { orderDetail } from './orders/models/order-detail.model';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecommerce.client';
  orderDetails: orderDetail[] = [];
  constructor(private orderService:OrdersService) {}

  ngOnInit(): void {
   this.orderService.cartItems$.pipe(tap(items=>{this.orderDetails = items }),tap(()=>this.orderService.panierCount.set(this.orderDetails.length))).subscribe();
  }

  get PanierCountSignal(){
      return this.orderService.panierCount;
  }
}
