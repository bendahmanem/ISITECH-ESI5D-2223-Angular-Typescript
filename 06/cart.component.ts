import { Component } from "@angular/core";
import { CartService } from "./cart.service";

@Component({
  selector: "app-cart",
  template: `
    <h2>Shopping Cart</h2>
    <ul>
      <li *ngFor="let item of cartItems">{{ item }}</li>
    </ul>
  `,
})
export class CartComponent {
  cartItems: string[] = [];

  constructor(cartService: CartService) {
    this.cartItems = cartService.items; // Flawed: Directly accessing items property
  }
}
