import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class LoginPage implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(){
    this.router.navigate(['/make-reservation']);
  }

  registrarse(){
    this.router.navigate(['/new-user']);
  }
}
