import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <button (click)="showMessage()">Click me</button>
    <p *ngIf="isShown">You clicked the button!</p>
  `,
})
export class AppComponent {
  public showMessage(): void {
    this.isShown = true;
  }
}
