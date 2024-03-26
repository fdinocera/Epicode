import { Component, numberAttribute } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-likeable',
    templateUrl: './likeable.component.html',
    styleUrls: ['./likeable.component.scss']
})
export class LikeableComponent {

    likeablePosts: Post[] = []
    arrayIndexes: number[] = []

    constructor(private postService: PostService) {

        const posts = postService.getPosts()
        this.crea4IndiciRandom(posts.length);
        for (let i = 0; i < 4; i++) {
            this.likeablePosts.push(posts[this.arrayIndexes[i]])
        }       
    }  

    crea4IndiciRandom(arrayLength: number) {
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
