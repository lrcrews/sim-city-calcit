import * as _ from "lodash";

export class Ingredient {

  static arrayFromJsonArray(jsonArray: Array<any>): Array<Ingredient> {
    if (!_.isEmpty(jsonArray)) {
      const ingredients = [];
      _.each(jsonArray, json => {
        const ingredient = Ingredient.fromJson(json);
        if (!_.isNil(ingredient)) {
          ingredients.push(ingredient);
        }
      });
      return ingredients;
    } else {
      return [];
    }
  }

  static fromJson(json: any): Ingredient | undefined {
    if (!_.isEmpty(json)) {
      return new Ingredient(
        json["item_key"],
        json["required_amount"]
      );
    } else {
      return undefined;
    }
  }

  constructor(
    // Unique identifier of the Item corresponding to the "productionTime" value
    public itemKey: string,
    // The number of Items required
    public requireAmount: number
  ) {}

}
