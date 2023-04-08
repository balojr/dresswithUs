import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item';
import { CartService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  items: Item[] = [];

  constructor(private cartService: CartService) {  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  // clearCart() {
  //   this.items = this.cartService.getItems();
  // }
  clearCart() {
    this.cartService.clearCart$().subscribe(() => {
      this.items = [];
    });
  }

}
