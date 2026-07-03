import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReservaDto } from 'src/app/interfaces/reservaDto.model';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.page.html',
  styleUrls: ['./reservation-list.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ReservationListPage implements OnInit {

  reservas: ReservaDto[] = [];
  idUsuario: string = localStorage.getItem('idUsuario')?? '';

  constructor(private router: Router, private reservaService: ReservaService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log(this.idUsuario);
    this.listarReservas()
  }

  listarReservas(){
    this.reservaService.listarReservas(this.idUsuario).subscribe( response =>{
      console.log(response);
      if(response.exito){
          this.reservas = response.data;
      }   
    });
  }

  salir(){
    this.router.navigate(['/login']);
  }

}
