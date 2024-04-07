import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FavMovie } from 'src/app/models/fav-movie.interface';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

    allMovies: Movie[] = [];
    favs: FavMovie[] = [];
    favsList: Movie[] = [];

    constructor(private movieService: MovieService, private authService: AuthService) { }

    ngOnInit(): void {

        this.authService.user$.subscribe(data => {
            const currentUserId = data?.user.id !== undefined ? parseInt(data?.user.id) : undefined

            //favs di tutti gli utenti
            this.movieService.getFavs().subscribe(data => {
                this.favs = data;

                //elenco film
                this.movieService.getMovies().subscribe(data => {
                    this.allMovies = data;

                    this.favs.forEach(fav => {
                        if (fav.userId === currentUserId) {
                            const movie = this.allMovies.find(movie => parseInt(movie.id) == fav.movieId);
                            if (movie !== undefined) {
                                this.favsList.push(movie);
                            }
                        }
                    })
                })
            })
        })
    }
}