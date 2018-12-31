import { Component, OnInit } from "@angular/core";

import { GoogleAnalyticsClient } from "../utils/google-analytics-client";

@Component({
  styleUrls: [ "./privacy-policy-page.component.scss" ],
  templateUrl: "./privacy-policy-page.component.html"
})

export class PrivacyPolicyPageComponent implements OnInit {

  ngOnInit() {
    GoogleAnalyticsClient.setPage("/privacy-policy");
  }

}
