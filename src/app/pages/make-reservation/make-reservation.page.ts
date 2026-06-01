import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.page.html',
  styleUrls: ['./make-reservation.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class MakeReservationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  cancelar(){
    this.router.navigate(['/login']);
  }

}
