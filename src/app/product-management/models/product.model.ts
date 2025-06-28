import { Category } from "./category.model";

export interface Product {
  productId: number;
  productName: string;
  unitPrice?: number;
  purchasePrice?:number;
  unitsInStock?: number;
  categoryId?:number;
  category?: Category
}