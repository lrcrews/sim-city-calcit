import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { APP_BASE_HREF } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NavigationComponent } from "./navigation.component";

describe("NavigationComponent", () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationComponent
      ],
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  describe("tablesTabActive", () => {

    it("should return true if the activeTab value is for the tables page", () => {
      component.activeTab = NavigationComponent.TABLES_TAB;
      expect(component.tablesTabActive()).toBeTruthy();
    });

    it("should return false if the activeTab value is not for the tables page", () => {
      component.activeTab = "foo";
      expect(component.tablesTabActive()).toBeFalsy();
    });

  });

  describe("toolsTabActive", () => {

    it("should return true if the activeTab value is for the tools page", () => {
      component.activeTab = NavigationComponent.TOOLS_TAB;
      expect(component.toolsTabActive()).toBeTruthy();
    });

    it("should return false if the activeTab value is not for the tools page", () => {
      component.activeTab = "foo";
      expect(component.toolsTabActive()).toBeFalsy();
    });

  });

});
