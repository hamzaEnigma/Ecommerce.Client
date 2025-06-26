import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl ='https://localhost:7228/api/Product/';
  selectedProduct: Product | null = null;
  private products: Product[] = [
    {
      ProductId: 1,
      productName: 'Laptop Dell',
      UnitPrice: 1200,
      unitsInStock: 15,
      purchasePrice : 100
    },
    {
      ProductId: 2,
      productName: 'Clavier Logitech',
      UnitPrice: 45,
      unitsInStock: 50,
      purchasePrice : 150

    }
  ];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl+'GetAll');
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
