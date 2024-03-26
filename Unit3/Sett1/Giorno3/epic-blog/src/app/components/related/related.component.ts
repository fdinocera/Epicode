import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-related',
    templateUrl: './related.component.html',
    styleUrls: ['./related.component.scss']
})
export class RelatedComponent {

    record!: Post;

    constructor(private postService: PostService) {

        this.getPosts().then((posts) => {
            const n = Math.floor(Math.random() * posts.length)
            this.record = posts[n]
        });
    }

    async getPosts() {
        let data = await this.postService.getPosts()
        return data;
    }
}
