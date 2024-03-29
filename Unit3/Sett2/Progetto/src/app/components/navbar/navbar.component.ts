import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  datiCaricati = false




  ngOnInit(): void {



    if (!this.datiCaricati) {
      this.datiCaricati = true
    }


  }

}
