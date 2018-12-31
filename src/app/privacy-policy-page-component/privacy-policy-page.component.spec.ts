import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { GoogleAnalyticsClient } from "../utils/google-analytics-client";

import { PrivacyPolicyPageComponent } from "./privacy-policy-page.component";

describe("PrivacyPolicyPageComponent", () => {
  let component: PrivacyPolicyPageComponent;
  let fixture: ComponentFixture<PrivacyPolicyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PrivacyPolicyPageComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyPageComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  describe("oninit", () => {

    it("should set the page for GA to '/privacy-policy'", () => {
      spyOn(GoogleAnalyticsClient, "setPage");
      component.ngOnInit();
      expect(GoogleAnalyticsClient.setPage).toHaveBeenCalledWith("/privacy-policy");
    });

  });

});
