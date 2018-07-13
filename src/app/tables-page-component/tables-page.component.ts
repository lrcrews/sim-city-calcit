import { Component, OnInit } from "@angular/core";

import { ConfigurationService } from "../services/configuration.service";
import { NavigationComponent } from "../navigation-component/navigation.component";
import { Producer } from "../models/producer";

@Component({
  styleUrls: [ "./tables-page.component.scss" ],
  templateUrl: "./tables-page.component.html"
})

export class TablesPageComponent implements OnInit {
  producers: Array<Producer>;

  constructor(private _configurationService: ConfigurationService) { }

  ngOnInit() {
    this._watchForProducers();
  }

  activeTabName(): string {
    return NavigationComponent.TABLES_TAB;
  }

  private _watchForProducers(): void {
    this._configurationService.producers.subscribe( producers => {
      this.producers = producers;
    });
  }

}
