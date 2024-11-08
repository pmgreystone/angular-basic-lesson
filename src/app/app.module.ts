import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
    declarations: [
        /*Angular 14, SAC, 2022*/
        /*AppComponent*/
    ],
    imports: [BrowserModule],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent]
})
export class AppModule {}