import { Component } from '@angular/core';

// importa interface
import { Post } from 'src/app/models/post.interface';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'epic-blog';

    record0!: Post
    record1!: Post
    record2!: Post
    record3!: Post
    record4!: Post
    record5!: Post
    record6!: Post
    arrayIndex: number[] = [];

    constructor() {
        this.getPosts().then((posts) => {
            
            let n = this.getRandomIndex(posts.length)
            this.record0 = posts[n]
            
            n = this.getRandomIndex(posts.length)
            this.record1 = posts[n]
            
            n = this.getRandomIndex(posts.length)
            this.record2 = posts[n]
            
            n = this.getRandomIndex(posts.length)
            this.record3 = posts[n]
            
            n = this.getRandomIndex(posts.length)
            this.record4 = posts[n]
            
            n = this.getRandomIndex(posts.length)
            this.record5 = posts[n]
            
            n = this.getRandomIndex(posts.length)
            this.record6 = posts[n]
        });
    }

    async getPosts() {
        let response = await fetch('assets/json/db.json');
        let data = await response.json();
        return data;
    }

    getRandomIndex(nIndex: number): number {
        for (let i = 0; i < nIndex; i++) {
            const n = Math.floor(Math.random() * nIndex)
            if (!this.arrayIndex.includes(n)) {
                this.arrayIndex.push(n)
                return n
            }
        }
        return 0
    }
}
