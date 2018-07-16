import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BoostSelectComponent } from "./boost-select.component";

describe("BoostSelectComponent", () => {
  let component: BoostSelectComponent;
  let fixture: ComponentFixture<BoostSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoostSelectComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostSelectComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

});
