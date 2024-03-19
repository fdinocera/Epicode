import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Mycomp1Component } from './components/mycomp1/mycomp1.component';
import { Mycomp2Component } from './components/mycomp2/mycomp2.component';
import { Mycomp3Component } from './components/mycomp3/mycomp3.component';

@NgModule({
  declarations: [
    AppComponent,
    Mycomp1Component,
    Mycomp2Component,
    Mycomp3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
