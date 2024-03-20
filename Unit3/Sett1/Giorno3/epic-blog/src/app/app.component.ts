import { Component } from '@angular/core';

// importa interface
import { Post } from 'src/app/models/post.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'epic-blog';

  record1!: Post
  record2!: Post

  constructor() {
    this.getPosts().then((posts) => {  

      var n = Math.floor(Math.random() * posts.length)
      this.record1 = posts[n]

      n = Math.floor(Math.random() * posts.length)
      this.record2 = posts[n]
    });
  }

  async getPosts() {
    let response = await fetch('assets/json/db.json');
    let data = await response.json();
    return data;
  }
}
