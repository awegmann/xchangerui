import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class WallService {

    private images: string[];

    private zoom = new Subject<number>();

    constructor() {
        this.images = [
            'https://dummyimage.com/600x1000/bbb/fff.png&text=Movie 1',
            'https://dummyimage.com/600x1000/bbb/fff.png&text=Movie 2',
            'https://dummyimage.com/600x1000/bbb/fff.png&text=Movie 3',
            'https://dummyimage.com/600x1000/bbb/fff.png&text=Movie 4',
            'https://dummyimage.com/600x1000/bbb/fff.png&text=Movie A',
            'https://dummyimage.com/600x1000/bbb/fff.png&text=Movie B',
            'https://dummyimage.com/600x1000/bbb/fff.png&text=Movie C'
        ]
        this.zoom.next(100);
    }
}
