export interface Product {
  ProductId: number;
  productName: string;
  UnitPrice?: number;
  purchasePrice?:number;
  unitsInStock?: number;
  categoryId?:number;

}