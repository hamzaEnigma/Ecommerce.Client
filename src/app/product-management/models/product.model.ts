export interface Product {
  ProductId: number;
  productName: string;
  UnitPrice?: number;
  PurchasePrice?:number;
  UnitsInStock?: number;
  categoryId?:number;

}