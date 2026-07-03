import { Injectable } from '@angular/core';
import { ClienteDto } from '../interfaces/clienteDto.model';
import { ApiService } from './api.service';
import { RespuestaDto } from '../interfaces/respuestaDto.model';
import { HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private apiService: ApiService, private datePipe: DatePipe) { }

  listarClientes() {
    let url = `listarClientes`;
    let headers = new HttpHeaders();
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

  insertarCliente(cliente: ClienteDto) {
    let url = `insertarCliente`;
    const data = this.apiService.post<RespuestaDto>(url, cliente);
    return data;
  }

  actualizarCliente(cliente: ClienteDto) {
    let url = `actualizarCliente`;
    const data = this.apiService.put<RespuestaDto>(url, cliente.idCliente, cliente);
    return data;
  }

  buscarCliente(idCliente: string) {
    let url = `buscarCliente`;
    let headers = new HttpHeaders();
    headers = headers.set('idCliente', idCliente);
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

  iniciarSesion(cliente: ClienteDto) {
    let url = `iniciarSesion`;
    const data = this.apiService.post<RespuestaDto>(url, cliente);
    return data;
  }

  cerrarSesion(idCliente: number) {
    let url = `cerrarSesion`;
    let headers = new HttpHeaders();
    const data = this.apiService.put<RespuestaDto>(url, idCliente, headers);
    return data;
  }

  actualizarClave(cliente: ClienteDto) {
    let url = `actualizarClaveCliente`;
    const data = this.apiService.post<RespuestaDto>(url, cliente);
    return data;
  }

  generarNuevaClaveCliente(cliente: ClienteDto) {
    let url = `generarNuevaClaveCliente`;
    const data = this.apiService.post<RespuestaDto>(url, cliente);
    return data;
  }

  reporteAuditoria(area: string, fechaInicio: Date, fechaFin: Date) {
    let url = `ReporteAuditoria`;
    let fecInicio = this.datePipe.transform(fechaInicio, 'yyyy-MM-dd')
    let fecFin = this.datePipe.transform(fechaFin, 'yyyy-MM-dd')
    let headers = new HttpHeaders();
    headers = headers.set('area', area);
    headers = headers.set('fechaInicio', fecInicio?fecInicio:'');
    headers = headers.set('fechaFin', fecFin?fecFin:'');
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

  dashboardAdministracion(areas: string, tipos: string, estados: string, anio: string, mes: string, descripcion: string) {
    let url = `dashboardAdministracion`;
    let headers = new HttpHeaders();
    headers = headers.set('areas', areas);
    headers = headers.set('tipos', tipos);
    headers = headers.set('estados', estados);
    headers = headers.set('anio', anio);
    headers = headers.set('mes', mes);
    headers = headers.set('descripcion', descripcion);
    const data = this.apiService.get<RespuestaDto>(url, headers);
    return data;
  }

}
