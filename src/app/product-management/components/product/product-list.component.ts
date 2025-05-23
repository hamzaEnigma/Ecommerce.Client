import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  
  loadProducts(): void {
    this.productService.getAll().subscribe(data => this.products = data);
  }
  
  saveProduct(product:Product): void {
    this.productService.create(product);
    this.loadProducts();
  }
}
