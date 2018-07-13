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
        {active_queues: 1, image_path: "/farmers_market.png", key: "FARMERS_MARKET", name: "Farmer's Market"}
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
        {active_queues: 2, image_path: "/small_factory.png", key: "SMALL_FACTORY", name: "Small Factory"}
      );
      expect(producer.activeQueues).toEqual(2);
      expect(producer.isFactory()).toBeTruthy();
    });

    it("should return false if the Producer has only one active queue", () => {
      const producer = Producer.fromJson(
        {active_queues: 1, image_path: "/farmers_market.png", key: "FARMERS_MARKET", name: "Farmer's Market"}
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
        {active_queues: 1, image_path: "/farmers_market.png", key: "FARMERS_MARKET", name: "Farmer's Market"}
      );
      expect(producer.activeQueues).toEqual(1);
      expect(producer.isShop()).toBeTruthy();
    });

    it("should return false if the Producer has more than one active queue", () => {
      const producer = Producer.fromJson(
        {active_queues: 2, image_path: "/small_factory.png", key: "SMALL_FACTORY", name: "Small Factory"}
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

  describe("itemTimeInSeconds", () => {

    it("should return the production time, in seconds, for the given item key", () => {
      const producer = Producer.fromJson(
        {
          active_queues: 2,
          image_path: "/small_factory.png",
          key: "SMALL_FACTORY",
          name: "Small Factory",
          time_tables: [
            {
              level: 0,
              timings: [
                {
                  item_key: "METAL",
                  production_time_in_seconds: 60
                },
                {
                  item_key: "WOOD",
                  production_time_in_seconds: 180
                }
              ]
            }
          ]
        }
      );
      // Only passing itemKey parameter as factories won't need to pass
      // producerLevel nor speedModifier as those values only apply to shops.
      //
      // This test is therefore also confirming the ability to make this
      // call in such a manner.
      //
      expect(producer.itemTimeInSeconds("METAL")).toEqual(60);
      expect(producer.itemTimeInSeconds("WOOD")).toEqual(180);
    });

    it("should return the production time based on the Producer's level", () => {
      const producer = Producer.fromJson(
        {
          active_queues: 1,
          image_path: "/farmers_market.png",
          key: "FARMERS_MARKET",
          name: "Farmer's Market",
          time_tables: [
            {
              level: 0,
              timings: [
                {
                  item_key: "FLOUR_BAG",
                  production_time_in_seconds: 1800
                }
              ]
            },
            {
              level: 1,
              timings: [
                {
                  item_key: "FLOUR_BAG",
                  production_time_in_seconds: 1620
                }
              ]
            },
            {
              level: 2,
              timings: [
                {
                  item_key: "FLOUR_BAG",
                  production_time_in_seconds: 1530
                }
              ]
            },
            {
              level: 3,
              timings: [
                {
                  item_key: "FLOUR_BAG",
                  production_time_in_seconds: 1440
                }
              ]
            }
          ]
        }
      );
      // Only passing itemKey and producerLevel parameters as shops won't
      // need to pass speedModifier when no "token" is being considered.
      //
      // This test is therefore also confirming the ability to make this
      // call in such a manner.
      //
      expect(producer.itemTimeInSeconds("FLOUR_BAG")).toEqual(1800);
      expect(producer.itemTimeInSeconds("FLOUR_BAG", 0)).toEqual(1800);
      expect(producer.itemTimeInSeconds("FLOUR_BAG", 1)).toEqual(1620);
      expect(producer.itemTimeInSeconds("FLOUR_BAG", 2)).toEqual(1530);
      expect(producer.itemTimeInSeconds("FLOUR_BAG", 3)).toEqual(1440);
    });

    it("should return the production time based on the given speedModifier", () => {
      const producer = Producer.fromJson(
        {
          active_queues: 1,
          image_path: "/farmers_market.png",
          key: "FARMERS_MARKET",
          name: "Farmer's Market",
          time_tables: [
            {
              level: 0,
              timings: [
                {
                  item_key: "FLOUR_BAG",
                  production_time_in_seconds: 1800
                }
              ]
            }
          ]
        }
      );
      expect(producer.itemTimeInSeconds("FLOUR_BAG", 0, 2)).toEqual(900);
      expect(producer.itemTimeInSeconds("FLOUR_BAG", 0, 4)).toEqual(450);
      expect(producer.itemTimeInSeconds("FLOUR_BAG", 0, 12)).toEqual(150);
    });

  });

  it("should log a warning and return undefined if a TimeTable is not found", () => {
    spyOn(console, "warn");
    const producer = Producer.fromJson(
      {active_queues: 1, image_path: "/farmers_market.png", key: "FARMERS_MARKET", name: "Farmer's Market"}
    );
    expect(producer.itemTimeInSeconds("FLOUR_BAG")).toBeUndefined();
    expect(console.warn).toHaveBeenCalledWith(
      "[FARMERS_MARKET] TimeTable not found for producerLevel: 0"
    );
    expect(producer.itemTimeInSeconds("FLOUR_BAG", 4)).toBeUndefined();
    expect(console.warn).toHaveBeenCalledWith(
      "[FARMERS_MARKET] TimeTable not found for producerLevel: 4"
    );
  });

  it("should log a warning and return undefined if a Timing is not found", () => {
    spyOn(console, "warn");
    const producer = Producer.fromJson(
      {
        active_queues: 1,
        image_path: "/farmers_market.png",
        key: "FARMERS_MARKET",
        name: "Farmer's Market",
        time_tables: [
          {
            level: 0,
            timings: [
              {
                item_key: "FLOUR_BAG",
                production_time_in_seconds: 1800
              }
            ]
          }
        ]
      }
    );
    expect(producer.itemTimeInSeconds("NOT_A_THING")).toBeUndefined();
    expect(console.warn).toHaveBeenCalledWith(
      "[FARMERS_MARKET] Timing not found for itemKey: NOT_A_THING"
    );
  });

  it("should log a warning and return undefined if the speedModifier is NaN or less than 1", () => {
    spyOn(console, "warn");
    const producer = Producer.fromJson(
      {
        active_queues: 1,
        image_path: "/farmers_market.png",
        key: "FARMERS_MARKET",
        name: "Farmer's Market",
        time_tables: [
          {
            level: 0,
            timings: [
              {
                item_key: "FLOUR_BAG",
                production_time_in_seconds: 1800
              }
            ]
          }
        ]
      }
    );
    expect(producer.itemTimeInSeconds("FLOUR_BAG", 0, null)).toBeUndefined();
    expect(console.warn).toHaveBeenCalledWith(
      "[FARMERS_MARKET] Given speedModifier: null, is NaN or less than 1."
    );
    expect(producer.itemTimeInSeconds("FLOUR_BAG", 0, 0)).toBeUndefined();
    expect(console.warn).toHaveBeenCalledWith(
      "[FARMERS_MARKET] Given speedModifier: 0, is NaN or less than 1."
    );
  });

});
