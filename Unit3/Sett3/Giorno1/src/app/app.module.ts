import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import appreg




const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'registrazione',
    component: 
  }

];

@NgModule({
  declarations: [    
    AppComponent,
    NavbarComponent,    
    HomeComponent,    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
