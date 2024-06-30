import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink]
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  quantity: number = 1;
  quantityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @Output() addToCartEvent: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  addToCart() {
    this.product!.quantity = Number(this.quantity);
    this.addToCartEvent.emit(this.product!);
  }
}