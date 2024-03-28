import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartItem } from 'src/models/cart-item';

@Component({
    selector: 'app-carrello',
    templateUrl: './carrello.component.html',
    styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

    cartList: CartItem[] = [];

    constructor(private productService: ProductsService) { }

    ngOnInit(): void {
        this.productService.cartList.subscribe(cart => this.cartList = cart)
    }

    get totaleCarrello() {
        return this.cartList.reduce((acc, objCurr) => acc + objCurr.totalPrice, 0)
    }

    removeFromCart(id: number) {
        this.productService.removeFromCart(id)
    }
}