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
  hangerCart = "/../../assets/images/hanger-two.svg"
  
}
