import { Component, Input, input } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
    @Input() selectedProduct:Product | null = null;

}
