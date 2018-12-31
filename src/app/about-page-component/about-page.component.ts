import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

import { GoogleAnalyticsClient } from "../utils/google-analytics-client";

@Component({
  styleUrls: [ "./about-page.component.scss" ],
  templateUrl: "./about-page.component.html"
})

export class AboutPageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    GoogleAnalyticsClient.setPage("/about");
  }

  navigateToHomePage(): void {
    this._router.navigateByUrl("/");
  }

  launchGithub(): void {
    window.open("https://github.com/lrcrews/sim-city-calcit", "_blank");
  }

}
