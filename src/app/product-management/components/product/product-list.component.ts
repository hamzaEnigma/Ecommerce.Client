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
  showModal = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAll().subscribe(data => this.products = data);
  }

  saveProduct(product: Product): void {
    this.productService.create(product).subscribe(() => {
      this.loadProducts();
    });
  }

  openModal(product?: Product): void {
    this.selectedProduct = product ? { ...product } : { ProductId: 0, productName: '', UnitPrice: 0, UnitsInStock: 0 };
    this.showModal = true;
  }

  closeModal(): void {
    console.log('closing ...');
    this.showModal = false;
    this.selectedProduct = null;
  }

  handleFormSubmit(product: Product): void {
    const obs = product.ProductId === 0
      ? this.productService.create(product)
      : this.productService.update(product);
    console.log('obs', obs);

    obs.subscribe(() => {
      console.log('loading products');
      this.loadProducts();
    });
    this.closeModal();
  }

  deleteProduct(id: number): void {
    this.productService.delete(id);
    this.loadProducts();
  }
}
