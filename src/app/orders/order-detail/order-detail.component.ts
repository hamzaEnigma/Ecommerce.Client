import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-detail',
  standalone: false,
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css',
})
export class OrderDetailComponent implements OnInit {
  order!: Order ;
  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    const order = this.orderService.selectedOrder;
    if (order) {
      this.order = order;
    } else {
      // fallback logic or redirect
    }
  }
  getFormattedDiscount(discount?: number): string {
    return discount ? `${discount * 100}%` : '0%';
  }

  getFormattedPrice(price: number): string {
    return `$${price.toFixed(2).replace('.', ',')}`;
  }
}
