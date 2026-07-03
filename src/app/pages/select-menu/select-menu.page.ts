import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuDto } from '../../interfaces/menuDto.model';
import { ReservaDto, DetalleReserva} from '../../interfaces/reservaDto.model';
import { MenuService } from 'src/app/services/menu.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.page.html',
  styleUrls: ['./select-menu.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})

export class SelectMenuPage implements OnInit {

  listaMenus: MenuDto[] = [];
  menusAgregados: MenuDto[] = [];
  menuSeleccionado?: MenuDto;
  
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
     , private menuService: MenuService
     , private reservaService: ReservaService) { }

  ngOnInit() {
    this.listarMenus();
  }

  ionViewWillEnter() {
    this.reserva = this.reservaService.getReserva();
  }

  listarMenus(){
    this.menuService.listarMenus().subscribe( response =>{
      console.log(response);
      if(response.exito){
          this.listaMenus = response.data;
      }   
    });
  }

  agregar() {
    if (!this.menuSeleccionado) {
      return;
    }
    this.menusAgregados.push(this.menuSeleccionado);
    const detalle = new DetalleReserva();
    detalle.idMenu = this.menuSeleccionado.idMenu; // o el nombre de tu propiedad
    detalle.cantidad = 1;
    this.reserva?.detalles.push(detalle);
    this.menuSeleccionado = undefined;
  }

  reservar(){
    console.log(this.reserva);
    this.reservaService.insertarReserva(this.reserva).subscribe( response =>{
      if(response.exito){
        this.router.navigate(['/reservation-list']);
      }
      else{
        //this.error=true;
        //this.mensaje=response.mensaje;
      }
    });
  }

  cancelar(){
    this.router.navigate(['/login']);
  }
}
