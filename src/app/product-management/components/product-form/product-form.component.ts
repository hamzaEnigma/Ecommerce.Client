import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  @Input() product: Product = { ProductId: 0, productName: '', UnitPrice: 0, UnitsInStock: 0 };
  @Output() save = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      ProductId: [null],
      productName: ['', Validators.required],
      UnitPrice: [0, [Validators.required, Validators.min(0)]],
      UnitsInStock: [0, [Validators.required, Validators.min(0)]]
    });
  }
  onSubmit() {
    this.save.emit(this.productForm.value);
  }

  onCancel() {
    this.cancel.emit();
  }
}
