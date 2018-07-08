import * as _ from "lodash";

export class Timing {

  static arrayFromJsonArray(jsonArray: Array<any>): Array<Timing> {
    if (!_.isEmpty(jsonArray)) {
      const timings = [];
      _.each(jsonArray, json => {
        const timing = Timing.fromJson(json);
        if (!_.isNil(timing)) {
          timings.push(timing);
        }
      });
      return timings;
    } else {
      return [];
    }
  }

  static fromJson(json: any): Timing | undefined {
    if (!_.isEmpty(json)) {
      return new Timing(
        json["item_key"],
        json["production_time_in_seconds"]
      );
    } else {
      return undefined;
    }
  }

  constructor(
    // Unique identifier of the Item corresponding to the "productionTime" value
    public itemKey: string,
    // The amount of time required to make the corresponding Item
    public productionTimeInSeconds: number
  ) {}

}
