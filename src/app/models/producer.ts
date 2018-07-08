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
        json["level"],
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
    // The level of the Producer (i.e. 0 star [initial], 1 star, 2 star, or 3 star)
    public level: number,
    // The display name
    public name: string,
    // The list of TimeTables that associate Items and their production times based on level
    public timeTables: Array<TimeTable>
  ) {}

}
