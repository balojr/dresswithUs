import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemData } from '../models/item-model';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor( private httpClient: HttpClient) { }

  private itemsUrl = 'api/items';

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.itemsUrl).pipe(
      catchError(this.handleError<Item[]>('getItems', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
