import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = environment.apiURL;
    users!: User[]

    constructor(private http: HttpClient) {}

    getUsers() {        
        return this.http.get<User[]>(`${this.apiURL}users`);
    }

    getUser(id: number) {
        return this.http.get<User>(`${this.apiURL}users/${id}`);
    }
}
