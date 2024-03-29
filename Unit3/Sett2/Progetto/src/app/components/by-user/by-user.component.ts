import { Component, OnInit } from '@angular/core';
import { Todo, Users } from 'src/app/models/users';
import { TodoService } from 'src/app/service/todo.service';

@Component({
    selector: 'app-by-user',
    templateUrl: './by-user.component.html',
    styleUrls: ['./by-user.component.scss']
})
export class ByUserComponent implements OnInit {
    
    users: Users[] = [];
    todos: Todo[] = [];    

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.todoService.getUsers().subscribe(data => {
            this.users = data;            
        })        

        this.todoService.getTodos().subscribe(data => {
            this.todos = data;            
        })        
    }

    cambiaStatoTask(id:number){
        this.todoService.cambiaStatoTask(id)
    }
}