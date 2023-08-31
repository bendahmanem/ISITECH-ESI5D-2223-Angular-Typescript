import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div>
        <h1>Welcome to {{appName}}!</h1>
        <p>{{greetings}}</p>
    </div>`;
    export class AppComponent {
        private appName: string = 'Angular 2';
        Greetings: string = 'Hello World!';
    }