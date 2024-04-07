import { Component } from '@angular/core';
import { AuthData } from 'src/app/models/auth-data';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user!: AuthData | null;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.user$.subscribe((user) => {
            this.user = user;
        });
    }

    logout() {
        this.authService.logout();
    }
}
