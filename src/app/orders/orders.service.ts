import { Injectable, signal } from '@angular/core';
import { Order } from './models/order.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { orderDetail } from './models/order-detail.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
 selectedOrder: Order | undefined ;
 cartItemsSubject = new BehaviorSubject<orderDetail[]>([]);
 cartItems$ = this.cartItemsSubject.asObservable();

 totalSubject = new BehaviorSubject<number | undefined> (0);
 total$ = this.totalSubject.asObservable();
 panierCount = signal(0);
 private apiUrl = 'https://localhost:7228/api/Order';
 
 private orders: Order[] = [
    {
      OrderId: 1,
      OrderDate: new Date('2023-06-12'),
      orderDetails: [
        {
          OrderId: 1,
          productId: 1,
          Quantity: 3,
          Discount: 0.1,
          SalePrice: 20,
          product: { productId: 1, productName: 'Pavlova', categoryId: 1, purchasePrice: 20 }
        },
        {
          OrderId: 1,
          productId: 2,
          Quantity: 3,
          Discount: 0,
          SalePrice: 15,
          product: { productId: 2, productName: 'Chai', categoryId: 1, purchasePrice: 15 }
        }
      ]
    },
    {
      OrderId: 2,
      OrderDate: new Date('2023-07-03'),
      orderDetails: [
        {
          OrderId: 2,
          productId: 3,
          Quantity: 5,
          Discount: 0,
          SalePrice: 17.5,
          product: { productId: 3, productName: 'Tofu', categoryId: 2, purchasePrice: 17.5 }
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

  getCartItems():orderDetail[]{
    return this.cartItemsSubject.value;
  }

  setCartItems(items: orderDetail[]){
    this.cartItemsSubject.next([...items]);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }

  addToChart(item:orderDetail){
  const cartItems = [...this.getCartItems()];
  const existingIndex = cartItems.findIndex(i => i.productId === item.productId);

  if (existingIndex !== -1) {
    // Update quantity and price if needed
    cartItems[existingIndex].Quantity += item.Quantity;
    // Optionally update SalePrice or Discount if needed here
  } else {
    cartItems.push(item);
  }

  this.cartItemsSubject.next(cartItems);
  this.updateTotal(cartItems);
  }

  updateTotal(items:orderDetail[]){
    const total = items.reduce((sumTotal,item)=> sumTotal += (item.product?.purchasePrice ?? 0) * item.Quantity,0);
    this.totalSubject.next(total);
  }
  
  setQuntity(item:orderDetail, quantity:number){
    item.Quantity = quantity;
  }


}
