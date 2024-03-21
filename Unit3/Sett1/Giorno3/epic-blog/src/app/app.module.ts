import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InEvidenzaComponent } from './components/in-evidenza/in-evidenza.component';
import { HomeComponent } from './components/home/home.component';
import { RelatedComponent } from './components/related/related.component';
import { LikeableComponent } from './components/likeable/likeable.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InEvidenzaComponent,
    HomeComponent,
    RelatedComponent,
    LikeableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
