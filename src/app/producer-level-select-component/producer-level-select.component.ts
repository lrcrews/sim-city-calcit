import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Producer } from "../models/producer";

@Component({
  selector: "app-producer-level-select",
  styleUrls: [ "./producer-level-select.component.scss" ],
  templateUrl: "./producer-level-select.component.html"
})

export class ProducerLevelSelectComponent {

  @Input() producer: Producer;
  @Input() selectedLevel = 0;

  @Output() onLevelChange = new EventEmitter<number>();

  setLevel(value: number): void {
    this.selectedLevel = value;
    this.onLevelChange.emit(this.selectedLevel);
  }

  levelLessThan(value: number): boolean {
    return this.selectedLevel < value;
  }

  levelGreaterThanOrEqualTo(value: number): boolean {
    return this.selectedLevel >= value;
  }

}
