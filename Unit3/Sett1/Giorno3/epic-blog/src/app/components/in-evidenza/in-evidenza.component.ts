import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
    selector: 'app-in-evidenza',
    templateUrl: './in-evidenza.component.html',
    styleUrls: ['./in-evidenza.component.scss']
})
export class InEvidenzaComponent {

    record!: Post | undefined

    constructor(private postService: PostService) {
        // this.getPosts().then((posts) => {
        //     const n = Math.floor(Math.random() * posts.length)
        //     this.record = posts[n]
        // });
        const posts = postService.getPosts()
        const n = Math.floor(Math.random() * posts.length)
        this.record = postService.getPost(n)
    }








    // async getPosts() {
    //     let response = await fetch('assets/json/db.json');
    //     let data = await response.json();
    //     return data;
    // }
}
