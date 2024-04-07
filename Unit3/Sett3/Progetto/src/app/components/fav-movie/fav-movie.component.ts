import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';

@Component({
    selector: 'app-fav-movie',
    templateUrl: './fav-movie.component.html',
    styleUrls: ['./fav-movie.component.scss']
})
export class FavMovieComponent {

    @Input('movie') movie!: Movie;

}
