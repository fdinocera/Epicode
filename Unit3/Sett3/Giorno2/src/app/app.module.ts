import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarrelloComponent } from './components/carrello/carrello.component';

import { AppComponent } from './app.component';
//import { FavoritesComponent } from './components/favorites/favorites.component';

import { HttpClientModule } from '@angular/common/http';



// const routes: Route[] = [
//     {
//         path: '',
//         component: HomepageComponent
//     },
//     // {
//     //     path: 'favorites',
//     //     component: FavoritesComponent
//     // }
// ];


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        CarrelloComponent,
        //FavoritesComponent,
        HomepageComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        //RouterModule.forRoot(routes)
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}