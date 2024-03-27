import { Component, OnInit, numberAttribute } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    testoDigitato: string = '';
    posts: Post[] = [];
    tagSelected = 0;

    constructor(private postSrv: PostService) {
    }

    ngOnInit() {
        this.posts = this.postSrv.getPosts();
    }

    filtra(filter: string, index: number) {
        this.tagSelected = index;
        this.posts = this.postSrv.getPostsByFilter(filter);
    }    
}