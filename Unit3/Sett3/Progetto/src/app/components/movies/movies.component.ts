import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FavMovie } from 'src/app/models/fav-movie.interface';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

    movies: Movie[] = [];
    favs: FavMovie[] = [];

    constructor(private movieService: MovieService, private authService: AuthService) { }

    ngOnInit(): void {
        this.movieService.getMovies().subscribe(data => {
            this.movies = data;
        });

        //filtra favorite movies dell'utente loggato
        this.movieService.getFavs().subscribe(favs => {
            this.authService.user$.subscribe(user => {
                let userId = user?.user.id;

                const userIdNumber = userId !== undefined ? parseInt(userId) : undefined;

                favs.forEach(favMovie => {
                    if (favMovie.userId === userIdNumber) {
                        this.favs.push(favMovie);
                    }
                })
            })
        })
    }

    toggleFavorite(movieId: string) {
        this.movieService.getFavs().subscribe(favs => {
            this.authService.user$.subscribe(user => {
                let userId = user?.user.id;

                const userIdNumber = userId !== undefined ? parseInt(userId) : undefined;
                const movieIdNumber = parseInt(movieId);

                const favoriteMovie = favs.find(favMovie =>
                    favMovie.userId === userIdNumber && favMovie.movieId === movieIdNumber
                )

                if (favoriteMovie === undefined) {
                    if (userIdNumber !== undefined) {
                        const newFav: FavMovie = { userId: userIdNumber, movieId: movieIdNumber, id: 0 }
                        this.favs.push(newFav)
                        this.movieService.postFav(userIdNumber, movieIdNumber);
                    }
                } else {
                    const index = this.favs.findIndex(fav => fav.movieId === movieIdNumber)
                    this.favs.splice(index, 1)
                    this.movieService.deleteFav(favoriteMovie.id);
                }
            })
        })
    }
    isFavorite(movieId: string) {
        const movie = this.favs.find(fav => fav.movieId === parseInt(movieId))
        if (movie === undefined) {
            return false
        } else {
            return true
        }
    }
}