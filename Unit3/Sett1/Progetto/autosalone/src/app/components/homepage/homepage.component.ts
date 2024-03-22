import { Component } from '@angular/core';

import { Car } from 'src/app/models/car.interface';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

    car1!: Car
    car2!: Car

    constructor() {
        this.getPosts().then((posts) => {            
            const indici = this.getIndexes(posts.length, 2)
            this.car1 = posts[indici[0]]
            this.car2 = posts[indici[1]]
        });
    }

    async getPosts() {
        let response = await fetch('../../../assets/db.json');
        let data = await response.json();
        return data;
    }

    getIndexes(supRange: number, qttyIndexes: number): number[] {

        const arrayIndexes: number[] = []
        for (let i = 0; i < supRange; i++) {

            const n = Math.floor(Math.random() * supRange)
            if (!arrayIndexes.includes(n)) {
                arrayIndexes.push(n)
            }
            if (arrayIndexes.length == qttyIndexes) {
                return arrayIndexes
            }
        }
        return arrayIndexes
    }
}
