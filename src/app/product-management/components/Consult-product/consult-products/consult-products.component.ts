import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-consult-products',
  standalone: false,
  templateUrl: './consult-products.component.html',
  styleUrl: './consult-products.component.css',
})
export class ConsultProductsComponent {
  
get selectedProduct() {
  return this.productService.selectedProduct;
}

constructor(private productService: ProductService) { }

handleSelectProduct(productid: number){
    this.productService.getProductById(productid).subscribe(product =>{
      this.productService.selectedProduct = product;
    })
}

}
