import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "child",
  template: ` <button (click)="emitEvent()">Click me</button>" `,
})
export class ChildComponent {
  @Output() customEvent: EventEmitter<string>;

  emitEvent(): void {
    this.customEvent.emit("Button clicked!");
  }
}
