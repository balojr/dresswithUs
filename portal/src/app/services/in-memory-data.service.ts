import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1, itemName: 'Hoodie 1 Black Printed', itemPrice: 4000, itemImage: '/assets/images/hoodie1.webp', quantity: 0 },
      { id: 3, itemName: 'Hoodie 3 Black Printed', itemPrice: 4190, itemImage: '/assets/images/hoodie3.webp', quantity: 0  },
      { id: 8, itemName: 'Shorts 1 Printed', itemPrice: 2000, itemImage: '/assets/images/short1.webp', quantity: 0  },
      { id: 9, itemName: 'Shiesty Mask', itemPrice: 1500, itemImage: '/assets/images/clava1.webp', quantity: 0 },
      { id: 10, itemName: 'Lanyard', itemPrice: 1000, itemImage: '/assets/images/lanyard1.webp', quantity: 0},
      { id: 11, itemName: 'Beenie', itemPrice: 800, itemImage: '/assets/images/beenie1.webp', quantity: 0 },
      { id: 2, itemName: 'Hoodie 2 Black Printed', itemPrice: 4090, itemImage: '/assets/images/hoodie2.webp', quantity: 0  },
      { id: 4, itemName: 'Hoodie 4 Printed', itemPrice: 4290, itemImage: '/assets/images/hoodie4.webp', quantity: 0  },
      { id: 6, itemName: 'Tee 2 Printed', itemPrice: 2100, itemImage: '/assets/images/tee2.webp' , quantity: 0 },
      { id: 7, itemName: 'Tee 3 Printed', itemPrice: 2200, itemImage: '/assets/images/tee3.webp', quantity: 0  },
      { id: 8, itemName: 'Tee 4 Printed', itemPrice: 2300, itemImage: '/assets/images/tee4.webp', quantity: 0 },
      { id: 5, itemName: 'Tee 1 Printed', itemPrice: 2000, itemImage: '/assets/images/tee1.webp', quantity: 0  },
      { id: 12, itemName: 'Tee 5 Printed', itemPrice: 2100, itemImage: '/assets/images/tee5.webp', quantity: 0  },

    ];
    return {items};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the items array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // item id + 1.
  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;
  }
  getAllItems(): Item[] {
    const items = this.createDb().items;
    return items;
  }
}
