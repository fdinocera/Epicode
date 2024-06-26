import { Injectable } from '@angular/core';
import { 
        ActivatedRouteSnapshot, 
        CanActivate,
        RouterStateSnapshot, 
        UrlTree,
        Router, 
    } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take,map } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
        
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.authService.user$.pipe(
            take(1),
            map((user) => {
                if (user) {
                    return true;
                }
                alert('Necessario il login.');
                return this.router.createUrlTree(['/login']);
            })
        );
    }
};
