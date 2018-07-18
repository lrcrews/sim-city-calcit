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

});
