import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReservaDto } from '../../interfaces/reservaDto.model';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.page.html',
  styleUrls: ['./make-reservation.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class MakeReservationPage implements OnInit {
  
  reserva: ReservaDto = {
    idReserva: 0,
    idUsuario: Number(localStorage.getItem('idUsuario') ?? 0),
    fechaReserva: '',
    horaReserva: '',
    cantidadPersonas: 1,
    estadoReserva: 1,
    detalles: []
  };

  constructor(private router: Router
     , private reservaService: ReservaService) { }

  ngOnInit() {
  }

  reservar(){
    this.reservaService.setReserva(this.reserva);
    this.router.navigate(['/select-menu']);
  }
  
  cancelar(){
    this.router.navigate(['/login']);
  }

}
