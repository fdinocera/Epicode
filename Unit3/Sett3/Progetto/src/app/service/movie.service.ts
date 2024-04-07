import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { FavMovie } from '../models/fav-movie.interface';
import { Movie } from '../models/movie.interface';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    apiURL = environment.apiURL;

    constructor(private http: HttpClient, authService: AuthService) { }

    // all movies
    getMovies() {
        return this.http.get<Movie[]>(`${this.apiURL}movies-popular`);
    }

    // favorites movies
    getFavs() {
        return this.http.get<FavMovie[]>(`${this.apiURL}favorites`);
    }

    postFav(userIdNumber: number, movieIdNumber: number) {
        const data = { userId: userIdNumber, movieId: movieIdNumber }
        this.http.post<FavMovie>(`${this.apiURL}favorites`, data).subscribe();
    }

    deleteFav(id: number) {
        this.http.delete<FavMovie>(`${this.apiURL}favorites/${id}`).subscribe();
    }
}