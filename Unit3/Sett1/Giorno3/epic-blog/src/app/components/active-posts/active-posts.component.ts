import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {

    posts: Post[] = [];

    constructor(private postService: PostService) {
    }

    ngOnInit(): void {
        this.posts = this.postService.getPosts()
    }
}
