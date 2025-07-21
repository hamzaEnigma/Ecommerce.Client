import { Component } from '@angular/core';
import { ProductService } from '../../../product-management/services/product.service';
import { finalize, tap } from 'rxjs';
import { orderDetail } from '../../models/order-detail.model';
import { OrdersService } from '../../orders.service';

@Component({
  selector: 'app-chart',
  standalone: false,
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  orderDetails: orderDetail[] = [];
  totalSum: number | undefined = 0;
  constructor(private orderService: OrdersService) {}
  
  ngOnInit(): void {
   this.orderService.cartItems$.pipe(tap(items=>{this.orderDetails = items })).subscribe();
   this.orderService.total$.pipe(tap((x)=>this.totalSum = x)).subscribe();
  }

  deleteLine(index: number) {
    this.orderDetails.splice(index, 1);
    this.orderService.setCartItems(this.orderDetails);
    this.orderService.updateTotal(this.orderDetails);  
  }

  getTotal(): string {
    return Math.abs(this.totalSum?? 0).toFixed(1);
  }

  changeQuantityEvent(item:orderDetail){
    this.orderService.updateTotal(this.orderDetails);
  }
}
