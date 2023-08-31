import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}
