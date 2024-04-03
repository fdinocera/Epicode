import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingRoutingModule } from './app-routing-routing.module';
import {  Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    //AppRoutingRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
