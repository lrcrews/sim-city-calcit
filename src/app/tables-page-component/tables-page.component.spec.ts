import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { ConfigurationService } from "../services/configuration.service";
import { NavigationComponent } from "../navigation-component/navigation.component";
import { TablesPageComponent } from "./tables-page.component";

describe("TablesPageComponent", () => {
  let component: TablesPageComponent;
  let fixture: ComponentFixture<TablesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TablesPageComponent
      ],
      providers: [
        ConfigurationService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesPageComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  describe("activeTabName", () => {

    it("should return the constant for the tables page tab", () => {
      expect(component.activeTabName()).toEqual(NavigationComponent.TABLES_TAB);
    });

  });

});
