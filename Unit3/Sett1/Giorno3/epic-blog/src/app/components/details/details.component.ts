import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

    idPost!: number
    post!: Post | undefined

    constructor(private postService: PostService, private route: ActivatedRoute) {

        const n = Number(this.route.snapshot.paramMap.get('id'))
        this.post = postService.getPost(n);

    }
}
