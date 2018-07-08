import { TimeTable } from "../time-table";
import { Timing } from "../timing";

describe("TimeTable", () => {

  describe("arrayFromJsonArray", () => {

    it("should return an empty array if no json is given", () => {
      expect(TimeTable.arrayFromJsonArray(undefined)).toEqual([]);
      expect(TimeTable.arrayFromJsonArray(null)).toEqual([]);
    });

    it("should return an empty array if an empty array is given", () => {
      expect(TimeTable.arrayFromJsonArray([])).toEqual([]);
    });

    it("should call 'fromJson' for each element in the jsonArray", () => {
      spyOn(TimeTable, "fromJson");
      TimeTable.arrayFromJsonArray([{}, {}]);
      expect(TimeTable.fromJson).toHaveBeenCalledTimes(2);
    });

  });

  describe("fromJson", () => {

    it("should return undefined if no json is given", () => {
      expect(TimeTable.fromJson(undefined)).toEqual(undefined);
      expect(TimeTable.fromJson(null)).toEqual(undefined);
    });

    it("should return an TimeTable instance for the given json", () => {
      const timeTable = TimeTable.fromJson({level: 0});
      expect(timeTable.level).toEqual(0);
      expect(timeTable.timings).toEqual([]);

      const timeTableWithTimings = TimeTable.fromJson(
        {
          level: 0,
          timings: [
            {item_key: "VEGETABLES", production_time_in_seconds: 1200},
            {item_key: "FLOUR_BAG", production_time_in_seconds: 1800}
          ]
        }
      );
      expect(timeTableWithTimings.level).toEqual(0);
      expect(timeTableWithTimings.timings).toEqual([ new Timing("VEGETABLES", 1200), new Timing("FLOUR_BAG", 1800) ]);
    });

  });

});
