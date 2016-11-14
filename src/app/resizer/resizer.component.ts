import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'xchg-resizer',
    templateUrl: 'resizer.component.html',
    styleUrls: ['resizer.component.css']
})
export class ResizerComponent implements OnInit {
    @Output() wallZoomChanged: EventEmitter<number> = new EventEmitter<number>();
    size: number = 120;

    constructor() {
    }


    ngOnInit() {
    }

    increaseSize() {
        this.size += 10;
        console.log("size set to " + this.size);
        this.wallZoomChanged.emit(this.size);
    }

    decreaseSize() {
        this.size -= 10;
        console.log("size set to " + this.size);
        this.wallZoomChanged.emit(this.size);
    }


}
