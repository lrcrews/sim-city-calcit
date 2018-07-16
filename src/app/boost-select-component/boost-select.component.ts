import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-boost-select",
  styleUrls: [ "./boost-select.component.scss" ],
  templateUrl: "./boost-select.component.html"
})

export class BoostSelectComponent {

  @Input() selectedBoostMultiplier = 1;

  @Output() onBoostMultiplierChange = new EventEmitter<number>();

  boostMultiplierActive(value: number): boolean {
    return this.selectedBoostMultiplier === value;
  }

  updateBoostMultiplier(value: number): void {
    if (this.boostMultiplierActive(value)) {
      this.selectedBoostMultiplier = 1;
    } else {
      this.selectedBoostMultiplier = value;
    }
    this.onBoostMultiplierChange.emit(this.selectedBoostMultiplier);
  }

}
