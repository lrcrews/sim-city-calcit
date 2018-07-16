import { Component, OnInit } from "@angular/core";

import { GoogleAnalyticsClient } from "../utils/google-analytics-client";
import { NavigationComponent } from "../navigation-component/navigation.component";

@Component({
  styleUrls: [ "./tools-page.component.scss" ],
  templateUrl: "./tools-page.component.html"
})

export class ToolsPageComponent implements OnInit {

  ngOnInit() {
    GoogleAnalyticsClient.setPage("/tools");
  }

  activeTabName(): string {
    return NavigationComponent.TOOLS_TAB;
  }

}
