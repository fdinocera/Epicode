import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { PhotoServiceService } from 'src/app/service/photo-service.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    foto: Photo[] = [];

    constructor(private photoService: PhotoServiceService) { }

    ngOnInit(): void {
        this.photoService.getPhotos().subscribe(data =>{
            this.foto= data;
        })
    }

    elimina(id:number){

    }
}
