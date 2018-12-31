import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { APP_BASE_HREF } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
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
