import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item';
import { CartService } from 'src/app/services/cart-service.service';
import { ItemService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent  implements OnInit{
  items: Item[] | undefined;

  constructor(private http: HttpClient, public itemService: ItemService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }
  addToCart(item: Item): void {
    this.cartService.addToCart(item);
    console.log('Item added to cart successfully!');
  }

}
