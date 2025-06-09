import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Order } from '../models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  standalone: false,
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css',
})
export class OrdersListComponent implements OnInit {

  orders: Order[] = [];
  
  constructor(private orderService: OrdersService,private router:Router) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  getTotal(order: Order): number | undefined {
    return order.orderDetails?.reduce((sum, d) => sum + (d.SalePrice * d.Quantity * (1 - (d.Discount || 0))), 0);
  }

  viewOrder(order:Order){
      this.router.navigate(['/orders/detail']);
      this.orderService.selectedOrder = order;
  }

  addOrder(){
    this.router.navigate(['/orders/add']);
  }
}
