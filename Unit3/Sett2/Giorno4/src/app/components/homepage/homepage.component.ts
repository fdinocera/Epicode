import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Photo } from 'src/app/models/photo';
import { PhotoServiceService } from 'src/app/service/photo-service.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

    foto: Photo[] = [];
    sub!: Subscription;

    constructor(private photoService: PhotoServiceService) { }

    ngOnInit(): void {
        this.photoService.getPhotos().subscribe(data => {
            this.foto = data;
        })
    }

    elimina(id: number, index: number) {
        this.photoService.deleteFoto(id).subscribe(() => {
            this.foto.splice(index, 1);
            alert('Foto eliminata');
            console.log(this.foto);
        },
        (err) =>{
            alert(err);
        }        
        )
    }

    addFavorites(){
        this.photoService.addFavorites();
    }
}
