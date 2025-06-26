import { Injectable } from '@angular/core';
import { Order } from './models/order.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
 selectedOrder: Order | undefined ;
 private apiUrl = 'https://localhost:7228/api/Order';
 
 private orders: Order[] = [
    {
      OrderId: 1,
      OrderDate: new Date('2023-06-12'),
      orderDetails: [
        {
          OrderId: 1,
          ProductId: 1,
          Quantity: 3,
          Discount: 0.1,
          SalePrice: 20,
          product: { ProductId: 1, productName: 'Pavlova', categoryId: 1, purchasePrice: 20 }
        },
        {
          OrderId: 1,
          ProductId: 2,
          Quantity: 3,
          Discount: 0,
          SalePrice: 15,
          product: { ProductId: 2, productName: 'Chai', categoryId: 1, purchasePrice: 15 }
        }
      ]
    },
    {
      OrderId: 2,
      OrderDate: new Date('2023-07-03'),
      orderDetails: [
        {
          OrderId: 2,
          ProductId: 3,
          Quantity: 5,
          Discount: 0,
          SalePrice: 17.5,
          product: { ProductId: 3, productName: 'Tofu', categoryId: 2, purchasePrice: 17.5 }
        }
      ]
    }
  ];
  constructor(private http: HttpClient) { }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(this.apiUrl+'/GetAll');
  }

  addOrder(order:Order):void {
    this.orders.push(order);
  } 
}
