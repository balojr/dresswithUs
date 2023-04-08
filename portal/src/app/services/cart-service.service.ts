// import { Injectable } from '@angular/core';
// import { Item } from '../item';
// import { BehaviorSubject, Observable, of, tap } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   items: Item[] = [];
//
//   private cartItemCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
//   public cartItemCount$ = this.cartItemCountSubject.asObservable();
//
//   private cartItemsSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
//   public cartItems$ = this.cartItemsSubject.asObservable();
//
//   constructor() { }
//
//   public addToCart(item: any) {
//     this.items.push(item);
//     // add item to cart
//     this.cartItemCountSubject.next(this.cartItemCountSubject.getValue() + 1);
//   }
//
//   getItems() {
//     return this.items;
//   }
//
//   getCartItemCount() {
//     return this.cartItemCountSubject.getValue();
//   }
//
//   clearCart() {
//     this.items = [];
//     this.cartItemCountSubject.next(0);
//   }
//
//   clearCart$(): Observable<any> {
//     return of(null).pipe(
//       tap(() => {
//         this.clearCart();
//       })
//     );
//   }
//
// }


import { Injectable } from '@angular/core';
import { Item } from '../item';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { [key: number]: { item: Item, quantity: number } } = {};

  private cartItemsSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();
  private cartItemCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public cartItemCount$ = this.cartItemCount.asObservable();

  constructor() { }

  public addToCart(item: Item) {
    if (this.cartItems[item.id]) {
      this.cartItems[item.id].quantity += 1;
    } else {
      this.cartItems[item.id] = { item, quantity: 1 };
    }
    // update cartItemCount
    this.cartItemCount.next(this.cartItemCount.getValue() + 1);
  }

  public decreaseCartItem(item: Item) {
    if (this.cartItems[item.id]) {
      this.cartItems[item.id].quantity -= 1;
      if (this.cartItems[item.id].quantity <= 0) {
        delete this.cartItems[item.id];
      }
      // update cartItemCount
      this.cartItemCount.next(this.cartItemCount.getValue() - 1);
    }
  }

  public removeCartItem(item: Item) {
    if (this.cartItems[item.id]) {
      const itemQuantity = this.cartItems[item.id].quantity;
      delete this.cartItems[item.id];
      // update cartItemCount
      this.cartItemCount.next(this.cartItemCount.getValue() - itemQuantity);
    }
  }

  public increaseCartItem(item: Item) {
    if (this.cartItems[item.id]) {
      this.cartItems[item.id].quantity += 1;
    } else {
      this.cartItems[item.id] = { item, quantity: 1 };
    }
    // update cartItemCount
    this.cartItemCount.next(this.cartItemCount.getValue() + 1);
  }

  public getItems() {
    return Object.values(this.cartItems).map(cartItem => ({
      ...cartItem.item,
      quantity: cartItem.quantity
    }));
  }

  public getCartItemCount() {
    return this.cartItemCount.getValue();
  }

  public calculateTotal() {
    return Object.values(this.cartItems).reduce(
      (total, cartItem) => {
        return total + cartItem.item.itemPrice * cartItem.quantity;
      }, 0
    );
  }

  public clearCart() {
    this.cartItems = {};
    this.cartItemCount.next(0);
  }

  public clearCart$(): Observable<any> {
    return of(null).pipe(
      tap(() => {
        this.clearCart();
      })
    );
  }

  // public addToCart(item: Item) {
  //   if (this.cartItems[item.id]) {
  //     this.cartItems[item.id].quantity += 1;
  //   } else {
  //     this.cartItems[item.id] = { item, quantity: 1 };
  //   }
  //   // update cartItemCount
  //   this.cartItemCount.next(this.cartItemCount.getValue() + 1);
  // }
  //
  // getItems() {
  //   return Object.values(this.cartItems).map(cartItem => ({
  //     ...cartItem.item,
  //     quantity: cartItem.quantity
  //   }));
  // }
  //
  // getCartItemCount() {
  //   return this.cartItemCount.getValue();
  // }
  //
  // clearCart() {
  //   this.cartItems = {};
  //   this.cartItemCount.next(0);
  // }
  //
  // clearCart$(): Observable<any> {
  //   return of(null).pipe(
  //     tap(() => {
  //       this.clearCart();
  //     })
  //   );
  // }

}




// import { Injectable } from '@angular/core';
// import { Item } from '../item';
// import { BehaviorSubject, Observable, of, tap } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   items: Item[] = [];
//
//   private cartItems: any[] = [];
//   private cartItemCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
//
//   private cartItemCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
//   public cartItemCount$ = this.cartItemCountSubject.asObservable();
//
//   private cartItemsSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
//   public cartItems$ = this.cartItemsSubject.asObservable();
//
//   constructor() { }
//   public addToCart(item: any) {
//     this.items.push(item);
//     // add item to cart
//     this.cartItemCountSubject.next(this.cartItemCountSubject.getValue() + 1);
//   }
//   // addToCart(item: Item) {
//   //   this.items.push(item);
//   //   this.cartItemCount++;
//   // }
//   getItems() {
//     return this.items;
//   }
//   getCartItemCount() {
//     return this.items.length;
//   }
//   clearCart() {
//     this.cartItems = [];
//     this.cartItemCount.next(0);
//   }
//
//   clearCart$(): Observable<any> {
//     return of(null).pipe(
//       tap(() => {
//         this.clearCart();
//       })
//     );
//   }
//
// }
