import { Component, numberAttribute } from '@angular/core';

import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-likeable',
    templateUrl: './likeable.component.html',
    styleUrls: ['./likeable.component.scss']
})
export class LikeableComponent {

    likeablePosts: Post[] = []
    arrayIndexes: number[] = []

    constructor() {
        this.getPosts().then((posts) => {            
            this.getIndexes(posts.length)
            for (let i = 0; i < 4; i++) {
                this.likeablePosts.push(posts[this.arrayIndexes[i]])
            }
        });
    }

    async getPosts() {
        let response = await fetch('assets/json/db.json');
        let data = await response.json();
        return data;
    }

    getIndexes(arrayLength: number) {
        for (let i = 0; i < arrayLength; i++) {
            const n = Math.floor(Math.random() * arrayLength)
            if (!this.arrayIndexes.includes(n)) {
                this.arrayIndexes.push(n)
            }
            if (this.arrayIndexes.length == 4) {
                break;
            }
        }
    }
}
