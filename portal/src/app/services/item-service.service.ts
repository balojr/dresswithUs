import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemData } from '../models/item-model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor( private httpClient: HttpClient) { }

  private baseUrl = environment.API_ENDPOINT + "/api"

  getOneItem(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/item/' + id, {
      // params: options,
      observe: 'response',
    });
  }
}
