import { Product } from "../../product-management/models/product.model";

export interface orderDetail {
    OrderId: number;
    ProductId: number
    Quantity: number;
    Discount?: number;
    SalePrice:number;
    product?:Product
}