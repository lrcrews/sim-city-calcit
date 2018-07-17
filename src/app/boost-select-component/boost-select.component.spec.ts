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

  describe("boostMultiplierActive", () => {

    it("should return true if the given value matches the current boost multiplier", () => {
      component.selectedBoostMultiplier = 1;
      expect(component.boostMultiplierActive(1)).toBeTruthy();
      component.selectedBoostMultiplier = 42;
      expect(component.boostMultiplierActive(42)).toBeTruthy();
    });

    it("should return false if the given value does not match the current boost multiplier", () => {
      component.selectedBoostMultiplier = 1;
      expect(component.boostMultiplierActive(2)).toBeFalsy();
      expect(component.boostMultiplierActive(12)).toBeFalsy();
    });

  });

  describe("updateBoostMultiplier", () => {

    it("should update the current boost multiplier to the given value", () => {
      component.selectedBoostMultiplier = 12;
      component.updateBoostMultiplier(4);
      expect(component.selectedBoostMultiplier).toEqual(4);
    });

    it("should update the current boost multiplier to 1 if given the same value as current", () => {
      component.selectedBoostMultiplier = 12;
      component.updateBoostMultiplier(12);
      expect(component.selectedBoostMultiplier).toEqual(1);
    });

    it("should emit the change of the boost multiplier", () => {
      spyOn(component.onBoostMultiplierChange, "emit");
      component.selectedBoostMultiplier = 12;
      component.updateBoostMultiplier(4);
      expect(component.onBoostMultiplierChange.emit).toHaveBeenCalledWith(4);
    });

  });

});
