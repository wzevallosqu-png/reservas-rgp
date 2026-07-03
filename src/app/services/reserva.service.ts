import { Injectable } from '@angular/core';
import { ReservaDto } from '../interfaces/reservaDto.model';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { RespuestaDto } from '../interfaces/respuestaDto.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private reserva: ReservaDto = {
    idReserva: 0,
    idUsuario: Number(localStorage.getItem('idUsuario') ?? 0),
    fechaReserva: '',
    horaReserva: '',
    cantidadPersonas: 1,
    estadoReserva: 1,
    detalles: []
  };

  setReserva(reserva: ReservaDto) {
    this.reserva = reserva;
  }

  getReserva(): ReservaDto {
    return this.reserva;
  }

  constructor(private apiService: ApiService, private authService: AuthService) { }

  token = this.authService.getToken();

  listarReservas(idUsuario: string) {
    let url = `listarReservas`;
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    headers = headers.set('idUsuario', idUsuario);
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

  insertarReserva(reserva: ReservaDto) {
    let url = `insertarReserva`;
    const data = this.apiService.post<RespuestaDto>(url, reserva);
    return data;
  }

  actualizarReserva(reserva: ReservaDto) {
    let url = `actualizarReserva`;
    const data = this.apiService.put<RespuestaDto>(url, reserva.idReserva, reserva);
    return data;
  }

  buscarReserva(idReserva: string) {
    let url = `buscarReserva`;
    let headers = new HttpHeaders();
    headers = headers.set('idReserva', idReserva);
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

}
