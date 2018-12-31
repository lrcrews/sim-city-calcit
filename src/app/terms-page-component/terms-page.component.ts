import { Component, OnInit } from "@angular/core";

import { GoogleAnalyticsClient } from "../utils/google-analytics-client";

@Component({
  styleUrls: [ "./terms-page.component.scss" ],
  templateUrl: "./terms-page.component.html"
})

export class TermsPageComponent implements OnInit {

  ngOnInit() {
    GoogleAnalyticsClient.setPage("/terms");
  }

}
