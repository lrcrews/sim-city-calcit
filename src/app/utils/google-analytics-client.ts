import * as _ from "lodash";

// Declare gtag function as ambient
declare var gtag: Function; // tslint:disable-line

export class GoogleAnalyticsClient {

  static setPage(path: string): void {
    const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;
    if (!_.isEmpty(googleAnalyticsId)) {
      gtag("config", googleAnalyticsId, { page_path: path });
    }
  }
}
