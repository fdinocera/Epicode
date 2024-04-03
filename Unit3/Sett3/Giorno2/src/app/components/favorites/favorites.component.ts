import { Component, OnInit } from '@angular/core';
import { Products } from 'src/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
    favorites!: Products[]

    constructor(private productService: ProductsService) {
    }

    ngOnInit(): void {
        this.productService.favoritesList.subscribe(data => {
            this.favorites = data;
        })
    }

    removeFromFavorites(id: number) {
        this.productService.removeFromFavorites(id)
    }
}
