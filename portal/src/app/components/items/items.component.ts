import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent  implements OnInit{
  items!: any;


  constructor(private http: HttpClient, public itemService: ItemService) { }

  ngOnInit(): void {
    
  }
  viewItem(id: number) {
    const options = {
    };
    this.itemService.getOneItem(id).subscribe((res: any) => {
      console.log('item=>', res.body.data);
      this.items = res.body.data;

    })
  }
  viewItems() {
    const options = {
      
    };
    this.itemService.getAllItems(options).subscribe((res: any) => {
      console.log('items=>', res.body.data);
      this.items = res.body.data;

    })
  }

}
