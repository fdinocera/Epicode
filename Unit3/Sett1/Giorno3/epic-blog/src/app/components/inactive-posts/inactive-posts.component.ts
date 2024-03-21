import { Component } from '@angular/core';

import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {


    posts!: Post[]

    constructor() {
        this.getPosts().then((posts) => {
            this.posts = posts;
            console.log(this.posts)
        });
    }

    async getPosts() {
        let response = await fetch('assets/json/db.json');
        let data = (await response.json()) as Post[];
        return data.filter((post) => !post.active)
    }
}
