import { Producer } from "../producer";
import { TimeTable } from "../time-table";

describe("Producer", () => {

  describe("arrayFromJsonArray", () => {

    it("should return an empty array if no json is given", () => {
      expect(Producer.arrayFromJsonArray(undefined)).toEqual([]);
      expect(Producer.arrayFromJsonArray(null)).toEqual([]);
    });

    it("should return an empty array if an empty array is given", () => {
      expect(Producer.arrayFromJsonArray([])).toEqual([]);
    });

    it("should call 'fromJson' for each element in the jsonArray", () => {
      spyOn(Producer, "fromJson");
      Producer.arrayFromJsonArray([{}, {}]);
      expect(Producer.fromJson).toHaveBeenCalledTimes(2);
    });

  });

  describe("fromJson", () => {

    it("should return undefined if no json is given", () => {
      expect(Producer.fromJson(undefined)).toEqual(undefined);
      expect(Producer.fromJson(null)).toEqual(undefined);
    });

    it("should return an Producer instance for the given json", () => {
      const producer = Producer.fromJson(
        {active_queues: 1, image_path: "/farmers_market.png", key: "FARMERS_MARKET", level: 0, name: "Farmer's Market"}
      );
      expect(producer.activeQueues).toEqual(1);
      expect(producer.imagePath).toEqual("/farmers_market.png");
      expect(producer.key).toEqual("FARMERS_MARKET");
      expect(producer.name).toEqual("Farmer's Market");
      expect(producer.timeTables).toEqual([]);

      const producerWithTimeTables = Producer.fromJson(
        {
          active_queues: 1,
          image_path: "/farmers_market.png",
          key: "FARMERS_MARKET",
          level: 0,
          name: "Farmer's Market",
          time_tables: [
            {level: 0, timings: []},
            {level: 1, timings: []}
          ]
        }
      );
      expect(producerWithTimeTables.activeQueues).toEqual(1);
      expect(producerWithTimeTables.imagePath).toEqual("/farmers_market.png");
      expect(producerWithTimeTables.key).toEqual("FARMERS_MARKET");
      expect(producerWithTimeTables.name).toEqual("Farmer's Market");
      expect(producerWithTimeTables.timeTables).toEqual([ new TimeTable(0, []), new TimeTable(1, []) ]);
    });

  });

  describe("isFactory", () => {

    it("should return true if the Producer has more than one active queue", () => {
      const producer = Producer.fromJson(
        {active_queues: 2, image_path: "/small_factory.png", key: "SMALL_FACTORY", level: 0, name: "Small Factory"}
      );
      expect(producer.activeQueues).toEqual(2);
      expect(producer.isFactory()).toBeTruthy();
    });

    it("should return false if the Producer has only one active queue", () => {
      const producer = Producer.fromJson(
        {active_queues: 1, image_path: "/farmers_market.png", key: "FARMERS_MARKET", level: 0, name: "Farmer's Market"}
      );
      expect(producer.activeQueues).toEqual(1);
      expect(producer.isFactory()).toBeFalsy();
    });

    it("should return false if the Producer's activeQueues value is nil", () => {
      const producer = new Producer(undefined, undefined, undefined, undefined, undefined);
      expect(producer.activeQueues).toBeUndefined();
      expect(producer.isFactory()).toBeFalsy();
      producer.activeQueues = null;
      expect(producer.isFactory()).toBeFalsy();
    });

  });

  describe("isShop", () => {

    it("should return true if the Producer has only one active queue", () => {
      const producer = Producer.fromJson(
        {active_queues: 1, image_path: "/farmers_market.png", key: "FARMERS_MARKET", level: 0, name: "Farmer's Market"}
      );
      expect(producer.activeQueues).toEqual(1);
      expect(producer.isShop()).toBeTruthy();
    });

    it("should return false if the Producer has more than one active queue", () => {
      const producer = Producer.fromJson(
        {active_queues: 2, image_path: "/small_factory.png", key: "SMALL_FACTORY", level: 0, name: "Small Factory"}
      );
      expect(producer.activeQueues).toEqual(2);
      expect(producer.isShop()).toBeFalsy();
    });

    it("should return false if the Producer's activeQueues value is nil", () => {
      const producer = new Producer(undefined, undefined, undefined, undefined, undefined);
      expect(producer.activeQueues).toBeUndefined();
      expect(producer.isShop()).toBeFalsy();
      producer.activeQueues = null;
      expect(producer.isShop()).toBeFalsy();
    });

  });

});
