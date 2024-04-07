import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Route, RouterModule } from '@angular/router';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { MoviesComponent } from './components/movies/movies.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavMovieComponent } from './components/fav-movie/fav-movie.component';



const routes: Route[] = [
    {
        path: "",
        component: HomecomponentComponent
    },
    {
        path: 'movies',
        component: MoviesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile/details',
        component: UserDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile/favorites',
        component: FavoritesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    // {
    //     path:'**',
    //     component
    // }
];



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavbarComponent,
        LoginComponent,
        HomecomponentComponent,
        RegisterComponent,
        MoviesComponent,
        UsersComponent,
        UserDetailsComponent,
        FavoritesComponent,
        FavMovieComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,      
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }