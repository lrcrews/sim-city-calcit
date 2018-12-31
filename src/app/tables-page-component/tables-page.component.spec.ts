import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { ConfigurationService } from "../services/configuration.service";
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

  describe("toggleFactories", () => {

    it("should toggle the value of factoriesVisible", () => {
      component.factoriesVisible = false;
      component.toggleFactories();
      expect(component.factoriesVisible).toBeTruthy();
      component.toggleFactories();
      expect(component.factoriesVisible).toBeFalsy();
    });

  });

  describe("toggleShops", () => {

    it("should toggle the value of shopsVisible", () => {
      component.shopsVisible = false;
      component.toggleShops();
      expect(component.shopsVisible).toBeTruthy();
      component.toggleShops();
      expect(component.shopsVisible).toBeFalsy();
    });

  });

});
