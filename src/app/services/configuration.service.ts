import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";

import { Item } from "../models/item";
import { Producer } from "../models/producer";

@Injectable()
export class ConfigurationService {

  private _items: BehaviorSubject<Array<Item>> = new BehaviorSubject([]);
  readonly items: Observable<Array<Item>> = this._items.asObservable();

  private _producers: BehaviorSubject<Array<Producer>> = new BehaviorSubject([]);
  readonly producers: Observable<Array<Producer>> = this._producers.asObservable();

  updateItems(items: Array<Item>): void {
    this._items.next(items);
  }

  updateProducers(producers: Array<Producer>): void {
    this._producers.next(producers);
  }

}
