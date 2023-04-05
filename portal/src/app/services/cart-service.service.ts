import { Injectable } from '@angular/core';
import { Item } from '../item';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = [];

  private cartItems: any[] = [];
  private cartItemCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private cartItemCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public cartItemCount$ = this.cartItemCountSubject.asObservable();
  
  private cartItemsSubject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }
  public addToCart(item: any) {
    this.items.push(item);
    // add item to cart
    this.cartItemCountSubject.next(this.cartItemCountSubject.getValue() + 1);
  }
  // addToCart(item: Item) {
  //   this.items.push(item);
  //   this.cartItemCount++;
  // }
  getItems() {
    return this.items;
  }
  getCartItemCount() {
    return this.items.length;
  }
  clearCart() {
    this.cartItems = [];
    this.cartItemCount.next(0);
  }

  clearCart$(): Observable<any> {
    return of(null).pipe(
      tap(() => {
        this.cartItems = [];
        this.cartItemCount.next(0);
      })
    );
  }
  
}
