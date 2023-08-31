import { Component } from "@angular/core";

@Component({
  selector: "parent",
  templateUrl: "./parent.component.html",
})
export class ParentComponent {
  message = "";

  handleEvent(eventData: string) {
    this.message = eventData;
  }
}
