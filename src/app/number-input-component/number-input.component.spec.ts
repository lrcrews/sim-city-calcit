import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NO_ERRORS_SCHEMA } from "@angular/core";

import { NumberInputComponent } from "./number-input.component";

describe("NumberInputComponent", () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NumberInputComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  describe("get model", () => {

    it("should return the value of modelValue", () => {
      component.modelValue = "foo bar";
      expect(component.model).toEqual("foo bar");
    });

  });

  describe("set model", () => {

    it("should set the value of modelValue and emit it via modelChange", () => {
      component.modelValue = "foo bar";
      spyOn(component.modelChange, "emit");
      component.model = "baz";
      expect(component.modelValue).toEqual("baz");
      expect(component.modelChange.emit).toHaveBeenCalledWith("baz");
    });

  });

});
