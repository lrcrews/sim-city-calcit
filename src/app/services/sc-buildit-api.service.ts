import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Item } from "../models/item";
import { Producer } from "../models/producer";

@Injectable()
export class ScBuilditApiService {

  constructor(private _http: HttpClient) { }

  items(): Observable<Array<Item>> {
    const url = this._mockItemsJsonPath();
    return this._http.get(url).pipe(map(this._onItemsResponse));
  }

  producers(): Observable<Array<Producer>> {
    const url = this._mockProducersJsonPath();
    return this._http.get(url).pipe(map(this._onProducersResponse));
  }

  private _mockItemsJsonPath(): string {
    return "../../assets/items-response.json";
  }

  private _mockProducersJsonPath(): string {
    return "../../assets/producers-response.json";
  }

  private _onItemsResponse(response): Array<Item> {
    if (response) {
      return Item.arrayFromJsonArray(response["items"]);
    } else {
      return [];
    }
  }

  private _onProducersResponse(response): Array<Producer> {
    if (response) {
      return Producer.arrayFromJsonArray(response["producers"]);
    } else {
      return [];
    }
  }

}
