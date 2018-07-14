import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NO_ERRORS_SCHEMA } from "@angular/core";

import { TextInputComponent } from "./text-input.component";

describe("TextInputComponent", () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextInputComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

});
