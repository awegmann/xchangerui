import {Component, OnInit} from '@angular/core';
import {WallService} from "../wall.service";
import {Subscription} from "rxjs";
import {Movie} from "../model/movie";

@Component({
    selector: 'xchg-wall',
    templateUrl: 'wall.component.html',
    styleUrls: ['wall.component.css']
})
export class WallComponent implements OnInit {
    get imageWith(): number {
        return this._imageWith;
    }

    set imageWith(value: number) {
        if (value > 60 && value < 400) {
            this._imageWith = value;
        }


    }

    private subsciption: Subscription;

    private movies: Movie[];
    private _imageWith: number;

    constructor() {
        this.movies = [
            new Movie('https://dummyimage.com/600x1000/bbb/fff.png&text=Movie 1'),
            new Movie('https://dummyimage.com/600x1000/bbb/fff.png&text=Movie 2'),
            new Movie('https://dummyimage.com/600x1000/bbb/fff.png&text=Movie 3'),
            new Movie('https://dummyimage.com/600x1000/bbb/fff.png&text=Movie 4'),
            new Movie('https://dummyimage.com/600x1000/bbb/fff.png&text=Movie A'),
            new Movie('https://dummyimage.com/600x1000/bbb/fff.png&text=Movie B'),
            new Movie('https://dummyimage.com/600x1000/bbb/fff.png&text=Movie C')
        ]
        this.imageWith = 120;
    }

    ngOnInit() {
    }

    onWallZoomChanged(event) {
        console.log("size changed " + event);
        this.imageWith = event;
    }

}
