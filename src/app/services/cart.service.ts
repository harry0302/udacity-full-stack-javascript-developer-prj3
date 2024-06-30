import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  total: number = 0;
  name: string = '';

  constructor() {}

  addItem(product: Product) {
    let existingItem = this.items.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      this.items.push(product);
    }
    this.calculateTotal();
  }

  updateItem(product: Product) {
    let existingItem = this.items.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity = product.quantity;

      if (existingItem.quantity === 0) {
        this.removeItem(product);
      }
    }
    this.calculateTotal();
  }

  removeItem(product: Product) {
    this.items = this.items.filter((item) => item.id !== product.id);
    window.alert('Item removed from cart.');
  }

  clearCart() {
    this.items = [];
    this.total = 0;
    this.name = '';
  }

  updateName(name: string) {
    this.name = name;
  }

  calculateTotal() {
    this.total = 0;
    this.items.forEach((item) => {
      this.total += item.price * item.quantity;
    });
  }
}