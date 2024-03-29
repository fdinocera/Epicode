import { Injectable } from '@angular/core';
import { Db } from '../models/users';


@Injectable({
    providedIn: 'root'
})
export class TodoService {
    apiURL = '../../../assets/todoDb.json'

    getUsers() {
        return this.readData().then(data => {
            return data.users;
        })
    }

    getTodos() {
        return this.readData().then(data => {
            return data.todo;
        })
    }

    async readData() {
        const response = await fetch(this.apiURL);
        const records = await response.json();
        console.log(records);
        return records as Db
    }
}
