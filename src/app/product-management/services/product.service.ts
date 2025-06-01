import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      ProductId: 1,
      productName: 'Laptop Dell',
      UnitPrice: 1200,
      UnitsInStock: 15
    },
    {
      ProductId: 2,
      productName: 'Clavier Logitech',
      UnitPrice: 45,
      UnitsInStock: 50
    }
  ];
  constructor() { }

  getAll(): Observable<Product[]> {
    return of(this.products);
  }

  create(product: Product): Observable<void> {
    product.ProductId = Math.max(...this.products.map(x=>x.ProductId))+1;
    this.products.push(product);
    return of();
  }

  update(product: Product): Observable<void> {
    const index = this.products.findIndex(p => p.ProductId === product.ProductId);
    if (index !== -1) {
      this.products[index] = product;
    }
    return of();
  }

  delete(id: number) {
    this.products = this.products.filter(x => x.ProductId !== id);
  }
}
