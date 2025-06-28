import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../product-management/models/product.model';
import { Router } from '@angular/router';
import { ProductService } from '../../product-management/services/product.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-form',
  standalone: false,
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css',
})
export class OrderFormComponent {
  orderForm!: FormGroup;
  products: Product[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private orderService: OrdersService
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    });
    this.orderForm = this.fb.group({
      OrderId: [this.generateId(), Validators.required],
      OrderDate: [new Date(), Validators.required],
      orderDetails: this.fb.array([]),
    });
  }
  get orderDetails(): FormArray {
    return this.orderForm.get('orderDetails') as FormArray;
  }

  addDetail(): void {
    const detailGroup = this.fb.group({
      OrderId: this.orderForm.get('OrderId')?.value,
      productId: [null, Validators.required],
      Quantity: [1, Validators.required],
      Discount: [0, [Validators.min(0.00), Validators.max(0.5)]],
      SalePrice: [0, Validators.required],
      product: [null as any],
    });

    // When product changes, auto-calculate SalePrice = PurchasePrice + 10%
    detailGroup.get('productId')?.valueChanges.subscribe((productId) => {
      const selectedProduct = this.products.find(
        (p) => p.productId === productId
      );
      if (selectedProduct && selectedProduct.purchasePrice) {
        var salePrice = +(selectedProduct.purchasePrice * 1.1).toFixed(2);
        detailGroup.get('SalePrice')?.setValue(salePrice);
        detailGroup.get('product')?.setValue(selectedProduct);
        detailGroup.get('Discount')?.valueChanges.subscribe((discount) => {
          if (typeof discount === 'number') {
            const adjusted = +(salePrice * (1 - discount)).toFixed(2);
            detailGroup.get('SalePrice')?.setValue(adjusted);
          }
        });
      }
    });
    // listen to discount changes

    this.orderDetails.push(detailGroup);
  }

  removeDetail(index: number): void {
    this.orderDetails.removeAt(index);
  }

  submit(): void {
    if (!this.orderForm.valid) {
      return;
    }
    const order = this.orderForm.value;
    order.orderDetails.forEach((d: any) => {
      d.product =
        this.products.find((p) => p.productId === d.productId) || null;
    });
    console.log('this is my form', this.orderForm.value);

    this.orderService.addOrder(order);
    this.router.navigate(['/orders']);
  }

  cancel(): void {
    this.router.navigate(['/orders']);
  }

  private generateId(): number {
    var res: number = -1;
    this.orderService.getOrders().subscribe((x) => {
      const orders = x;
      const maxId =
        orders.length > 0 ? Math.max(...orders.map((o) => o.OrderId)) : 0;
      res = maxId + 1;
    });
    return res;
  }
}
