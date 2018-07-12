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

}
