import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from 'src/app/service/photo-service.service';

@Component({
    selector: 'app-foto-preferite',
    templateUrl: './foto-preferite.component.html',
    styleUrls: ['./foto-preferite.component.scss']
})
export class FotoPreferiteComponent implements OnInit {
    totFotoPreferite = 0;

    constructor(private photoservice: PhotoServiceService) { }
    
    ngOnInit(): void {
        this.photoservice.favoritesSub.subscribe(data => {
            this.totFotoPreferite = data;
        })
    }
}
