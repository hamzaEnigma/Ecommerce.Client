import { orderDetail } from "./order-detail.model";

export interface Order {
    OrderId:number;
    OrderDate?:Date;
    orderDetails:orderDetail[];
}