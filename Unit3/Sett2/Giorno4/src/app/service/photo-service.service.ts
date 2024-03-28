import { Injectable } from '@angular/core';
import { Subject, catchError, throwError } from 'rxjs';
import { Photo } from '../models/photo';
import { HttpClient } from '@angular/common/http';




@Injectable({
    providedIn: 'root'
})
export class PhotoServiceService {
    apiURL = 'https://jsonplaceholder.typicode.com/photos';
    favoritesCounter = 0;
    favoritesSub = new Subject<number>();


    constructor(private http: HttpClient) { }

    getPhotos() {
        return this.http.get<Photo[]>(this.apiURL)
    }

    deleteFoto(id: number) {
        return this.http.delete(`${this.apiURL}/${id}`)
            .pipe(
                catchError(err => {
                    // return throwError(err)
                    return err;
                })
            )
    }

    addFavorites(){
        this.favoritesCounter++;
        this.favoritesSub.next(this.favoritesCounter)
    }
}

