import { Component, Input, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { orderDetail } from '../../../../orders/models/order-detail.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
@Input() selectedProduct:Product | undefined = undefined;
quantity: number = 1;
addedToCart: boolean = false;

constructor(private productService: ProductService) {  
}
addToCart(): void {
  console.log(`Produit ID ${this.selectedProduct?.productId} ajouté avec quantité ${this.quantity}`);
  const order:orderDetail = {
    product: this.selectedProduct,
    OrderId: undefined,
    productId: this.selectedProduct?.productId,
    Quantity: this.quantity,
    SalePrice: 0
  }
  this.addedToCart = true;
  this.productService.setPanier(order);
}
}
