import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/models/products';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    apiUrl = 'https://dummyjson.com/products';

    constructor(private http: HttpClient) { }

    getProducts() {
        console.log(this.http.get<Products[]>(this.apiUrl))
        return this.http.get<Products[]>(this.apiUrl)
           
        
        // .pipe(
        //     catchError((err) => {
        //         return throwError(this.getErrorMessage(err.status));
        //     })
        // )
    }

    // getErrorMessage(status: number) {
    //     let message = '';
    //     switch (status) {
    //         case 404:
    //             message = 'Elementi non trovati';
    //             break;

    //         default:
    //             message = 'Qualcosa non ha funzionato nella chiamata';
    //             break;
    //     }
    //     return message;
    // }
}
