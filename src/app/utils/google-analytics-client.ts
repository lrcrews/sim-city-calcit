import { environment } from "../../environments/environment";

import * as _ from "lodash";

// Declare gtag function as ambient
declare var gtag: Function; // tslint:disable-line

export class GoogleAnalyticsClient {

  static setPage(path: string): void {
    const googleAnalyticsId = environment.google_analytics_id;
    if (!_.isEmpty(googleAnalyticsId)) {
      gtag("config", googleAnalyticsId, { page_path: path });
    } else {
      console.log("unable to load Google Analytics ID.");
    }
  }
}
