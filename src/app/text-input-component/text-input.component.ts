import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-text-input",
  styleUrls: [ "./text-input.component.scss" ],
  templateUrl: "./text-input.component.html"
})

export class TextInputComponent {

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
