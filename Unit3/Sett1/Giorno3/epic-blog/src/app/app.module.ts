import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InEvidenzaComponent } from './components/in-evidenza/in-evidenza.component';
import { HomeComponent } from './components/home/home.component';
import { RelatedComponent } from './components/related/related.component';
import { LikeableComponent } from './components/likeable/likeable.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { DetailsComponent } from './components/details/details.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { FormsModule } from '@angular/forms';
import { RandomColorDirective } from './directives/random-color.directive';



const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'active-posts',
        component: ActivePostsComponent
    },
    {
        path: 'inactive-posts',
        component: InactivePostsComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        InEvidenzaComponent,
        HomeComponent,
        RelatedComponent,
        LikeableComponent,
        ActivePostsComponent,
        InactivePostsComponent,
        DetailsComponent,
        SinglePostComponent,
        RandomColorDirective
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
