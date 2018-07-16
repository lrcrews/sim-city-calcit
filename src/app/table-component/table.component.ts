import { Component, Input, OnInit } from "@angular/core";

import { ConfigurationService } from "../services/configuration.service";
import { Ingredient } from "../models/ingredient";
import { Item } from "../models/item";
import { Producer } from "../models/producer";

import * as _ from "lodash";

@Component({
  selector: "app-table",
  styleUrls: [ "./table.component.scss" ],
  templateUrl: "./table.component.html"
})

export class TableComponent implements OnInit {

  @Input() producer: Producer;

  allItems: Array<Item>;
  productionItems: Array<Item>;

  itemCountsHash = {};

  selectedBoostMultiplier = 1;
  selectedLevel = 0;

  constructor(private _configurationService: ConfigurationService) { }

  ngOnInit() {
    this._watchForItems();
  }

  itemImageForKey(itemKey: string): string {
    const item = _.find(this.allItems, currentItem => currentItem.key === itemKey);
    return item.imagePath;
  }

  setLevel(value: number): void {
    this.selectedLevel = value;
  }

  boostMultiplierActive(value: number): boolean {
    return this.selectedBoostMultiplier === value;
  }

  updateBoostMultiplier(value: number): void {
    if (this.boostMultiplierActive(value)) {
      this.selectedBoostMultiplier = 1;
    } else {
      this.selectedBoostMultiplier = value;
    }
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
    if (Math.floor(productionTimeInMinutes) > 0) {
      productionTimeString += `${Math.floor(productionTimeInMinutes)}m`;
    }
    // Seconds
    const productionSeconds = productionTimeInMinutes - Math.floor(productionTimeInMinutes);
    if (productionSeconds > 0) {
      productionTimeString += ` ${Math.floor(productionSeconds * 60)}s`;
    }
    return productionTimeString;
  }

  requiredItemsCost(item: Item): number {
    const perUnitCost = _.reduce(item.ingredients, (sum, ingredient) => {
      const ingredientItem = _.find(this.allItems, currentItem => currentItem.key === ingredient.itemKey);
      return sum + ingredientItem.maxPrice * ingredient.requiredAmount;
    }, 0);
    return perUnitCost * this.itemCountsHash[item.key];
  }

  requiredAmount(item: Item, ingredient: Ingredient): number {
    return ingredient.requiredAmount * this.itemCountsHash[item.key];
  }

  noIngredients(item): boolean {
    return _.isEmpty(item.ingredients);
  }

  totalSellPrice(item: Item): number {
    return item.maxPrice * this.itemCountsHash[item.key];
  }

  totalProfit(item: Item): number {
    return this.totalSellPrice(item) - this.requiredItemsCost(item);
  }

  profitPerMinute(item: Item): number {
    const profitPerMinute = Math.round((this.totalProfit(item) / this._productionTimeInMinutes(item)) * 100) / 100;
    return !_.isNaN(profitPerMinute) ? profitPerMinute : 0;
  }

  private _productionTimeInMinutes(item: Item): number {
    const timeTable = _.find(this.producer.timeTables, table => table.level === this.selectedLevel);
    const timing = _.find(timeTable.timings, currentTiming => currentTiming.itemKey === item.key);
    if (this.producer.isShop()) {
      return ((timing.productionTimeInSeconds / 60) / this.selectedBoostMultiplier) * this.itemCountsHash[item.key];
    } else { // It's a Factory
      const groupedItemsCount = Math.ceil(this.itemCountsHash[item.key] / this.producer.activeQueues);
      return (timing.productionTimeInSeconds / 60) * groupedItemsCount;
    }
  }

  private _watchForItems(): void {
    this._configurationService.items.subscribe( items => {
      this.allItems = items;
      this.productionItems = _.filter(items, item => {
        this.itemCountsHash[ item.key ] = 1;
        return _.find(this.producer.timeTables[0].timings, timing => timing.itemKey === item.key) !== undefined;
      });
    });
  }

}
