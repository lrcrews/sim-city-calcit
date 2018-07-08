import { Ingredient } from "./ingredient";

import * as _ from "lodash";

export class Item {

  static arrayFromJsonArray(jsonArray: Array<any>): Array<Item> {
    if (!_.isEmpty(jsonArray)) {
      const items = [];
      _.each(jsonArray, json => {
        const item = Item.fromJson(json);
        if (!_.isNil(item)) {
          items.push(item);
        }
      });
      return items;
    } else {
      return [];
    }
  }

  static fromJson(json: any): Item | undefined {
    if (!_.isEmpty(json)) {
      return new Item(
        json["image_path"],
        Ingredient.arrayFromJsonArray(json["ingredients"]),
        json["key"],
        json["market_price"],
        json["max_price"],
        json["name"]
      );
    } else {
      return undefined;
    }
  }

  constructor(
    // The path to the image
    public imagePath: string,
    // List of Ingredients required to produce this Item (could be empty)
    public ingredients: Array<Ingredient>,
    // Unique identifier expected to be the same across environments
    public key: string,
    // Default/Initial listing price in "Simoleons"
    public marketPrice: number,
    // Highest allowed listing price in "Simoleons"
    public maxPrice: number,
    // The display name
    public name: string
  ) {}

}
