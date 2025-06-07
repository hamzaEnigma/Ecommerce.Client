import { orderDetail } from "./order-detail.model";

export class order {
    OrderId?:number;
    OrderDate?:Date;
    orderDetails:orderDetail[]= [];
}