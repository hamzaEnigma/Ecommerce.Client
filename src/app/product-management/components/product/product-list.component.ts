import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime, Observable, of, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Output() selectProductEvent = new EventEmitter<number>();
  products: Product[] = [];
  searchProductFormControl:FormControl = new FormControl<string>('');
  filteredProducts$ : Observable<Product[]> = this.searchProductFormControl.valueChanges.pipe(
    startWith(''),
    debounceTime(400),
    switchMap((data : string |null) : Observable<Product[]>=>{
      const searchData = (data === null) ? '' : data;
      return this.search(searchData)
    })
  )
  isActive = true;
  showModal = false;
  get selectedProduct() {
    return this.productService.selectedProduct;
  }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAll().subscribe(data =>{
      if(data){
        this.products = data;
      }   
    } );
  }

  search(searchData:string):Observable<Product[]>{
     const filteredData = this.products.filter((item: Product) =>
        item.productName.toLowerCase().includes(searchData.toLowerCase()) 
      );
      return of(filteredData);  
  }

  saveProduct(product: Product): void {
    this.productService.create(product).subscribe(() => {
      this.loadProducts();
    });
  }

  openModal(product?: Product): void {
    //this.selectedProduct = product ? { ...product } : { productId: 0, productName: '', unitPrice: 0, unitsInStock: 0 };
    this.showModal = true;
  }

  closeModal(): void {
    console.log('closing ...');
    this.showModal = false;
    //this.selectedProduct = null;
  }

  handleFormSubmit(product: Product): void {
    const obs = product.productId === 0
      ? this.productService.create(product)
      : this.productService.update(product);
    console.log('obs', obs);

    obs.subscribe(() => {
      console.log('loading products');
      this.loadProducts();
    });
    this.closeModal();
  }

  deleteProduct(id: number): void {
    this.productService.delete(id);
    this.loadProducts();
  }

  selectProduct(event$:Product){
    if(event$){
    this.productService.selectedProduct = event$
    const productId = this.productService.selectedProduct.productId;
    this.selectProductEvent.emit(productId)     
    }
  }
}
