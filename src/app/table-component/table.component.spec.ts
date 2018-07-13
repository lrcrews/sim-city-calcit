import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ConfigurationService } from "../services/configuration.service";
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

});
