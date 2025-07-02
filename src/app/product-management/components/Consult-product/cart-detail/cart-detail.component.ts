import { Component, OnInit } from '@angular/core';
import {filter} from 'rxjs';
import { orderDetail } from '../../../../orders/models/order-detail.model';
import { OrdersService } from '../../../../orders/orders.service';

@Component({
  selector: 'app-cart-detail',
  standalone: false,
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css',
})
export class CartDetailComponent implements OnInit {
  orderDetails: orderDetail[] = [];
  totalSum: number = 0;

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    // Restore saved cart
    this.orderService.cartItemsSubject.subscribe(
      (items) => (this.orderDetails = items)
    );
    this.orderService.totalSubject
      .pipe(filter((x) => x != undefined))
      .subscribe((total) => (this.totalSum = total));
  }

  deleteLine(index: number) {
    this.orderDetails.splice(index, 1);
    this.orderService.setCartItems(this.orderDetails);
    this.orderService.updateTotal(this.orderDetails);
  }

  getTotal(): string {
    return Math.abs(this.totalSum).toFixed(2);
  }
}
