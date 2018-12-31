import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { ConfigurationService } from "../services/configuration.service";
import { Item } from "../models/item";
import { TableComponent } from "./table.component";

describe("TableComponent", () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent
      ],
      providers: [
        ConfigurationService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  describe("itemImageForKey", () => {

    it("should return the imagePath for the desired key", () => {
      const item1 = new Item("image/path/1", [], "key1", 100, "Item 1");
      const item2 = new Item("image/path/2", [], "key2", 200, "Item 2");
      component.allItems = [ item1, item2 ];
      expect(component.itemImageForKey("key1")).toEqual("image/path/1");
      expect(component.itemImageForKey("key2")).toEqual("image/path/2");
    });

  });

  describe("setLevel", () => {

    it("should set selectedLevel to the given value", () => {
      component.selectedLevel = 0;
      component.setLevel(2);
      expect(component.selectedLevel).toEqual(2);
    });

  });

  describe("updateBoostMultiplier", () => {

    it("should set selectedBoostMultiplier to the given value", () => {
      component.selectedBoostMultiplier = 1;
      component.updateBoostMultiplier(0);
      expect(component.selectedBoostMultiplier).toEqual(0);
    });

  });

});
