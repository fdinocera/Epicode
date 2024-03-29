import { Component, OnInit } from '@angular/core';
import { Todo, Users } from 'src/app/models/users';
import { TodoService } from 'src/app/service/todo.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    users: Users[] = [];
    todos: Todo[] = [];

    constructor(private todoService: TodoService) {
    }

    ngOnInit(): void {
        this.todoService.getUsers().then(data => {
            this.users = data
        })

        this.todoService.getTodos().then(data => {
            this.todos = data
        })
    }

    getUtenteAssegnatario(id: number) {
        const utente: Users | undefined = this.users.find(user => user.id === id)
        if (utente) {
            return utente?.firstName + " " + utente?.lastName
        }
        return null
    }
}