import { Component } from '@angular/core';

import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent {

  record!: Post

  constructor() {
    this.getPosts().then((posts) => {
      const n = Math.floor(Math.random() * posts.length)
      this.record = posts[n]
    });
  }

  async getPosts() {
    let response = await fetch('assets/json/db.json');
    let data = await response.json();
    return data;
  }

}
