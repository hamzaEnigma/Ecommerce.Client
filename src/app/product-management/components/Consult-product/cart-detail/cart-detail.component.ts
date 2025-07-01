import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { FormControl } from '@angular/forms';
import { debounceTime, finalize, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { orderDetail } from '../../../../orders/models/order-detail.model';

@Component({
  selector: 'app-cart-detail',
  standalone: false,
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent  implements OnInit{
  orderDetails:orderDetail [] = [];
  totalSum : number = 0;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.currentPanier$.pipe(
      tap((data)=>{
        if (data){
        const currentOrder = data
        this.orderDetails?.push(currentOrder);
        const price =  currentOrder.product?.purchasePrice ?? 0
        this.totalSum += price * currentOrder.Quantity;
        }
      }),
      finalize(() => console.log('data enregistré',this.orderDetails)
    )).subscribe();
  }

  deleteLine(index: number){ 
    const currentPrice = this.orderDetails[index].product?.purchasePrice ?? 0;
    this.totalSum -= currentPrice *  this.orderDetails[index].Quantity;
    this.orderDetails.splice(index,1);
  }

  getTotal():string{
    return Math.abs(this.totalSum).toFixed(2);
  }
 
}
