import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

    idPost!: number
    post!: Post

    constructor(private route: ActivatedRoute) {
        this.getPosts().then((posts) => {
            this.idPost = Number(this.route.snapshot.paramMap.get('id'))
            this.post = posts[this.idPost - 1]
        });
    }

    async getPosts() {
        let response = await fetch('assets/json/db.json');
        let data = await response.json();
        return data;
    }
}
