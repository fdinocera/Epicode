import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { FordComponent } from './components/ford/ford.component';
import { AudiComponent } from './components/audi/audi.component';
import { FooterComponent } from './components/footer/footer.component';

let routes: Route[] = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'fiat',
    component: FiatComponent
  },
  {
    path: 'ford',
    component: FordComponent
  },
  {
    path: 'audi',
    component: AudiComponent
  },
  {
    path: '**',
    component: HomepageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FiatComponent,
    FordComponent,
    AudiComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
