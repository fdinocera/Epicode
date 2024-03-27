import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    ngOnInit(): void {

        new Observable(observer => {
            let count = 0;
            setInterval(() => {
                observer.next(count);
                count++;
            }, 1000)
        }).subscribe(numero =>{
            console.log(numero);
        })
    }

}
