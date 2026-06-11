
import { Component } from '@angular/core';
// 👇 AGREGÁ ESTA LÍNEA (revisá que la ruta coincida con tus carpetas)
import { Navbar } from './components/navbar/navbar'; 
import {HomeComponent} from './components/home/home'; // Y esta también
import { Footer } from './components/footer/footer'; // Supongo que tenés estos también

@Component({
  selector: 'app-root',
  standalone: true, // Si estás usando componentes Standalone (Angular moderno)
  imports: [Navbar, HomeComponent, Footer], // <--- Acá es donde te tiraba el error
  templateUrl: './app.html',
})
export class App {
  // ...
}

