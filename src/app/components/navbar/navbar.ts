
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar', // 👈 ¡ESTO TIENE QUE DECIR ACÁ!
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}