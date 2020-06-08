import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  @Input() mostrarMenu;

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
