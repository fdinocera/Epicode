import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent {

  Cars!: Car[];

  constructor() {
    this.getPosts().then((posts) => {
      this.Cars = posts.filter((post) => post.brand === 'Audi');
    })
  };

  async getPosts() {
    let response = await fetch('../../../assets/db.json');
    let data = await response.json();
    return data as Car[];
  }
}
