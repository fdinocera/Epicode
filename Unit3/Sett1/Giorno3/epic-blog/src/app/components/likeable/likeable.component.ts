import { Component } from '@angular/core';

import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-likeable',
    templateUrl: './likeable.component.html',
    styleUrls: ['./likeable.component.scss']
})
export class LikeableComponent {

    //record!: Post

    //postsLoaded: Post[] = []
    //indici: number[] = []
    likeablePosts: Post[] = []

    constructor() {
        this.getPosts().then((posts) => {
            let n = Math.floor(Math.random() * posts.length)
            this.likeablePosts.push(posts[n])
            
            n = Math.floor(Math.random() * posts.length)
            this.likeablePosts.push(posts[n])

            n = Math.floor(Math.random() * posts.length)
            this.likeablePosts.push(posts[n])

            n = Math.floor(Math.random() * posts.length)
            this.likeablePosts.push(posts[n])            
        });
    }

    async getPosts() {
        let response = await fetch('assets/json/db.json');
        let data = await response.json();
        return data;
    }
}
