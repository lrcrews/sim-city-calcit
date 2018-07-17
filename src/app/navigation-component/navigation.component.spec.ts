import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { APP_BASE_HREF } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

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

  describe("navigateToTablesPage", () => {

    it("should route to the /tables page if not already on the /tables page", () => {
      component.activeTab = "foo";
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToTablesPage();
      expect(router.navigateByUrl).toHaveBeenCalledWith("/tables");
    });

    it("should do nothing if already on the /tables page", () => {
      component.activeTab = NavigationComponent.TABLES_TAB;
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToTablesPage();
      expect(router.navigateByUrl).toHaveBeenCalledTimes(0);
    });

  });

  describe("navigateToToolsPage", () => {

    it("should route to the /tools page if not already on the /tools page", () => {
      component.activeTab = "foo";
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToToolsPage();
      expect(router.navigateByUrl).toHaveBeenCalledWith("/tools");
    });

    it("should do nothing if already on the /tools page", () => {
      component.activeTab = NavigationComponent.TOOLS_TAB;
      const router = TestBed.get(Router);
      spyOn(router, "navigateByUrl");
      component.navigateToToolsPage();
      expect(router.navigateByUrl).toHaveBeenCalledTimes(0);
    });

  });

});
