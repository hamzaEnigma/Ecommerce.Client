import { Product } from "../../product-management/models/product.model";

export interface orderDetail {
    OrderId?: number;
    productId?: number
    Quantity: number;
    Discount?: number;
    SalePrice:number;
    product?:Product
}