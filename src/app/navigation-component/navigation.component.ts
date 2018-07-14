import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  styleUrls: [ "./navigation.component.scss" ],
  templateUrl: "./navigation.component.html"
})

export class NavigationComponent {

  static TABLES_TAB = "TABLES_TAB";
  static TOOLS_TAB = "TOOLS_TAB";

  @Input() activeTab: string;

  constructor(private _router: Router) { }

  tablesTabActive(): boolean {
    return this._tabActive(NavigationComponent.TABLES_TAB);
  }

  toolsTabActive(): boolean {
    return this._tabActive(NavigationComponent.TOOLS_TAB);
  }

  navigateToTablesPage(): void {
    if (!this.tablesTabActive()) {
      this._router.navigateByUrl("/tables");
    }
  }

  navigateToToolsPage(): void {
    if (!this.toolsTabActive()) {
      this._router.navigateByUrl("/tools");
    }
  }

  private _tabActive(tabName: string): boolean {
    return tabName === this.activeTab;
  }

}
