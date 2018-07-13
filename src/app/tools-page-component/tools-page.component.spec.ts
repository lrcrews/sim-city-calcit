import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { NavigationComponent } from "../navigation-component/navigation.component";
import { ToolsPageComponent } from "./tools-page.component";

describe("ToolsPageComponent", () => {
  let component: ToolsPageComponent;
  let fixture: ComponentFixture<ToolsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolsPageComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsPageComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  describe("activeTabName", () => {

    it("should return the constant for the tools page tab", () => {
      expect(component.activeTabName()).toEqual(NavigationComponent.TOOLS_TAB);
    });

  });

});
