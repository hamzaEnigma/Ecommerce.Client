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
  currentOrder:orderDetail | undefined;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.currentPanier$.pipe(
      tap((data)=>this.currentOrder = data),
      finalize(() => console.log('data enregistré')
    )).subscribe();
  }
 
}
