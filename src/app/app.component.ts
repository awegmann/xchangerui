import {Component} from '@angular/core';
import {ResizerComponent} from "./resizer/resizer.component";

@Component({
    selector: 'xchg-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ResizerComponent]
})
export class AppComponent {
    title = 'app works!';
}
