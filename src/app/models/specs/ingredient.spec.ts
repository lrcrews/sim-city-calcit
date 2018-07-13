import { Ingredient } from "../ingredient";

describe("Ingredient", () => {

  describe("arrayFromJsonArray", () => {

    it("should return an empty array if no json is given", () => {
      expect(Ingredient.arrayFromJsonArray(undefined)).toEqual([]);
      expect(Ingredient.arrayFromJsonArray(null)).toEqual([]);
    });

    it("should return an empty array if an empty array is given", () => {
      expect(Ingredient.arrayFromJsonArray([])).toEqual([]);
    });

    it("should call 'fromJson' for each element in the jsonArray", () => {
      spyOn(Ingredient, "fromJson");
      Ingredient.arrayFromJsonArray([{}, {}]);
      expect(Ingredient.fromJson).toHaveBeenCalledTimes(2);
    });

  });

  describe("fromJson", () => {

    it("should return undefined if no json is given", () => {
      expect(Ingredient.fromJson(undefined)).toEqual(undefined);
      expect(Ingredient.fromJson(null)).toEqual(undefined);
    });

    it("should return an Ingredient instance for the given json", () => {
      const ingredient = Ingredient.fromJson({item_key: "SEEDS", required_amount: 2});
      expect(ingredient.itemKey).toEqual("SEEDS");
      expect(ingredient.requiredAmount).toEqual(2);
    });

  });

});
