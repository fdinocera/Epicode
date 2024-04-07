import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthData } from 'src/app/models/auth-data';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
   
    user!: AuthData | null;

    constructor(private userService: UserService, private router: ActivatedRoute, private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.user$.subscribe(data => {            
            this.user = data;
        })
    }
}