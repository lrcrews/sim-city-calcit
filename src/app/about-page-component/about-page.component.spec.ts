import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { APP_BASE_HREF } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

import { GoogleAnalyticsClient } from "../utils/google-analytics-client";

import { AboutPageComponent } from "./about-page.component";

describe("AboutPageComponent", () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutPageComponent
      ],
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  describe("oninit", () => {

    it("should set the page for GA to '/about'", () => {
      spyOn(GoogleAnalyticsClient, "setPage");
      component.ngOnInit();
      expect(GoogleAnalyticsClient.setPage).toHaveBeenCalledWith("/about");
    });

  });

  describe("navigateToHomePage", () => {

    it("should call Router's navigateByUrl method with '/'", () => {
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToHomePage();
      expect(router.navigateByUrl).toHaveBeenCalledWith("/");
    });

  });

  describe("launchGithub", () => {

    it("should open the github of this code in a new tab/window", () => {
      spyOn(window, "open");
      component.launchGithub();
      expect(window.open).toHaveBeenCalledWith("https://github.com/lrcrews/sim-city-calcit", "_blank");
    });

  });

});
