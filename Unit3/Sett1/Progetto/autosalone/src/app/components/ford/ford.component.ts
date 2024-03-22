import { Component } from '@angular/core';

import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.scss']
})
export class FordComponent {

  Cars!: Car[];

    constructor() {
        this.getPosts().then((posts) => {
            this.Cars = posts.filter((post) => post.brand === 'Ford');
        })
    };

    async getPosts() {
        let response = await fetch('../../../assets/db.json');
        let data = await response.json();
        return data as Car[];
    }
}
