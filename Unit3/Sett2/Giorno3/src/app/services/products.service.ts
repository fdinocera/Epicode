import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/models/products';
import { TypeAPI } from 'src/models/type-api';
import { CartItem } from 'src/models/cart-item';
import { Observable, Observer } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    apiUrl = 'https://dummyjson.com/products';

    cart: CartItem[] = [];
    favs: Products[] = [];

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<TypeAPI>(this.apiUrl);
    }

    addToCart(product: Products) {
        const found = this.cart.find(item => product.id == item.id);
        if (found) {
            found.amount += 1;
            found.totalPrice = found.amount * found.price;
        } else {
            this.cart.push({ ...product, amount: 1, totalPrice: product.price });
        }
    }

    removeFromCart(id: number) {
        const index = this.cart.findIndex(prd => prd.id === id)
        if (this.cart[index].amount === 1) {
            this.cart.splice(index, 1)
        } else {
            this.cart[index].amount--;
            this.cart[index].totalPrice = this.cart[index].price * this.cart[index].amount;
        }
    }

    get cartList() {
        return new Observable((obs: Observer<CartItem[]>) => {
            obs.next(this.cart)
        }
        )
    }

    //Favorites
    addToFavs(product: Products) {
        const found = this.favs.find(prod => { prod.id === product.id })
        if (!found) {
            this.favs.push(product)
        }
    }

    isFavorite(id: number) {
        return this.favs.find(fav => fav.id === id)
    }

    get favoritesList() {
        return new Observable(
            (obs: Observer<Products[]>) => {
                obs.next(this.favs)
            }
        )
    }
    removeFromFavorites(id: number) {
        const index = this.favs.findIndex(item => item.id === id)
        this.favs.splice(index, 1)
    }    
}