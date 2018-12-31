import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { GoogleAnalyticsClient } from "../utils/google-analytics-client";

import { TermsPageComponent } from "./terms-page.component";

describe("TermsPageComponent", () => {
  let component: TermsPageComponent;
  let fixture: ComponentFixture<TermsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TermsPageComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsPageComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  describe("oninit", () => {

    it("should set the page for GA to '/terms'", () => {
      spyOn(GoogleAnalyticsClient, "setPage");
      component.ngOnInit();
      expect(GoogleAnalyticsClient.setPage).toHaveBeenCalledWith("/terms");
    });

  });

});
