import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Users } from 'src/app/models/users';
import { Todo } from 'src/app/models/users';

@Component({
    selector: 'app-completed',
    templateUrl: './completed.component.html',
    styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

    users: Users[] = [];
    todos: Todo[] = [];

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {

        this.todoService.getTodos().subscribe(data => {
            data.map(td => {
                if (td.completed) {
                    this.todos.push(td);
                }
            })
        })
    }

    getUtenteAssegnatario(id: number) {
        return this.todoService.getUtenteAssegnatario(id);
    }
    
    cambiaStatoTask(id: number) {        
        this.todoService.cambiaStatoTask(id);
    }
}
