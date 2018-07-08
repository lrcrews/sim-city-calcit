import { Timing } from "../timing";

describe("Timing", () => {

  describe("arrayFromJsonArray", () => {

    it("should return an empty array if no json is given", () => {
      expect(Timing.arrayFromJsonArray(undefined)).toEqual([]);
      expect(Timing.arrayFromJsonArray(null)).toEqual([]);
    });

    it("should return an empty array if an empty array is given", () => {
      expect(Timing.arrayFromJsonArray([])).toEqual([]);
    });

    it("should call 'fromJson' for each element in the jsonArray", () => {
      spyOn(Timing, "fromJson");
      Timing.arrayFromJsonArray([{}, {}]);
      expect(Timing.fromJson).toHaveBeenCalledTimes(2);
    });

  });

  describe("fromJson", () => {

    it("should return undefined if no json is given", () => {
      expect(Timing.fromJson(undefined)).toEqual(undefined);
      expect(Timing.fromJson(null)).toEqual(undefined);
    });

    it("should return an Timing instance for the given json", () => {
      const timing = Timing.fromJson({item_key: "FLOUR_BAG", production_time_in_seconds: 1800});
      expect(timing.itemKey).toEqual("FLOUR_BAG");
      expect(timing.productionTimeInSeconds).toEqual(1800);
    });

  });

});
