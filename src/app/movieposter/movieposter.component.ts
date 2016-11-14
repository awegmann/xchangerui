import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'xchg-movieposter',
    templateUrl: 'movieposter.component.html',
    styleUrls: ['movieposter.component.css']
})
export class MovieposterComponent implements OnInit {

    @Input() imagewidth: number = 120;

    @Input() image: string = "";

    ngOnInit() {
    }

}
