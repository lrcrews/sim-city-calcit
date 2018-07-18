import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-number-input",
  styleUrls: [ "./number-input.component.scss" ],
  templateUrl: "./number-input.component.html"
})

export class NumberInputComponent {

  modelValue: string;

  @Input()
  get model(): string {
    return this.modelValue;
  }

  set model(value: string) {
    this.modelValue = value;
    this.modelChange.emit(this.modelValue);
  }

  @Output() modelChange = new EventEmitter();

}
