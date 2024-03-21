import { Component } from '@angular/core';

import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-in-evidenza',
    templateUrl: './in-evidenza.component.html',
    styleUrls: ['./in-evidenza.component.scss']
})
export class InEvidenzaComponent {

    record!: Post

    constructor() {
        this.getPosts().then((posts) => {
            const n = Math.floor(Math.random() * posts.length)
            this.record = posts[n]
        });
    }

    async getPosts() {
        let response = await fetch('assets/json/db.json');
        let data = await response.json();
        return data;
    }
}
