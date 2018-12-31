import { Component, OnInit } from "@angular/core";

import { ConfigurationService } from "../services/configuration.service";
import { GoogleAnalyticsClient } from "../utils/google-analytics-client";
import { Producer } from "../models/producer";

import * as _ from "lodash";

@Component({
  styleUrls: [ "./tables-page.component.scss" ],
  templateUrl: "./tables-page.component.html"
})

export class TablesPageComponent implements OnInit {
  factories: Array<Producer>;
  shops: Array<Producer>;

  factoriesVisible = false;
  shopsVisible = true;

  constructor(private _configurationService: ConfigurationService) { }

  ngOnInit() {
    GoogleAnalyticsClient.setPage("/tables");
    this._watchForProducers();
  }

  toggleFactories(): void {
    this.factoriesVisible = !this.factoriesVisible;
  }

  toggleShops(): void {
    this.shopsVisible = !this.shopsVisible;
  }

  private _watchForProducers(): void {
    this._configurationService.producers.subscribe( producers => {
      this.factories = _.filter(producers, producer => producer.isFactory());
      this.shops = _.filter(producers, producer => producer.isShop());
    });
  }

}
