import { Injectable } from '@angular/core';
import { Todo, Users } from '../models/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    apiURL = 'http://localhost:3000';

    users: Users[] = [];
    todos: Todo[] = [];
    
    constructor(private http: HttpClient) {
    }

    getUsers() {
        return this.http.get<Users[]>(this.apiURL + '/users');
    }

    getTodos() {
        return this.http.get<Todo[]>(this.apiURL + '/todo');
    }

    saveDataUsers(data: Users[]) {
        this.users = data;
    }

    saveDataTodo(data: Todo[]) {
        this.todos = data;
    }

    getUtenteAssegnatario(id: number): string {
        const utente = this.users.find(user => user.id == id);
        return utente?.firstName + " " + utente?.lastName;
    }

    cambiaStatoTask(id: number) {
        let task = this.todos.find(todo => todo.id === id)
        if (task) {
            task.completed = !task.completed;
            this.http.put<Todo>(this.apiURL + `/todo/${id}`, task).subscribe();
        }
    }

    filtra(textSearch: string) {
        const filteredTodos: Todo[] = [];

        for (let i = 0; i < this.todos.length; i++) {
            const utente = this.getUtenteAssegnatario(this.todos[i].userId);

            if (utente.toLowerCase().indexOf(textSearch.toLowerCase()) >= 0) {
                filteredTodos.push(this.todos[i])
            }
        }
        return filteredTodos
    }
}