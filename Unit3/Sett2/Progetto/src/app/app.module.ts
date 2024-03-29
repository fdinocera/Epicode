import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CompletedComponent } from './components/completed/completed.component';
import { UncompletedComponent } from './components/uncompleted/uncompleted.component';
import { ByUserComponent } from './components/by-user/by-user.component';


let routes: Route[] = [

  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  },
  {
    path: 'uncompleted',
    component: UncompletedComponent
  },
  {
    path: 'by-user',
    component: ByUserComponent
  },

  {
    path: '**',
    component: HomepageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CompletedComponent,
    UncompletedComponent,
    ByUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }