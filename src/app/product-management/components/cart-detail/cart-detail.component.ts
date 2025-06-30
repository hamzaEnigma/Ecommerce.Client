import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormControl } from '@angular/forms';
import { debounceTime, Observable, of, startWith, switchMap } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart-detail',
  standalone: false,
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent {
 
}
