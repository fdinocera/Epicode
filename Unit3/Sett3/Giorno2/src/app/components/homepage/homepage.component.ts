import { Component, OnInit } from '@angular/core';
import { Products } from 'src/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  products: Products[] | undefined;
    
    //totalCart = 0;


    constructor(private productService: ProductsService) {
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(data => {
                this.products = data.products;
            })
    }

    addToCart(product: Products) {
        this.productService.addToCart(product)
    }

    addToFavs(product: Products) {
        this.productService.addToFavs(product)
    }

    isFavorite(id: number) {
        return this.productService.isFavorite(id);
    }
}
