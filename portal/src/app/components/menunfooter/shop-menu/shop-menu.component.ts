import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-menu',
  template: `
  <app-cart-counter [cartCount]="cartItems.length"></app-cart-counter>
  `,
  templateUrl: './shop-menu.component.html',
  styleUrls: ['./shop-menu.component.scss']
})
export class ShopMenuComponent {
  cartCount = 0;
  hangerCart = "/../../assets/images/hanger-two.svg"
  cartItems = [
    // array of items in the cart
  ];
}
