import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {

    @Input() newPost!: Post;
    edit: boolean = false;    

    toggleEdit(): void {
        this.edit = !this.edit;
    }

    setText() {
        const title = <HTMLInputElement>document.getElementById('title');        
        this.newPost.title = title.value;

        const textarea = <HTMLTextAreaElement>document.getElementById('textarea');        
        this.newPost.body = textarea.value;
    }    
}
