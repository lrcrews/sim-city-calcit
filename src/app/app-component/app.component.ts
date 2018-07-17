import { Component, OnInit } from "@angular/core";

import { ConfigurationService } from "../services/configuration.service";
import { ScBuilditApiService } from "../services/sc-buildit-api.service";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  templateUrl: "./app.component.html",
})

export class AppComponent implements OnInit {

  constructor(private _configurationService: ConfigurationService,
              private _scBuilditApiService: ScBuilditApiService) { }

  ngOnInit(): void {
    this._loadItems();
    this._loadProducers();
    // TODO: load user's buildings
  }

  private _loadItems(): void {
    this._scBuilditApiService.items().subscribe(items => {
      this._configurationService.updateItems(items);
    });
  }

  private _loadProducers(): void {
    this._scBuilditApiService.producers().subscribe(producers => {
      this._configurationService.updateProducers(producers);
    });
  }
}
