import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingRoutingModule } from './app-routing-routing.module';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
    //loadChildren: ()=> import ('./components/favorites/favorites.module').then((m) =>FavoritesComponent)
  }
]


@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    AppRoutingRoutingModule,
    RouterModule.forRoot(routes),FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
