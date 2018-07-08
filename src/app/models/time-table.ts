import { Timing } from "./timing";

import * as _ from "lodash";

export class TimeTable {

  static arrayFromJsonArray(jsonArray: Array<any>): Array<TimeTable> {
    if (!_.isEmpty(jsonArray)) {
      const timeTables = [];
      _.each(jsonArray, json => {
        const timeTable = TimeTable.fromJson(json);
        if (!_.isNil(timeTable)) {
          timeTables.push(timeTable);
        }
      });
      return timeTables;
    } else {
      return [];
    }
  }

  static fromJson(json: any): TimeTable | undefined {
    if (!_.isEmpty(json)) {
      return new TimeTable(
        json["level"],
        Timing.arrayFromJsonArray(json["timings"])
      );
    } else {
      return undefined;
    }
  }

  constructor(
    // The "star level" this TimeTable corresponds to
    public level: number,
    // The list of Timings for the corresponding level
    public timings: Array<Timing>
  ) {}

}
