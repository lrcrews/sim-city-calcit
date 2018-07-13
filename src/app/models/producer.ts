import { TimeTable } from "./time-table";

import * as _ from "lodash";

export class Producer {

  static arrayFromJsonArray(jsonArray: Array<any>): Array<Producer> {
    if (!_.isEmpty(jsonArray)) {
      const producers = [];
      _.each(jsonArray, json => {
        const producer = Producer.fromJson(json);
        if (!_.isNil(producer)) {
          producers.push(producer);
        }
      });
      return producers;
    } else {
      return [];
    }
  }

  static fromJson(json: any): Producer | undefined {
    if (!_.isEmpty(json)) {
      return new Producer(
        json["active_queues"],
        json["image_path"],
        json["key"],
        json["name"],
        TimeTable.arrayFromJsonArray(json["time_tables"])
      );
    } else {
      return undefined;
    }
  }

  constructor(
    // The number of concurrent Items the Producer may produce
    public activeQueues: number,
    // The path to the image
    public imagePath: string,
    // Unique identifier expected to be the same across environments
    public key: string,
    // The display name
    public name: string,
    // The list of TimeTables that associate Items and their production times based on level
    public timeTables: Array<TimeTable>
  ) {}

  isFactory(): boolean {
    // All "factories" in the game have more than one active queue.
    return !_.isNil(this.activeQueues) ? this.activeQueues !== 1 : false;
  }

  isShop(): boolean {
    // All "shops" in the game have only one active queue.
    return !_.isNil(this.activeQueues) ? this.activeQueues === 1 : false;
  }

  itemTimeInSeconds(itemKey: string, producerLevel: number = 0, speedModifier: number = 1): number | undefined {
    const timeTable = _.find(this.timeTables, currentTimeTable => currentTimeTable.level === producerLevel);
    if (!_.isNil(timeTable)) {
      const timing = _.find(timeTable.timings, currentTiming => currentTiming.itemKey === itemKey);
      if (!_.isNil(timing)) {
        if (!_.isNaN(speedModifier) && speedModifier > 0) {
          return timing.productionTimeInSeconds / speedModifier;
        } else {
          console.warn(`[${this.key}] Given speedModifier: ${speedModifier}, is NaN or less than 1.`);
          return undefined;
        }
      } else {
        console.warn(`[${this.key}] Timing not found for itemKey: ${itemKey}`);
        return undefined;
      }
    } else {
      console.warn(`[${this.key}] TimeTable not found for producerLevel: ${producerLevel}`);
      return undefined;
    }
  }

}
