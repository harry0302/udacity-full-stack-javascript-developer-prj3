import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink]
})
export class ProductItemDetailComponent {
  product: Product | undefined;
  quantity: number = 1;
  quantityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private route: ActivatedRoute, 
    private productService: ProductService, 
    private cartService: CartService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.product = products.find((product) => product.id === Number(this.route.snapshot.paramMap.get('id')));
    });
  }

  addToCart() {
    this.product!.quantity = Number(this.quantity);
    this.cartService.addItem(this.product!);
    alert('Added to the cart!');
  }
}