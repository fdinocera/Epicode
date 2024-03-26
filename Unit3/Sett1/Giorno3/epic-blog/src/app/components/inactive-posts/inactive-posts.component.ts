import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {

    posts: Post[] = [];

    constructor(private postService: PostService) {
        this.getPosts().then((data) => {
            this.posts = data;
        })
    }

    async getPosts() {
        let posts = await this.postService.getPosts()
        return posts as Post[]
    }
}
