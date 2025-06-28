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
      productId: 1,
      productName: 'Laptop Dell',
      unitPrice: 1200,
      unitsInStock: 15,
      purchasePrice : 100
    },
    {
      productId: 2,
      productName: 'Clavier Logitech',
      unitPrice: 45,
      unitsInStock: 50,
      purchasePrice : 150

    }
  ];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl+'GetAll');
  }

  getProductById(id:number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl+id+'?includeCategory=true');
  }

  create(product: Product): Observable<void> {
    product.productId = Math.max(...this.products.map(x=>x.productId))+1;
    this.products.push(product);
    return of();
  }

  update(product: Product): Observable<void> {
    const index = this.products.findIndex(p => p.productId === product.productId);
    if (index !== -1) {
      this.products[index] = product;
    }
    return of();
  }

  delete(id: number) {
    this.products = this.products.filter(x => x.productId !== id);
  }
}
