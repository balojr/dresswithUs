import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart-service.service';

@Component({
  selector: 'app-cartcounter',
  templateUrl: './cartcounter.component.html',
  styleUrls: ['./cartcounter.component.scss']
})
export class CartcounterComponent implements OnInit{
  cartItemCount: number = 0;
  
  constructor(private cartService: CartService) {  }

  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe((count: number) => {
      this.cartItemCount = count;
    });
    this.cartService.cartItems$.subscribe((items: string | any[]) => {
      this.cartItemCount = items.length;
    });
  }
  clearCart(): void {
    this.cartService.clearCart();
  }
}
