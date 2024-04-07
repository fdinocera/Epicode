import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit(form: NgForm) {        
        try {
            this.authService.signup(form.value).subscribe();
            this.router.navigate(['/login']);
        } catch (error) {
            console.error(error);
            alert ('Errore nella registrazione');
        }
    }
}