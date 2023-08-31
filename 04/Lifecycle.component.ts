import {Component, OnInit, Onchanges, SimpleChanges} from @angular/core;

@Component({
    selector: 'lifecycle',
    template: `
        <h1>LifeCycle Hooks</h1>
    `
})
export class LifecycleComponent implements OnInit, Onchanges {
    private intervalId: any;

    constructor() {
        console.log('constructor called');
    }

    ngOnInit() {
        console.log('ngOnInit called');
        this.startInterval();
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges called');
        console.log(changes);
        this.stopInterval();
    }

    

    private startInterval() {
        this.intervalId = setInterval(() => {
            console.log('Interval ticked');
        }, 2000)
    }

    private stopInterval() {
        clearInterval(this.intervalId);
    }
}