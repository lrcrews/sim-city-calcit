import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { APP_BASE_HREF } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
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
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  describe("navigateToAbout", () => {

    it("should call Router's navigateByUrl method with '/about'", () => {
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToAbout();
      expect(router.navigateByUrl).toHaveBeenCalledWith("/about");
    });

  });

  describe("navigateToPrivacyPolicy", () => {

    it("should call Router's navigateByUrl method with '/privacy-policy'", () => {
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToPrivacyPolicy();
      expect(router.navigateByUrl).toHaveBeenCalledWith("/privacy-policy");
    });

  });

  describe("navigateToTerms", () => {

    it("should call Router's navigateByUrl method with '/terms'", () => {
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToTerms();
      expect(router.navigateByUrl).toHaveBeenCalledWith("/terms");
    });

  });

});
