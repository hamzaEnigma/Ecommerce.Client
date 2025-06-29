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
quantity: number = 1;
addedToCart: boolean = false;

addToCart(): void {
  // Ici tu peux appeler un service Panier, par exemple
  console.log(`Produit ID ${this.selectedProduct?.productId} ajouté avec quantité ${this.quantity}`);
  this.addedToCart = true;

  // Optionnel : réinitialiser le message après 2s
  setTimeout(() => this.addedToCart = false, 2000);
}
}
