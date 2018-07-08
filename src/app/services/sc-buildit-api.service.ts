import { Injectable } from "@angular/core";

import { Http, Response } from "@angular/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Item } from "../models/item";

@Injectable()
export class ScBuilditApiService {

  constructor(private http: Http) { }

  items(): Observable<Array<Item>> {
    const url = this._mockItemsJsonPath();
    return this.http.get(url).pipe(map(this._onItemsResponse));
  }

  private _mockItemsJsonPath(): string {
    return "../../assets/items-response.json";
  }

  private _onItemsResponse(response: Response): Array<Item> {
    const json = response.json();
    if (json) {
      return Item.arrayFromJsonArray(json["items"]);
    } else {
      return [];
    }
  }

}
