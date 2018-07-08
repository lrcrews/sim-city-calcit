import { Ingredient } from "../ingredient";
import { Item } from "../item";

describe("Item", () => {

  describe("arrayFromJsonArray", () => {

    it("should return an empty array if no json is given", () => {
      expect(Item.arrayFromJsonArray(undefined)).toEqual([]);
      expect(Item.arrayFromJsonArray(null)).toEqual([]);
    });

    it("should return an empty array if an empty array is given", () => {
      expect(Item.arrayFromJsonArray([])).toEqual([]);
    });

    it("should call 'fromJson' for each element in the jsonArray", () => {
      spyOn(Item, "fromJson");
      Item.arrayFromJsonArray([{}, {}]);
      expect(Item.fromJson).toHaveBeenCalledTimes(2);
    });

  });

  describe("fromJson", () => {

    it("should return undefined if no json is given", () => {
      expect(Item.fromJson(undefined)).toEqual(undefined);
      expect(Item.fromJson(null)).toEqual(undefined);
    });

    it("should return an Item instance for the given json", () => {
      const item = Item.fromJson(
        {image_path: "/flour_bag.png", key: "FLOUR_BAG", market_price: 437, max_price: 570, name: "Flour Bag"}
      );
      expect(item.imagePath).toEqual("/flour_bag.png");
      expect(item.ingredients).toEqual([]);
      expect(item.key).toEqual("FLOUR_BAG");
      expect(item.marketPrice).toEqual(437);
      expect(item.maxPrice).toEqual(570);
      expect(item.name).toEqual("Flour Bag");

      const itemWithIngredients = Item.fromJson(
        {
          image_path: "/flour_bag.png",
          ingredients: [
            {item_key: "SEEDS", required_amount: 2},
            {item_key: "TEXTILES", required_amount: 2}
          ],
          key: "FLOUR_BAG",
          market_price: 437,
          max_price: 570,
          name: "Flour Bag"}
      );
      expect(itemWithIngredients.imagePath).toEqual("/flour_bag.png");
      expect(itemWithIngredients.ingredients).toEqual([ new Ingredient("SEEDS", 2), new Ingredient("TEXTILES", 2) ]);
      expect(itemWithIngredients.key).toEqual("FLOUR_BAG");
      expect(itemWithIngredients.marketPrice).toEqual(437);
      expect(itemWithIngredients.maxPrice).toEqual(570);
      expect(itemWithIngredients.name).toEqual("Flour Bag");
    });

  });

});
