import { Component, OnInit } from '@angular/core';
import { Todo, Users } from 'src/app/models/users';
import { TodoService } from 'src/app/service/todo.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    apiURL = 'http://localhost:3000'

    users: Users[] = [];
    todos: Todo[] = [];

    users2: Users[] = [];



    filteredTodos: Todo[] = [];
    queryRequested = false;

    constructor(private todoService: TodoService) {
    }

    ngOnInit(): void {
        this.todoService.getUsers().subscribe(data => {
            this.users = data;
            this.todoService.saveDataUsers(data);
        })

        this.todoService.getTodos().subscribe(data => {
            this.todos = data;
            this.todoService.saveDataTodo(data);
        })        
    }

    getUtenteAssegnatario(id: number) {
        return this.todoService.getUtenteAssegnatario(id);
    }

    cambiaStatoTask(id: number) {
        this.todoService.cambiaStatoTask(id);
    }

    filtra(event: any) {
        this.queryRequested = true;
        const textSearch = event.target.value;
        this.filteredTodos = this.todoService.filtra(textSearch) as Todo[];
    }
}