import { Component, OnInit } from '@angular/core';
import { Products } from 'src/models/products';
import { ProductsService } from './services/products.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    products: Products[] | undefined;
    segnaposto = 'segnaposto'
    newArray = ['alfa', 'beta', 'gamma']

    constructor(private productService: ProductsService) {
    }

    ngOnInit(): void {
        // this.productService.getProducts().subscribe(data => {
        //     this.products = data;            
        //     console.log(data)
        // });

        this.productService.getProducts().subscribe(data => {
            this.products = data.products;
        })
    }
}
