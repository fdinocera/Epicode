import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
    selector: 'app-fiat',
    templateUrl: './fiat.component.html',
    styleUrls: ['./fiat.component.scss']
})
export class FiatComponent {

    Cars!: Car[];

    constructor() {
        this.getPosts().then((posts) => {
            this.Cars = posts.filter((post) => post.brand === 'Fiat');
        })
    };

    async getPosts() {
        let response = await fetch('../../../assets/db.json');
        let data = await response.json();
        return data as Car[];
    }
}
