import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  describe("launchGithub", () => {

    it("should open the github of this code in a new tab/window", () => {
      spyOn(window, "open");
      component.launchGithub();
      expect(window.open).toHaveBeenCalledWith("https://github.com/lrcrews/sim-city-calcit", "_blank");
    });

  });

});
