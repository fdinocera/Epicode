import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Photo } from '../models/photo';
import { HttpClient } from '@angular/common/http';




@Injectable({
    providedIn: 'root'
})
export class PhotoServiceService {
    apiURL = 'https://jsonplaceholder.typicode.com/photos';
    //subj = new Subject<Photo[]>();


    constructor(private http: HttpClient) { }

    getPhotos() {
        return this.http.get<Photo[]>(this.apiURL)
    }

    deleteFoto(){
        
    }




}

