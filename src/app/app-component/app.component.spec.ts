import { async, TestBed } from "@angular/core/testing";

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";

import { ConfigurationService } from "../services/configuration.service";
import { ScBuilditApiService } from "../services/sc-buildit-api.service";

describe("AppComponent", () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [
        ConfigurationService,
        ScBuilditApiService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
