import { inject, TestBed } from "@angular/core/testing";

import { HttpModule } from "@angular/http";
import { ScBuilditApiService } from "../sc-buildit-api.service";

describe("ScBuilditApiService", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        ScBuilditApiService
      ]
    });
  });

  it("should be created", inject([ScBuilditApiService], (service: ScBuilditApiService) => {
    expect(service).toBeTruthy();
  }));

  describe("items", () => {

    it("should return an array of Items", inject([ScBuilditApiService], (service: ScBuilditApiService) => {
      service.items().subscribe(items => {
        expect(items).toBeDefined();
      });
    }));

  });

  describe("producers", () => {

    it("should return an array of Producers", inject([ScBuilditApiService], (service: ScBuilditApiService) => {
      service.producers().subscribe(producers => {
        expect(producers).toBeDefined();
      });
    }));

  });

});
