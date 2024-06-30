import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class ConfirmationComponent {
  name: string = '';
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.name = this.cartService.name;
    this.total = this.cartService.total;
    this.cartService.clearCart();
  }
}