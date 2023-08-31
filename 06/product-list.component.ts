import { Component } from "@angular/core";
import { CartService } from "./cart.service";

@Component({
  selector: "app-product-list",
  template: `
    <div *ngFor="let product of products">
      {{ product }}
      <button (click)="addToCart(product)">Add to Cart</button>
    </div>
  `,
})
export class ProductListComponent {
  products: string[] = ["Product 1", "Product 2", "Product 3"];
  cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = new CartService(); 
  }

  addToCart(product: string) {
    this.cartService.addItem(product); 
    
}
