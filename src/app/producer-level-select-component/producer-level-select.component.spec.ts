import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProducerLevelSelectComponent } from "./producer-level-select.component";

describe("ProducerLevelSelectComponent", () => {
  let component: ProducerLevelSelectComponent;
  let fixture: ComponentFixture<ProducerLevelSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProducerLevelSelectComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerLevelSelectComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

});
