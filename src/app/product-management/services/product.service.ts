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
  
  getAll():Observable<Product[]>{
      return of(this.products);
  }

  create(product: Product){
    this.products.push(product);
  }
}
