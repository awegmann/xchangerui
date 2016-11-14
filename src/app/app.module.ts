import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MovieposterComponent} from './movieposter/movieposter.component';
import { ResizerComponent } from './resizer/resizer.component';
import { WallComponent } from './wall/wall.component';

@NgModule({
    declarations: [
        AppComponent,
        MovieposterComponent,
        ResizerComponent,
        WallComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    providers: [],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
