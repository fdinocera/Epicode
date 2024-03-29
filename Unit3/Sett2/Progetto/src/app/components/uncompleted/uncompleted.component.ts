import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/models/users';

@Component({
    selector: 'app-uncompleted',
    templateUrl: './uncompleted.component.html',
    styleUrls: ['./uncompleted.component.scss']
})
export class UncompletedComponent implements OnInit {

    todos: Todo[] = [];

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.todoService.getTodos().subscribe(data => {
            data.map(td => {
                if (!td.completed) {
                    this.todos.push(td);
                }
            })
        })
    }

    cambiaStatoTask(id: number) {
        this.todoService.cambiaStatoTask(id);
    }

    getUtenteAssegnatario(id:number){
        return this.todoService.getUtenteAssegnatario(id)
    }
}
