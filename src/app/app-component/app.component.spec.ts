import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";

import { Observable } from "rxjs";
import { of } from "rxjs";

import { AppComponent } from "./app.component";
import { Item } from "../models/item";
import { Producer } from "../models/producer";

import { ConfigurationService } from "../services/configuration.service";
import { ScBuilditApiService } from "../services/sc-buildit-api.service";

class MockApiService {

  items(): Observable<Array<Item>> {
    return of([new Item("/img", [], "FOO", 1337, "foo")]);
  }

  producers(): Observable<Array<Producer>> {
    return of([new Producer(1, "/img", "BAR", "bar", [])]);
  }
}

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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
        { provide: ScBuilditApiService, useClass: MockApiService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should create the app", async(() => {
    expect(component).toBeTruthy();
  }));

  describe("OnInit", () => {

    it("should load the items", () => {
      const configurationService = TestBed.get(ConfigurationService);
      spyOn(configurationService, "updateItems");
      component.ngOnInit();
      expect(configurationService.updateItems).toHaveBeenCalledWith(
        [new Item("/img", [], "FOO", 1337, "foo")]
      );
    });

    it("should load the producers", () => {
      const configurationService = TestBed.get(ConfigurationService);
      spyOn(configurationService, "updateProducers");
      component.ngOnInit();
      expect(configurationService.updateProducers).toHaveBeenCalledWith(
        [new Producer(1, "/img", "BAR", "bar", [])]
      );
    });

  });

});
