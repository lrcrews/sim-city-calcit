import { Component, OnInit } from "@angular/core";

import { GoogleAnalyticsClient } from "../utils/google-analytics-client";

@Component({
  styleUrls: [ "./about-page.component.scss" ],
  templateUrl: "./about-page.component.html"
})

export class AboutPageComponent implements OnInit {

  ngOnInit() {
    GoogleAnalyticsClient.setPage("/about");
  }

}
