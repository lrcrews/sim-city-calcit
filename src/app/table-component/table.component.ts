import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

import { ConfigurationService } from "../services/configuration.service";
import { Item } from "../models/item";
import { Producer } from "../models/producer";

import * as _ from "lodash";

@Component({
  selector: "app-table",
  styleUrls: [ "./table.component.scss" ],
  templateUrl: "./table.component.html"
})

export class TableComponent implements OnChanges, OnInit {

  @Input() producer: Producer;

  allItems: Array<Item>;
  productionItems: Array<Item>;

  itemCountsHash = {};

  selectedLevel = 0;

  private _dataLoaded = false;

  constructor(private _configurationService: ConfigurationService) { }

  ngOnInit() {
    this._watchForItems();
  }

  ngOnChanges(changes: SimpleChanges) {
    // first change is undefined since data load isn't complete
    if (!changes.producer.isFirstChange()) {
      this._dataLoaded = true;
    }
  }

  isShop(): boolean {
    return this._dataLoaded && this.producer.isShop();
  }

  itemImageForKey(itemKey: string): string {
    const item = _.find(this.allItems, currentItem => currentItem.key === itemKey);
    return item.imagePath;
  }

  productionTime(item: Item): string {
    let productionTimeString = "";
    let productionTimeInMinutes = this._productionTimeInMinutes(item);
    // Hours
    if (productionTimeInMinutes > 59) {
      const productionHours = Math.floor(productionTimeInMinutes / 60);
      productionTimeString += `${productionHours}h`;
      productionTimeInMinutes = productionTimeInMinutes % 60;
      if (productionTimeInMinutes > 0) {
        productionTimeString += " ";
      }
    }
    // Minutes
    if (productionTimeInMinutes > 0) {
      productionTimeString += `${Math.floor(productionTimeInMinutes)}m`;
    }
    // Seconds
    const productionSeconds = productionTimeInMinutes - Math.floor(productionTimeInMinutes);
    if (productionSeconds > 0) {
      productionTimeString += ` ${productionSeconds}s`;
    }
    return productionTimeString;
  }

  requiredItemsCost(item: Item): number {
    const perUnitCost = _.reduce(item.ingredients, (sum, ingredient) => {
      const ingredientItem = _.find(this.allItems, currentItem => currentItem.key === ingredient.itemKey);
      return sum + ingredientItem.maxPrice * ingredient.requiredAmount;
    }, 0);
    return perUnitCost * this._itemCountModifier(item);
  }

  totalSellPrice(item: Item): number {
    return item.maxPrice * this._itemCountModifier(item);
  }

  totalProfit(item: Item): number {
    return this.totalSellPrice(item) - this.requiredItemsCost(item);
  }

  profitPerMinute(item: Item): number {
    return Math.round((this.totalProfit(item) / this._productionTimeInMinutes(item)) * 100) / 100;
  }

  private _itemCountModifier(item: Item): number {
    return !_.isNil(this.itemCountsHash[item.key]) ? this.itemCountsHash[item.key] : 1;
  }

  private _productionTimeInMinutes(item: Item): number {
    const timeTable = _.find(this.producer.timeTables, table => table.level === this.selectedLevel);
    const timing = _.find(timeTable.timings, currentTiming => currentTiming.itemKey === item.key);
    return timing.productionTimeInSeconds / 60;
  }

  private _watchForItems(): void {
    this._configurationService.items.subscribe( items => {
      this.allItems = items;
      this.productionItems = _.filter(items, item => {
        return _.find(this.producer.timeTables[0].timings, timing => timing.itemKey === item.key) !== undefined;
      });
    });
  }

}
