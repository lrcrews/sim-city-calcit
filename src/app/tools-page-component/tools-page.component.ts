import { Component } from "@angular/core";

import { NavigationComponent } from "../navigation-component/navigation.component";

@Component({
  styleUrls: [ "./tools-page.component.scss" ],
  templateUrl: "./tools-page.component.html"
})

export class ToolsPageComponent {

  activeTabName(): string {
    return NavigationComponent.TOOLS_TAB;
  }

}
