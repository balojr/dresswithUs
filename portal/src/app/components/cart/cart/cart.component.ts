import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item';
import { CartService } from 'src/app/services/cart-service.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  items: Item[] = [];
  cartItems$!: Observable<Item[]>;
  total: number = 0;
  totalItems: number = 0;
  constructor(private cartService: CartService) {  }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$;
    this.cartItems$.subscribe((items) => {
      this.items = this.cartService.getItems();
      this.total = this.cartService.calculateTotal();
    });
    this.cartService.cartItemCount$.subscribe(count => {
      this.totalItems = count;
    });
  }
  clearCart() {
    this.cartService.clearCart$().subscribe(() => {
      this.items = [];
    });
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
    this.items = this.cartService.getItems();
    this.total = this.cartService.calculateTotal();
  }

  decreaseCartItem(item: any) {
    this.cartService.decreaseCartItem(item);
    this.items = this.cartService.getItems();
    this.total = this.cartService.calculateTotal();
  }

  increaseCartItem(item: any) {
    this.cartService.addToCart(item);
    this.items = this.cartService.getItems();
    this.total = this.cartService.calculateTotal();
  }
}
