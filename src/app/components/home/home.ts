
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

  imagenes: string[] = [
    
    'https://images.homify.com/v1500404452/p/photo/image/2131069/1.jpg',
    'https://nettcontrol.com/wp-content/uploads/sala-de-juntas-moderna-con-crestron-1024x695.jpg',
    'https://static.vecteezy.com/system/resources/thumbnails/072/261/233/small/modern-office-space-with-stunning-city-view-and-natural-light-photo.jpg'
  ];

  indice = 0;
  imagenActual = this.imagenes[0];

  ngOnInit(): void {
    setInterval(() => {
      this.siguiente();
    }, 3000);
  }

  siguiente() {
    this.indice++;

    if (this.indice >= this.imagenes.length) {
      this.indice = 0;
    }

    this.imagenActual = this.imagenes[this.indice];
  }

  anterior() {
    this.indice--;

    if (this.indice < 0) {
      this.indice = this.imagenes.length - 1;
    }

    this.imagenActual = this.imagenes[this.indice];
  }
}